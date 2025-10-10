import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Actualite } from '../../../../shared/models/actualite.model';
import { AnimationService } from '../../../../shared/services/animation.service';
import { ConfigService } from '../../../../core/utils/config-service';
import { PublicService } from '../../../../core/services/public.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: "app-communiques",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,NgxPaginationModule],
  template: `
     <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Communiqués</h1>
          <p
            class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto"
          >
            Restez informé des dernières nouvelles et initiatives du Ministère
            du Travail.
          </p>
        </div>
      </div>
    </div>

    <!-- Actualité à la une -->
   

    <!-- Filtres -->
    <section
      class="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
      aria-label="Filtres par catégorie"
    >
      <div class="container-custom">
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <!-- Filtres par catégorie -->
          <div
            class="flex flex-wrap justify-center gap-4"
            role="group"
            aria-label="Filtrer les actualités par catégorie"
          >
            <button
              *ngFor="let categorie of categories"
              (click)="filtrerParCategorie(categorie)"
              [class]="
                categorieActive === categorie
                  ? 'btn-primary'
                  : 'btn-secondary'
              "
              class="px-6 py-2 rounded-full text-sm font-medium transition-all"
              [attr.aria-pressed]="categorieActive === categorie"
              [attr.aria-label]="'Filtrer par ' + categorie"
            >
              {{ categorie }}
            </button>
          </div>
          <!-- Filtre par structure -->
          <div class="relative w-full md:w-auto">
            <select
              (change)="filtrerParStructure($event)"
              class="form-select w-full md:w-64 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              aria-label="Filtrer par structure"
            >
              <option *ngFor="let structure of structures" [value]="structure.id">
                {{ structure.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Liste des actualités -->
    <section
      class="section-padding bg-gray-50 dark:bg-gray-800"
      aria-label="Liste des actualités"
    >
      <div class="container-custom py-8">
  <div
    class="space-y-6"
    role="list"
  >
    <article
      *ngFor="
        let communique of communiquesFiltrees | paginate: {
            id: 'communique_id',
            itemsPerPage: pg.pageSize,
            currentPage: pg.page,
            totalItems: pg.total
          };
        trackBy: trackByActualiteId
      "
      class="group flex flex-col md:flex-row items-start bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
      role="listitem"
    >
      <!-- Bandeau coloré à gauche -->
      <div
        class="hidden md:block w-2 rounded-lg bg-primary-700 dark:bg-primary-600 mr-5 flex-shrink-0"
      ></div>

      <!-- Contenu principal -->
      <div class="flex-1">
        <!-- Catégorie et date -->
        <div class="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span
            class="bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 px-2 py-0.5 rounded-full font-medium"
          >
            {{ communique.categorie ?? 'Communiqué officiel' }}
          </span>
          <span class="flex items-center space-x-1">
            <svg
              class="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10m-11 5h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
              />
            </svg>
            <span>{{ communique.created_at | date: 'd MMMM yyyy' : 'fr' }}</span>
          </span>
        </div>

        <!-- Titre -->
        <h3
          class="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
        >
          {{ communique.title }}
        </h3>

        <!-- Description courte -->
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {{ communique.sub_description }}
        </p>

        <!-- Pied -->
        <div class="flex items-center justify-between mt-auto">
          <a
            [routerLink]="['/communiques', communique.slug]"
            class="inline-flex items-center text-primary-700 dark:text-primary-400 font-medium hover:underline"
          >
            Lire le communiqué
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <div *ngIf="communique.tags?.length" class="flex space-x-2">
            <span
              *ngFor="let tag of communique.tags.slice(0, 2)"
              class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </article>
  </div>


        <!-- Pagination -->
         <ul class="flex justify-center mt-12 list-none space-x-2" *ngIf="communiquesFiltrees.length > 0">

          <pagination-controls  id="communique_id"
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

    <!-- Newsletter -->
    <!--<section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="card p-8 lg:p-12 text-center ">
          <h3
            class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Restez informé de nos actualités
          </h3>
          <p
            class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-content"
          >
            Inscrivez-vous à notre newsletter pour recevoir nos dernières
            actualités et informations importantes directement dans votre boîte
            mail.
          </p>
          <form
            class="max-w-md mx-auto"
            aria-label="Inscription à la newsletter"
          >
            <div class="flex gap-3">
              <label for="newsletter-email" class="sr-only"
                >Adresse email pour la newsletter</label
              >
              <input
                type="email"
                id="newsletter-email"
                placeholder="Votre adresse email"
                required
                class="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                class="btn-primary px-6 py-3 whitespace-nowrap"
                aria-label="S'inscrire à la newsletter"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>-->  `,
  styles: [
    `
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `,
  ],
})
export class CommuniquesComponent {
  categorieActive:any  = 0;
    structureActive:any = 0;
  
    categories:any[] = [];
  
    structures: any[] = [];
  
    actualiteUne: any ;
  
    communiques: any[] = [  ];
  
    communiquesFiltrees:any = [];
  
    pg:any={
      pageSize:9,
      page:1,
      total:0
    }
  
    constructor(private animationService: AnimationService,private publicService:PublicService) {}
  
    ngOnInit() {
      this.getAll()
    }
  
  
  
    getAll(){
      this.publicService.getCommuniques(this.pg.pageSize,this.pg.page).subscribe((res:any)=>{
      this.categories=["Toutes",...res.data?.categories]
      this.structures=[{id:0,name:"Toutes les structures"},...res.data?.structures]
       this.communiques=res.data.communiques.data
       this.communiquesFiltrees=this.communiques
       this.pg.total=res.data.communiques.total
      })
    }
  
    ngAfterViewInit() {
      setTimeout(() => {
        this.animationService.initScrollAnimations();
      }, 100);
    }
  
    filtrerParCategorie(categorie: any) {
      this.categorieActive = categorie;
      this.appliquerFiltres();
    }
  
    filtrerParStructure(ev: any) {
      this.structureActive = parseInt(ev.target.value);
      this.appliquerFiltres();
    }
  
    appliquerFiltres() {
      let communiques = [...this.communiques];
  
      // Filtrage par catégorie
      if (this.categorieActive !== 'Toutes') {
        communiques = communiques.filter(
          (a) => a.category === this.categorieActive      );
      }
  
      // Filtrage par structure
      if (this.structureActive !== 0 && this.structureActive !== 1) {
        communiques = communiques.filter((a) => a.media?.structure_id === this.structureActive);
      }
  
      this.communiquesFiltrees = communiques;
    }
  
    trackByActualiteId(index: number, actualite: Actualite): number {
      return actualite.id;
    }
  
      getLink(dir:any,photo:any){
        return`${ConfigService.toFile("storage")}/${dir}/${photo}`
      }
  
  
      pageChanged(ev:any){
  
        this.pg.page=ev
        this.getAll()
      }
  
}
