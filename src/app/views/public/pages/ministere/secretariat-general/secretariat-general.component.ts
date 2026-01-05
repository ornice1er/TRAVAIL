import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationService } from "../../../../../shared/services/animation.service";
import "@tailwindplus/elements";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { PublicService } from "../../../../../core/services/public.service";
import { ConfigService } from "../../../../../core/utils/config-service";

@Component({
  selector: "app-secretariat-general",
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Secrétariat Général du Ministère
          </h1>
          <p
            class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto"
          >
            L'organe central de coordination et d'administration du Ministère du
            Travail et de la Fonction Publique.
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
            Le Secrétariat Général en chiffres
          </h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            L'impact de l'action du Secrétariat Général du Ministère
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
              class="text-lg font-semibold text-primary-100 dark:text-primary-200 mb-2"
            >
              {{ chiffre.titre }}
            </h3>
            <p class="text-primary-200 dark:text-primary-300 text-sm">
              {{ chiffre.description }}
            </p>
          </div>
        </div>
      </div>
    </section>-->

    <!-- Mission & Attribution -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Le Secrétaire Général
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Au cœur de l'administration, le Secrétaire Général assure la
            coordination et la mise en œuvre des politiques ministérielles.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
          <div class="md:col-span-1 text-center">
            <div class="relative inline-block">
              <img
                [src]="getLink('structures/respos',structure?.photo_responsable)"
                alt="{{structure?.name_responsable}} - {{structure?.office}}"
                class="rounded-xl shadow-lg w-full min-w-md h-128 object-cover"
              />
            </div>
            <div class="mt-6">
              <h3
                class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2"
              >
                {{structure?.name_responsable}}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{structure?.office}}
              </p>
            </div>
          </div>
          <div class="md:col-span-2">
            <h3
              class="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Mission
            </h3>
            <p
              class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed rich-content" [innerHTML]="media?.aof?.mission"
            >
            </p>
            <div>
              <h3
                class="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                Attributions
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 rich-content" [innerHTML]="media?.aof?.attribution"></p>
     

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

        <div class="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div class="text-center mb-16">
            <h2
              class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              L'équipe du Secrétariat Général du Ministère
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              En appui au Secrétaire Général pour assurer la performance de
              l'administration.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div  *ngFor="let team of teams" class="text-center flex flex-col items-center">
              <div class="relative inline-block">
                <img
                [src]="getLink('teams',team?.photo)"
                  alt=" {{team?.name}} - {{team?.office}}"
                  class="rounded-xl shadow-lg w-full min-w-md h-100 object-cover object-top"
                />
              </div>
              <div class="mt-6">
                <h3
                  class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2"
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
      </div>
    </section>

   
    <!-- Fiches métiers -->
    <!-- <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Fiches Métiers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les métiers et les compétences clés au sein du Secrétariat Général.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of fichesMetiers" class="card p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6 text-center flex-grow">{{ metier.description }}</p>
            
            <div class="mt-auto pt-5 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <a [href]="metier.file" download class="btn-primary text-sm py-2 px-4">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                Télécharger
              </a>
              <a [href]="metier.readMoreLink" class="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 flex items-center">
                Lire plus <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Contact Général -->
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Contactez-nous
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pour toute information concernant l'administration du ministère,
            n'hésitez pas à nous joindre.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="card p-8 lg:p-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-primary-700 dark:text-primary-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div class="text-left">
                    <p
                      class="font-semibold text-lg text-gray-900 dark:text-white"
                    >
                      Téléphone
                    </p>
                    <p class="text-gray-600 dark:text-gray-300">
                      +229 01 52 16 00 00
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-primary-700 dark:text-primary-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="text-left">
                    <p
                      class="font-semibold text-lg text-gray-900 dark:text-white"
                    >
                      Email
                    </p>
                    <p class="text-gray-600 dark:text-gray-300">
                      {{ "mtfp.usager@gouv.bj" }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-6 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-primary-600 dark:text-primary-400 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p
                  class="font-semibold text-lg text-primary-800 dark:text-primary-300"
                >
                  Horaires d'ouverture
                </p>
                <p class="text-primary-700 dark:text-primary-400 mt-1">
                  Du lundi au vendredi de 8h à 17h30
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
export class SecretariatGeneralComponent implements AfterViewInit {
  chiffres = [
    {
      icone: "📊",
      valeur: "25",
      titre: "Structures Coordonnées",
      description: "Directions et services sous coordination",
    },
    {
      icone: "📋",
      valeur: "1,200+",
      titre: "Dossiers Traités",
      description: "Dossiers administratifs par mois",
    },
    {
      icone: "🎯",
      valeur: "95%",
      titre: "Taux de Réalisation",
      description: "Objectifs du PAG atteints",
    },
    {
      icone: "⏱️",
      valeur: "48h",
      titre: "Délai Moyen",
      description: "Traitement des dossiers urgents",
    },
  ];

  teams:any[] = [];

  fichesMetiers = [];

  structure:any
  media:any

    constructor(private animationService: AnimationService,private publicService:PublicService) {}
  
    ngOnInit() {
      this.getAll()
    }
  
  
  
    getAll(){
      this.publicService.getSGM().subscribe((res:any)=>{
        this.structure=res.data?.structure
        this.media=res.data?.aof
        this.teams=res.data?.structure?.teams1
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
