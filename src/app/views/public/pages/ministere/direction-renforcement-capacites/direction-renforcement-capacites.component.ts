import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationService } from "../../../../../shared/services/animation.service";
import "@tailwindplus/elements";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { MetiersListComponent } from "../../../../../shared/components/metiers-list.component";
import { metiers } from "../../../../../shared/models/datas";
import { PublicService } from "../../../../../core/services/public.service";
import { ConfigService } from "../../../../../core/utils/config-service";

@Component({
  selector: "app-direction-renforcement-capacites",
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule, MetiersListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Direction Générale du Renforcement des Capacités et de
            l'Employabilité
          </h1>
          <p
            class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto"
          >
            L'organe central de développement des compétences et d'amélioration
            de l'employabilité au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres 
    <section
      class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white"
    >
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            La Direction en chiffres
          </h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            L'impact de l'action de la Direction du Renforcement des Capacités
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let chiffre of chiffres" class="text-center ">
            <div
              class="w-20 h-20 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl">{{ chiffre.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">
              {{ chiffre.valeur }}
            </div>
            <h3
              class="text-lg font-semibold text-secondary-100 dark:text-secondary-200 mb-2"
            >
              {{ chiffre.titre }}
            </h3>
            <p class="text-secondary-200 dark:text-secondary-300 text-sm">
              {{ chiffre.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Attribution avec photo du responsable -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="">
            <div class="space-y-8">
              <!-- Directeur Général -->
              <div class="text-center">
                <div class="relative inline-block">
                  <img
                   [src]="getLink('structures/respos',structure?.photo_responsable)"
                alt="{{structure?.name_responsable}} - {{structure?.office}}"
                    class="rounded-2xl shadow-lg w-full max-w-sm h-72 mx-auto"
                  />
                  <!-- <div
                    class="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary-700 rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">🇧🇯</span>
                  </div> -->
                </div>
                <div class="mt-6">
                  <h3
                    class="text-xl font-bold text-secondary-800 dark:text-secondary-400 mb-2"
                  >
                   {{structure?.name_responsable}}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                   {{structure?.office}}
                  </p>
                </div>
              </div>

              <!-- Directeur Général Adjoint -->
              <div class="text-center" *ngFor="let team of teams" >
                <div class="relative inline-block">
                  <img
                   [src]="getLink('teams',team?.photo)"
                  alt=" {{team?.name}} - {{team?.office}}"
                    class="rounded-2xl shadow-lg w-full max-w-sm h-72 mx-auto"
                  />
                </div>
                <div class="mt-6">
                  <h3
                    class="text-xl font-bold text-secondary-800 dark:text-secondary-400 mb-2"
                  >
                     {{team?.name}}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{team?.office}}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Mission & Attribution
            </h2>

            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Mission
            </h3>
           <p
              class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed rich-content" [innerHTML]="media?.aof?.mission"
            >
            </p>

            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Attributions
            </h3>
                                  <p class="text-gray-700 dark:text-gray-300 mb-4 rich-content" [innerHTML]="media?.aof?.attribution"></p>


            <!-- Boutons de téléchargement -->
            <!-- Boutons de téléchargement -->
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="button"
                command="show-modal"
                commandfor="dialog"
                class="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                Lire l'arrêté
              </button>
              <a
                [href]="getLink('aofs',media?.aof?.aof)"
                  download="{{media?.aof?.aof}}"
                class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Présentation des directeurs techniques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Départements
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'équipe technique de la Direction du Renforcement des Capacités
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let directeur of directeursTechniques"
            class="card p-6 text-center "
          >
            <div
              class="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 overflow-hidden"
            >
              <img
              [src]="getLink('teams',directeur?.photo)"
                  alt=" {{directeur?.name}} - {{directeur?.office}}"
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              />
              <div
                class="w-full h-full bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center"
                style="display: none;"
              >
                <span
                  class="text-2xl text-secondary-600 dark:text-secondary-400"
                  >👤</span
                >
              </div>
            </div>
            <h3
              class="text-sm font-bold text-secondary-800 dark:text-secondary-400 mb-2"
            >
               {{directeur?.name}}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-xs mb-3">
             {{directeur?.office}}
            </p>
            <!-- <div class="space-y-2">
              <div *ngFor="let responsabilite of directeur.responsabilites" class="text-xs text-gray-500 dark:text-gray-400">
                • {{ responsabilite }}
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Fiches métiers 
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Fiches Métiers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300"></p>
        </div>

        <app-metiers-list [metiers]="metiersDeLaStructure"></app-metiers-list>
      </div>
    </section>-->

    <!-- Contact Général -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Contact Général
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Pour toute information concernant l'administration du ministère.
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="card p-8 text-center">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">
                    Téléphone
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    +229 01 52 16 00 00
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{ "mtfp.usager@gouv.bj" }}
                  </p>
                </div>
              </div>
              <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p class="text-sm text-primary-700 dark:text-primary-400">
                  <strong>Horaires :</strong> Du lundi au vendredi de 8h à 17h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <el-dialog>
      <dialog
        id="dialog"
        aria-labelledby="dialog-title"
        class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
      >
        <el-dialog-backdrop
          class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"
        ></el-dialog-backdrop>

        <div
          tabindex="0"
          class="flex min-h-full items-end justify-center text-center focus:outline-none sm:items-center p-0 relative"
        >
          <el-dialog-panel
            class="transform overflow-hidden absolute inset-0 bg-white px-4 pt-5 pb-4 text-left  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-full sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
          >
            <div class="flex justify-end items-center w-full">
              <button
                type="button"
                command="close"
                commandfor="dialog"
                class="inline-flex  justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:shadow-none dark:hover:bg-red-400 dark:focus-visible:outline-red-500"
              >
                Fermer
              </button>
            </div>
            <div>
              <ngx-extended-pdf-viewer
  [src]="getLink('aofs',media?.aof?.aof)"
              ></ngx-extended-pdf-viewer>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  `,
})
export class DirectionRenforcementCapacitesComponent
  implements AfterViewInit, OnInit
{
  metiersDeLaStructure: any[] = [];
  private structureId = 100; // ID for Direction Générale du Renforcement des Capacités et de l'Employabilité

  chiffres = [
    {
      icone: "🎓",
      valeur: "50K+",
      titre: "Personnes Formées",
      description: "Bénéficiaires de nos programmes depuis 2016",
    },
    {
      icone: "💼",
      valeur: "82%",
      titre: "Taux d'Insertion",
      description: "Taux moyen d'insertion professionnelle",
    },
    {
      icone: "🏢",
      valeur: "1,200+",
      titre: "Entreprises Créées",
      description: "Nouvelles entreprises créées par nos diplômés",
    },
    {
      icone: "💰",
      valeur: "35%",
      titre: "Augmentation Revenus",
      description: "Amélioration moyenne des revenus post-formation",
    },
  ];

  teams:any[] = [];
  directeursTechniques:any[]=[]
  
    fichesMetiers = [];
  
    structure:any
    media:any
  
      constructor(private animationService: AnimationService,private publicService:PublicService) {}
    
      ngOnInit() {
        this.getAll()
      }
    
    
    
      getAll(){
        this.publicService.getDGRCE().subscribe((res:any)=>{
          this.structure=res.data?.structure
          this.media=res.data?.aof
          this.teams=res.data?.structure?.teams1
          this.directeursTechniques=res.data?.structure?.teams2
        })
      }
  
  
    openPdf() {
      const dialog = document.getElementById('dialog') as any;
      if (dialog) {
        dialog.showModal();
      }
    }
  
  
  
        getLink(dir:any,photo:any){
          return`${ConfigService.toFile("storage")}/${dir}/${photo}`
        }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}
