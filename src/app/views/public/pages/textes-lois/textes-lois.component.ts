import { Component, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ToastrService } from 'ngx-toastr';
import { Document } from '../../../../shared/models/actualite.model';
import { AnimationService } from '../../../../shared/services/animation.service';
import { PublicService } from '../../../../core/services/public.service';
import { ConfigService } from '../../../../core/utils/config-service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-textes-lois',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule, NgxExtendedPdfViewerModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-accent-700 to-accent-800 dark:from-accent-800 dark:to-accent-900 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Textes & Lois</h1>
          <p class="text-xl text-accent-100 dark:text-accent-200 max-w-3xl mx-auto">
            Consultez l'ensemble des textes juridiques, lois, décrets et arrêtés régissant le monde du travail au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Filtres -->
    <section class="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <!-- Filtres par type -->
          <div class="flex flex-wrap justify-center gap-4">
            <button
              *ngFor="let type of typesDocuments"
              (click)="filtrerDocuments(type.slug)"
              [class]="typeActif === type.slug ? 'btn-primary' : 'btn-secondary'"
              class="px-6 py-2 rounded-full text-sm font-medium transition-all">
              {{ type.nom }}
            </button>
          </div>
          <!-- Barre de recherche -->
          <div class="relative w-full md:w-auto">
            <input
              type="text"
              [(ngModel)]="termeRecherche"
              (ngModelChange)="appliquerFiltres()"
              placeholder="Rechercher par titre ou description..."
              class="form-input w-full md:w-72 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
            <svg class="w-5 h-5 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Documents -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="space-y-6">
          <div *ngFor="let document of documentsFiltres | paginate: { id: 'actuality_id',
                                                      itemsPerPage: pg.pageSize,
                                                      currentPage: pg.page,
                                                      totalItems: pg.total }; trackBy: trackByDocumentId" 
               class="card p-6  hover:shadow-lg transition-all duration-300">
            <div class="sm:flex sm:items-start sm:justify-between sm:gap-4">
              <div class="w-full min-w-0">
                <div class="flex items-center mb-3">
                  <span [class]="getTypeClass(document.type)" 
                        class="px-3 py-1 rounded-full text-xs font-medium mr-3">
                    {{ getTypeLabel(document.type) }}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ document.created_at | date:'d MMMM yyyy':'fr' }}
                  </span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 break-words">{{ document.name }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 rich-content break-words" [innerHTML]="document.description"></p>
                <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                  <button type="button"
                          (click)="lireDocument(document)"
                          class="inline-flex items-center gap-2 rounded-lg bg-accent-700 hover:bg-accent-800 text-white text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                          [attr.aria-label]="'Lire le document ' + document.name">
                    <i class="fas fa-book-open" aria-hidden="true"></i>
                    Lire
                  </button>

                  <button type="button"
                          (click)="telechargerDocument(document)"
                          [disabled]="documentEnTelechargement === document.id"
                          class="inline-flex items-center gap-2 rounded-lg border border-accent-700 dark:border-accent-400 text-accent-700 dark:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20 text-sm font-medium px-4 py-2 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                          [attr.aria-label]="'Télécharger le document ' + document.name">
                    <i class="fas" [ngClass]="documentEnTelechargement === document.id ? 'fa-spinner fa-spin' : 'fa-download'" aria-hidden="true"></i>
                    {{ documentEnTelechargement === document.id ? 'Téléchargement…' : 'Télécharger' }}
                  </button>

                  <button type="button"
                          (click)="partagerDocument(document)"
                          class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                          [attr.aria-label]="'Partager le document ' + document.name">
                    <i class="fas fa-share-nodes" aria-hidden="true"></i>
                    Partager
                  </button>
                </div>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-6 text-center shrink-0 flex sm:block justify-center">
                <div class="w-16 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">📋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
          <ul class="flex justify-center mt-12 list-none space-x-2" *ngIf="documentsFiltres.length > 0">

          <pagination-controls  id="actuality_id"
                      (pageChange)="pageChanged($event)"
                      (pageBoundsCorrection)="pageChanged($event)"
                      [maxSize]="pg.total"
                      [directionLinks]="true"
                      [autoHide]="true"
                      [responsive]="true"
                      [previousLabel]="'Précédent'"
                      [nextLabel]="'Suivant'"
                      screenReaderPaginationLabel="Pagination"
                      screenReaderPageLabel="page"
                      screenReaderCurrentLabel="Page active"
                      >
</pagination-controls>
      </ul>
      </div>
    </section>

    <!-- Aide juridique -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Besoin d'aide juridique ?</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Nos conseillers juridiques sont à votre disposition pour vous aider à comprendre 
              et appliquer la législation du travail.
            </p>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-4">
                  <span class="text-accent-700 dark:text-accent-400">📞</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Consultation téléphonique</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 12 34</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-4">
                  <span class="text-accent-700 dark:text-accent-400">✉️</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Consultation par email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'juridique@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-4">
                  <span class="text-accent-700 dark:text-accent-400">🏢</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Rendez-vous physique</p>
                  <p class="text-gray-600 dark:text-gray-300">Du lundi au vendredi, 8h-17h</p>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <img src="assets/besoinjuridique.jpg" 
                 alt="Consultation juridique" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Lecteur de document -->
    <div *ngIf="documentAffiche"
         class="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
         role="dialog"
         aria-modal="true"
         [attr.aria-label]="'Lecture de ' + documentAffiche.name">
      <div class="absolute inset-0 bg-black/70" (click)="fermerLecteur()" aria-hidden="true"></div>

      <div class="relative flex flex-col w-full sm:max-w-5xl h-[92vh] sm:h-[88vh] bg-white dark:bg-gray-900 sm:rounded-2xl shadow-2xl overflow-hidden motion-safe:animate-menu-in">
        <!-- En-tête -->
        <div class="flex items-start gap-3 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
          <div class="min-w-0 flex-1">
            <h2 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
              {{ documentAffiche.name }}
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ getTypeLabel(documentAffiche.type) }}</p>
          </div>

          <button type="button"
                  (click)="telechargerDocument(documentAffiche)"
                  class="hidden sm:inline-flex items-center gap-2 rounded-lg border border-accent-700 dark:border-accent-400 text-accent-700 dark:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20 text-sm font-medium px-3 py-1.5 transition-colors shrink-0">
            <i class="fas fa-download" aria-hidden="true"></i>
            Télécharger
          </button>

          <button type="button"
                  (click)="fermerLecteur()"
                  class="p-2 rounded-lg text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shrink-0"
                  aria-label="Fermer le lecteur">
            <i class="fas fa-times text-lg" aria-hidden="true"></i>
          </button>
        </div>

        <!-- Document -->
        <div class="flex-1 min-h-0 bg-gray-100 dark:bg-gray-800">
          <ngx-extended-pdf-viewer
            [src]="urlDocumentAffiche"
            height="100%"
            zoom="page-width"
            [showOpenFileButton]="false"
            [showPrintButton]="true"
            [showDownloadButton]="false"
            [showSidebarButton]="false"
            [textLayer]="true">
          </ngx-extended-pdf-viewer>
        </div>

        <!-- Actions sur mobile -->
        <div class="sm:hidden flex gap-2 border-t border-gray-200 dark:border-gray-700 px-4 py-3">
          <button type="button"
                  (click)="telechargerDocument(documentAffiche)"
                  class="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-700 text-white text-sm font-medium px-4 py-2">
            <i class="fas fa-download" aria-hidden="true"></i>
            Télécharger
          </button>
          <button type="button"
                  (click)="partagerDocument(documentAffiche)"
                  class="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-2">
            <i class="fas fa-share-nodes" aria-hidden="true"></i>
            Partager
          </button>
        </div>
      </div>
    </div>
  `
})
export class TextesLoisComponent implements AfterViewInit, OnDestroy {
  
  typeActif = 'tous';
  termeRecherche = '';
  
  typesDocuments = [
    { nom: 'Tous', slug: 'tous' },
    { nom: 'Lois', slug: 'lois' },
    { nom: 'Décrets', slug: 'decrets' },
    { nom: 'Arrêtés', slug: 'arretes' },
    { nom: 'Publications', slug: 'publications' },
    { nom: "Rapports d'activités", slug:'rapport-activites' }
  ];
  
  documents: any[] = [];
  
  documentsFiltres = [...this.documents];
  
    pg:any={
    pageSize:9,
    page:1,
    total:0
  }


  constructor(private animationService: AnimationService,private publicService:PublicService, private toastr: ToastrService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }

  
  filtrerDocuments(type: string) {
    this.typeActif = type;
    this.appliquerFiltres();
  }

  ngOnInit(){    this.getAll()
}

   getAll(){
    this.publicService.getDocument(this.pg.pageSize,this.pg.page,this.typeActif).subscribe((res:any)=>{
     this.documents=res.data.documents.data
     this.documentsFiltres=this.documents
     this.pg.total=res.data.documents.total
    })
  }


  appliquerFiltres() {
    let documents = [...this.documents];

    // Filtrage par type
    if (this.typeActif !== 'tous') {
      documents = documents.filter(doc => doc.type === this.typeActif);
    }

    // Filtrage par terme de recherche
    const terme = this.termeRecherche.toLowerCase().trim();
    if (terme) {
      documents = documents.filter(doc =>
        doc.name.toLowerCase().includes(terme) ||
        doc.description.toLowerCase().includes(terme)
      );
    }

    this.documentsFiltres = documents;
  }
  
  getTypeClass(type: string): string {
    const classes = {
      'loi': 'bg-blue-100 text-blue-800',
      'decret': 'bg-green-100 text-green-800',
      'arrete': 'bg-yellow-100 text-yellow-800',
      'circulaire': 'bg-purple-100 text-purple-800'
    };
    return classes[type as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }
  
  getTypeLabel(type: string): string {
    const labels = {
      'lois': 'Loi',
      'decrets': 'Décret',
      'arretes': 'Arrêté',
      'publications': 'Publications',
      'rapport-activites': "Rapport d'activités"
    };
    return labels[type as keyof typeof labels] || type;
  }


  /** Document ouvert dans le lecteur, null si le lecteur est fermé. */
  documentAffiche: any = null;
  urlDocumentAffiche = '';
  /** Identifiant du document en cours de téléchargement (pour l'indicateur). */
  documentEnTelechargement: any = null;

  lireDocument(doc: any) {
    this.documentAffiche = doc;
    this.urlDocumentAffiche = ConfigService.toDocument('docs', doc.filename);
    document.body.classList.add('overflow-hidden');
  }

  fermerLecteur() {
    this.documentAffiche = null;
    this.urlDocumentAffiche = '';
    document.body.classList.remove('overflow-hidden');
  }

  @HostListener('document:keydown.escape')
  onEchap() {
    if (this.documentAffiche) { this.fermerLecteur(); }
  }

  ngOnDestroy() {
    document.body.classList.remove('overflow-hidden');
  }

  /**
   * Télécharge le fichier au lieu de l'ouvrir dans un onglet.
   * Le PDF est récupéré puis enregistré depuis le navigateur ; si la requête
   * échoue (fichier absent, blocage inter-domaine), on ouvre le lien.
   */
  async telechargerDocument(doc: any) {
    const url = ConfigService.toDocument('docs', doc.filename);
    const nomFichier = this.nomDeFichier(doc, url);

    this.documentEnTelechargement = doc.id;

    try {
      const reponse = await fetch(url);
      if (!reponse.ok) { throw new Error(`HTTP ${reponse.status}`); }

      const blob = await reponse.blob();
      const lienTemporaire = document.createElement('a');
      lienTemporaire.href = URL.createObjectURL(blob);
      lienTemporaire.download = nomFichier;
      document.body.appendChild(lienTemporaire);
      lienTemporaire.click();
      lienTemporaire.remove();
      URL.revokeObjectURL(lienTemporaire.href);
    } catch {
      window.open(url, '_blank', 'noopener');
    } finally {
      this.documentEnTelechargement = null;
    }
  }

  /**
   * Partage le document : boîte de partage du système quand elle existe
   * (mobile), sinon copie du lien dans le presse-papiers.
   */
  async partagerDocument(doc: any) {
    const url = this.getLink('docs', doc.filename);
    const donnees = { title: doc.name, text: `Document du Ministère du Budget et de la Fonction Publique : ${doc.name}`, url };

    if (navigator.share) {
      try {
        await navigator.share(donnees);
        return;
      } catch (erreur: any) {
        // L'utilisateur a fermé la boîte de partage : on ne fait rien de plus.
        if (erreur?.name === 'AbortError') { return; }
      }
    }

    if (await this.copierDansPressePapiers(url)) {
      this.toastr.success('Lien du document copié', 'Partage');
    } else {
      // Dernier recours : on affiche le lien, sans fenêtre bloquante.
      this.toastr.info(url, 'Lien du document', { disableTimeOut: true, closeButton: true });
    }
  }

  /** Copie via l'API presse-papiers, avec repli sur la méthode historique. */
  private async copierDansPressePapiers(texte: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(texte);
      return true;
    } catch {
      // API indisponible (contexte non sécurisé, permission refusée) :
      // on repasse par un champ temporaire.
      try {
        const champ = document.createElement('textarea');
        champ.value = texte;
        champ.setAttribute('readonly', '');
        champ.style.position = 'fixed';
        champ.style.opacity = '0';
        document.body.appendChild(champ);
        champ.select();
        const copie = document.execCommand('copy');
        champ.remove();
        return copie;
      } catch {
        return false;
      }
    }
  }

  private nomDeFichier(doc: any, url: string): string {
    const depuisUrl = decodeURIComponent(url.split('/').pop() || '').split('?')[0];
    if (depuisUrl) { return depuisUrl; }

    const nom = (doc.name || 'document').replace(/[^a-zA-Z0-9-_ ]/g, '').trim().replace(/\s+/g, '-');
    return `${nom}.pdf`;
  }

      getLink(dir:any,photo:any){
        return ConfigService.toStorage(dir, photo)
      }
  
  
  trackByDocumentId(index: number, document: Document): string {
    return document.id;
  }


    pageChanged(ev:any){

      this.pg.page=ev
      this.getAll()
    }
}