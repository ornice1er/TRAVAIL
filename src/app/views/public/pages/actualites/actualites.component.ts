import { Component, AfterViewInit, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AnimationService } from "../../../../shared/services/animation.service";
import { Actualite } from "../../../../shared/models/actualite.model";
import { FormsModule } from "@angular/forms";
import { PublicService } from "../../../../core/services/public.service";
import { ConfigService } from "../../../../core/utils/config-service";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: "app-actualites",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,NgxPaginationModule],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Actualités</h1>
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
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="">
          <div class="card overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="relative h-64 lg:h-auto lg:max-h-86">
                <img
                  [src]="getLink('actualites',actualiteUne?.photo)"
                  [alt]="actualiteUne?.title"
                  class="w-full  object-cover"
                  loading="lazy"
                />
                <div class="absolute top-4 left-4">
                  <span
                    class="bg-primary-800 dark:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium"
                    aria-label="Article à la une"
                  >
                    À la une
                  </span>
                </div>
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center ">
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {{
                    actualiteUne?.created_at | date : "d MMMM yyyy" : "fr"
                  }}
                </div>
                <h2
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  {{ actualiteUne?.title }}
                </h2>
                <p
                  class="text-lg text-gray-600 dark:text-gray-300 mb-6 text-content line-clamp-4"
                >
                  {{ actualiteUne?.sub_description }}
                </p>
                <a
                  [routerLink]="['/actualites', actualiteUne?.slug]"
                  class="btn-primary w-fit"
                  [attr.aria-label]="
                    'Lire article complet: ' + actualiteUne?.title
                  "
                >
                  Lire l'article complet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
              (click)="filtrerParCategorie(categorie.id)"
              [class]="
                categorieActive === categorie.id
                  ? 'btn-primary'
                  : 'btn-secondary'
              "
              class="px-6 py-2 rounded-full text-sm font-medium transition-all"
              [attr.aria-pressed]="categorieActive === categorie.id"
              [attr.aria-label]="'Filtrer par ' + categorie.name"
            >
              {{ categorie.name }}
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
      <div class="container-custom">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          <article
            *ngFor="
              let actualite of actualitesFiltrees | paginate: { id: 'actuality_id',
                                                      itemsPerPage: pg.pageSize,
                                                      currentPage: pg.page,
                                                      totalItems: pg.total };
              trackBy: trackByActualiteId
            "
            class="card overflow-hidden  hover:shadow-lg transition-all duration-300"
            role="listitem"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                [src]="getLink('actualites',actualite.photo)"
                [alt]="actualite.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="bg-primary-800 dark:bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                  [attr.aria-label]="'Catégorie: ' + actualite.categorie"
                >
                  {{ actualite.categorie ?? 'Actualité' }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {{ actualite.created_at | date : "d MMMM yyyy" : "fr" }}
              </div>
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2"
              >
                {{ actualite.title }}
              </h3>
              <p
                class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-content"
              >
                {{ actualite.sub_description }}
              </p>
              <div class="flex items-center justify-between">
                <a
                  [routerLink]="['/actualites', actualite.slug]"
                  class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium inline-flex items-center"
                  [attr.aria-label]="'Lire article: ' + actualite.title"
                >
                  Lire la suite
                  <svg
                    class="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <div class="flex space-x-1" aria-label="Tags de l'article">
                  <span
                    *ngFor="let tag of actualite?.tags?.slice(0, 2)"
                    class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    [title]="'Tag: ' + tag"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
         <ul class="flex justify-center mt-12 list-none space-x-2" *ngIf="actualitesFiltrees.length > 0">

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

    <!-- Newsletter -->
    <section class="section-padding bg-white dark:bg-gray-900">
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
    </section>
  `,
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
export class ActualitesComponent implements OnInit, AfterViewInit {
  categorieActive:any  = 0;
  structureActive:any = 0;

  categories:any[] = [];

  structures: any[] = [];

  actualiteUne: any ;

  actualites: any[] = [  ];

  actualitesFiltrees:any = [];

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
    this.publicService.getActualites(this.pg.pageSize,this.pg.page).subscribe((res:any)=>{
    this.categories=[{id:0,name:"Toutes"},...res.data?.categories]
    this.structures=[{id:0,name:"Toutes les structures"},...res.data?.structures]
    this.actualiteUne=res.data.actualiteUne,
     this.actualites=res.data.actualites.data
     this.actualitesFiltrees=this.actualites
     this.pg.total=res.data.actualites.total
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
    let actualites = [...this.actualites];

    // Filtrage par catégorie
    if (this.categorieActive !== 0) {
      actualites = actualites.filter(
        (a) => a.category_id === this.categorieActive      );
    }

    // Filtrage par structure
    if (this.structureActive !== 0 && this.structureActive !== 1) {
      actualites = actualites.filter((a) => a.media?.structure_id === this.structureActive);
    }

    this.actualitesFiltrees = actualites;
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
