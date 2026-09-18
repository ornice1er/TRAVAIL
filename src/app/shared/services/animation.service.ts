import { Injectable, OnDestroy } from '@angular/core';

/**
 * Animations d'apparition au défilement.
 *
 * Les classes sont posées par ce service, jamais dans les gabarits : si le
 * script ne s'exécute pas, le contenu reste visible.
 */
@Injectable({
  providedIn: 'root'
})
export class AnimationService implements OnDestroy {

  private observer?: IntersectionObserver;

  /** Éléments animés par défaut : cartes, titres de section, blocs marqués. */
  private static readonly AUTO_SELECTORS = [
    '[data-reveal]',
    '.animate-on-scroll',
    'main .card',
    'main .title-accent',
  ].join(', ');

  private get prefersReducedMotion(): boolean {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }

  /**
   * Prépare et observe les éléments à révéler.
   * À appeler dans `ngAfterViewInit` (les pages du site le font déjà).
   */
  initScrollAnimations(root: ParentNode = document) {
    if (this.prefersReducedMotion) { return; }

    // Les listes (actualités, communiqués, documents) arrivent après l'appel
    // à l'API : on surveille les ajouts pour animer aussi ces éléments.
    this.watchNewContent();

    this.observer ??= new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) { return; }
          entry.target.classList.add('animate');
          this.observer?.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    const elements = Array.from(root.querySelectorAll<HTMLElement>(AnimationService.AUTO_SELECTORS));

    elements.forEach(element => {
      if (element.dataset['revealReady'] === '1') { return; }
      element.dataset['revealReady'] = '1';

      element.classList.add('reveal');
      // Apparition en cascade des éléments d'une même grille (5 paliers max).
      const position = Array.from(element.parentElement?.children ?? []).indexOf(element);
      if (position > 0) {
        element.classList.add(`reveal-delay-${Math.min(position, 5)}`);
      }

      this.observer?.observe(element);
    });
  }

  private mutationObserver?: MutationObserver;
  private rescanTimer?: ReturnType<typeof setTimeout>;

  private watchNewContent() {
    if (this.mutationObserver) { return; }

    const main = document.querySelector('main');
    if (!main) { return; }

    this.mutationObserver = new MutationObserver(() => {
      clearTimeout(this.rescanTimer);
      this.rescanTimer = setTimeout(() => this.initScrollAnimations(), 150);
    });

    this.mutationObserver.observe(main, { childList: true, subtree: true });
  }

  /**
   * Déclenche une action la première fois qu'un élément entre dans l'écran
   * (compteurs chiffrés, graphiques…).
   */
  onceVisible(element: Element, action: () => void) {
    if (this.prefersReducedMotion) { action(); return; }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) { return; }
        observer.disconnect();
        action();
      });
    }, { threshold: 0.25 });

    observer.observe(element);
  }

  animateCountUp(element: HTMLElement, targetValue: number, duration: number = 2000) {
    if (this.prefersReducedMotion) {
      element.textContent = targetValue.toLocaleString('fr-FR');
      return;
    }

    let startValue = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Fonction d'easing
      const easedProgress = this.easeOutQuart(progress);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);

      element.textContent = currentValue.toLocaleString('fr-FR');

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.mutationObserver?.disconnect();
    clearTimeout(this.rescanTimer);
  }

  private easeOutQuart(t: number): number {
    return 1 - (--t) * t * t * t;
  }
}
