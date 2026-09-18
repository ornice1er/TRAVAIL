import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface SeoData {
  /** Titre de la page, sans le nom du site. */
  title: string;
  description?: string;
  /** URL absolue ou chemin relatif de l'image de partage. */
  image?: string;
  /** « website » pour une page courante, « article » pour une actualité ou un communiqué. */
  type?: 'website' | 'article';
  publishedAt?: string;
  author?: string;
  /** Empêche l'indexation (pages d'administration, résultats de recherche…). */
  noIndex?: boolean;
}

const SITE_NAME = 'Ministère du Budget et de la Fonction Publique';
const DEFAULT_DESCRIPTION =
  "Site officiel du Ministère du Budget et de la Fonction Publique de la République du Bénin : services en ligne, concours, communiqués et actualités.";
const DEFAULT_IMAGE = 'assets/logo-mtfp-budget.jpeg';

/**
 * Renseigne le titre, la description, les balises de partage (Open Graph,
 * Twitter), l'URL canonique et les données structurées de chaque page.
 *
 * Le site est une application monopage : sans cela, toutes les pages
 * partagent le titre et la description de `index.html`.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  /**
   * Applique à chaque navigation les données SEO déclarées sur la route
   * (`data: { seo: { ... } }`). Les pages de détail complètent ensuite
   * avec leurs propres données via `update()`.
   */
  watchRoutes(): void {
    // La première navigation est déjà terminée quand le layout s'initialise :
    // on applique d'abord l'état courant, puis on suit les navigations suivantes.
    this.applyCurrentRoute();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.applyCurrentRoute());
  }

  private applyCurrentRoute(): void {
    let route = this.route;
    while (route.firstChild) { route = route.firstChild; }

    const seo = route.snapshot.data?.['seo'] as SeoData | undefined;

    // Les pages de détail renseignent elles-mêmes leurs données une fois le
    // contenu chargé : on ne pose ici que le titre provisoire de la route.
    this.update(seo ?? { title: '' });
  }

  update(data: SeoData): void {
    const description = data.description?.trim() || DEFAULT_DESCRIPTION;
    const fullTitle = data.title ? `${data.title} | ${SITE_NAME}` : SITE_NAME;
    const url = this.currentUrl();
    const image = this.absolute(data.image || DEFAULT_IMAGE);

    this.title.setTitle(fullTitle);
    this.setName('description', description);
    this.setName('robots', data.noIndex ? 'noindex, nofollow' : 'index, follow');

    this.setProperty('og:title', fullTitle);
    this.setProperty('og:description', description);
    this.setProperty('og:url', url);
    this.setProperty('og:image', image);
    this.setProperty('og:type', data.type ?? 'website');
    this.setProperty('og:site_name', SITE_NAME);
    this.setProperty('og:locale', 'fr_FR');

    this.setProperty('twitter:card', 'summary_large_image');
    this.setProperty('twitter:title', fullTitle);
    this.setProperty('twitter:description', description);
    this.setProperty('twitter:image', image);
    this.setProperty('twitter:url', url);

    this.setCanonical(url);
    this.setArticleJsonLd(data, url, image);
  }

  /** Nettoie un contenu HTML pour en faire une description de 160 caractères. */
  toDescription(html: string | null | undefined, max = 160): string {
    if (!html) { return DEFAULT_DESCRIPTION; }

    // Les contenus viennent d'un éditeur riche : on retire les balises puis on
    // décode les entités (&eacute;, &nbsp;…) pour une description lisible.
    const withoutTags = html.replace(/<[^>]*>/g, ' ');
    const decoder = this.document.createElement('textarea');
    decoder.innerHTML = withoutTags;
    const text = (decoder.value || withoutTags).replace(/\s+/g, ' ').trim();

    if (!text) { return DEFAULT_DESCRIPTION; }

    return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
  }

  private currentUrl(): string {
    const base = this.document.baseURI?.replace(/\/$/, '') ?? '';
    const path = this.router.url.split('?')[0].split('#')[0];
    return `${base}${path === '/' ? '/' : path}`;
  }

  private absolute(src: string): string {
    if (/^https?:\/\//i.test(src)) { return src; }
    const base = this.document.baseURI?.replace(/\/$/, '') ?? '';
    return `${base}/${src.replace(/^\//, '')}`;
  }

  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property='${property}'`);
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  /** Données structurées d'article, remplacées (ou retirées) à chaque page. */
  private setArticleJsonLd(data: SeoData, url: string, image: string): void {
    const id = 'seo-article-jsonld';
    this.document.getElementById(id)?.remove();

    if (data.type !== 'article') { return; }

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: data.title,
      description: data.description,
      image: [image],
      datePublished: data.publishedAt,
      author: { '@type': 'Organization', name: data.author || SITE_NAME },
      publisher: {
        '@type': 'GovernmentOrganization',
        name: SITE_NAME,
        logo: { '@type': 'ImageObject', url: this.absolute(DEFAULT_IMAGE) },
      },
      mainEntityOfPage: url,
    });

    this.document.head.appendChild(script);
  }
}
