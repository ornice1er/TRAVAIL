import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Document } from '../../../../shared/models/actualite.model';
import { AnimationService } from '../../../../shared/services/animation.service';
import { PublicService } from '../../../../core/services/public.service';
import { ConfigService } from '../../../../core/utils/config-service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-textes-lois',
  standalone: true,
  imports: [CommonModule, FormsModule,NgxPaginationModule],
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
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-3">
                  <span [class]="getTypeClass(document.type)" 
                        class="px-3 py-1 rounded-full text-xs font-medium mr-3">
                    {{ getTypeLabel(document.type) }}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ document.created_at | date:'d MMMM yyyy':'fr' }}
                  </span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ document.name }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ document.description }}</p>
                <div class="flex items-center space-x-4">
                  <a [href]="getLink('docs',document.filename)" 
                     target="_blank"
                     class="text-accent-700 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 font-medium inline-flex items-center">
                    📄 Télécharger le PDF
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </a>
                  <button class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium inline-flex items-center">
                    🔗 Partager
                  </button>
                </div>
              </div>
              <div class="ml-6 text-center">
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
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Consultation juridique" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>
  `
})
export class TextesLoisComponent implements AfterViewInit {
  
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


  constructor(private animationService: AnimationService,private publicService:PublicService) {}
  
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


      getLink(dir:any,photo:any){
        return`${ConfigService.toFile("storage")}/${dir}/${photo}`
      }
  
  
  trackByDocumentId(index: number, document: Document): string {
    return document.id;
  }


    pageChanged(ev:any){

      this.pg.page=ev
      this.getAll()
    }
}