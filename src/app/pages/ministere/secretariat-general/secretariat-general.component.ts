import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationService } from "../../../shared/services/animation.service";
import "@tailwindplus/elements";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";

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

    <!-- Direction en chiffres -->
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
    </section>

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
                src="https://www.travail.gouv.bj/storage/structures/respos/1708440238kanhounon-norbert.jpg"
                alt="ALOHON N. Germain - Secrétaire Général du Ministère"
                class="rounded-xl shadow-lg w-full min-w-md h-128 object-cover"
              />
            </div>
            <div class="mt-6">
              <h3
                class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2"
              >
                ALOKPO N. Germain
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Secrétaire Général du Ministère
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
              class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Conformément aux dispositions de l'article 39 du décret n°
              2021-401 du 28 juillet 2021 fixant le nouveau type des ministères,
              le secrétariat général du Ministère du Travail et de la Fonction
              Publique est l'organe chargé de l'exécution correcte de la mission
              du ministère. Il veille à l'exécution des résultats et à la
              satisfaction des besoins des citoyens.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Il assure la continuité de l'administration du ministère.
            </p>
            <div>
              <h3
                class="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                Attributions
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                À ce titre et sous autorité du ministre :
              </p>
              <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                  ></span>
                  <span
                    >propose en collaboration avec le cabinet du ministre, les
                    orientations stratégiques destinées à traduire la vision,
                    les politiques et les stratégies du gouvernement dans les
                    secteurs d'activités relevant du ministère</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                  ></span>
                  <span
                    >veille à la mise en œuvre du Programme d'Actions du
                    Gouvernement (PAG) et des orientations stratégiques du
                    département en collaboration avec le cabinet du
                    ministère</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                  ></span>
                  <span
                    >veille à aligner toutes les directions centrales,
                    techniques et départementales sur les orientations
                    stratégiques du département et coordonne les actions de mise
                    en œuvre du programme de renforcement du leadership du
                    ministère</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                  ></span>
                  <span
                    >assure un rôle technique sur tous les dossiers relevant de
                    l'Inspection du ministère</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                  ></span>
                  <span
                    >assure avec l'appui technique du programme support,
                    l'élaboration des rapports, l'évaluation et la
                    capitalisation du plan d'amélioration de la performance
                    globale du ministère, de ses politiques, de ses programmes
                    et de ses projets</span
                  >
                </li>
              </ul>

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
                  href="https://travail.gouv.bj/download-data/aofs/2301250210-628.pdf/aof"
                  download="https://travail.gouv.bj/download-data/aofs/2301250210-628.pdf/aof"
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
              L'équipe du Secrétariat
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              En appui au Secrétaire Général pour assurer la performance de
              l'administration.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Secrétaire Général Adjoint -->
            <div class="text-center flex flex-col items-center">
              <div class="relative inline-block">
                <img
                  src="https://www.travail.gouv.bj/storage/teams/1708594357estelle-honfo-akpovo.jpg"
                  alt="Estelle HONFO AKPOVO - Secrétaire Générale Adjointe du Ministère"
                  class="rounded-xl shadow-lg w-full min-w-md h-76 object-cover object-top"
                />
              </div>
              <div class="mt-6">
                <h3
                  class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2"
                >
                  HONFO AKPOVO Estelle
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Secrétaire Générale Adjointe du Ministère
                </p>
              </div>
            </div>

            <!-- Assistant -->
            <div class="text-center flex flex-col items-center">
              <div class="relative inline-block">
                <img
                  src="https://www.travail.gouv.bj/storage/teams/1714985419vissoh-ahissin-g-mahoutondji-fredy.jpg"
                  alt="VISSOH AHISSIN G. Mahoutondji Frédy - Assistant du Secrétaire Général du Ministère"
                  class="rounded-xl shadow-lg w-full min-w-md h-76 object-cover"
                />
              </div>
              <div class="mt-6">
                <h3
                  class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2"
                >
                  VISSOH AHISSIN G. Mahoutondji Frédy
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Assistant du Secrétaire Général du Ministère
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Présentation des directeurs techniques -->
    <!-- <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Départements Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            L'équipe des directeurs techniques qui appuient le Secrétariat Général dans ses missions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let directeur of directeursTechniques" class="card p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div class="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-primary-200 dark:ring-primary-800">
              <img [src]="directeur.photo" 
                   [alt]="directeur.nom" 
                   class="w-full h-full object-cover">
            </div>
            <h3 class="text-lg font-bold text-primary-800 dark:text-primary-400 mb-1">{{ directeur.nom }}</h3>
            <p class="font-medium text-gray-600 dark:text-gray-400 text-sm mb-4">{{ directeur.fonction }}</p>
            <div class="space-y-2 text-left text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
              <p *ngFor="let responsabilite of directeur.responsabilites" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1 text-secondary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-gray-600 dark:text-gray-300">{{ responsabilite }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

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
                      {{ "secretariat.general@travail.gouv.bj" }}
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
                  Du lundi au vendredi de 8h à 17h
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
                [src]="'assets/download-data/aofs/aof-sgm.pdf'"
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

  directeursTechniques = [
    {
      nom: "KOUTON Marie-Claire",
      fonction: "Directrice Technique Coordination",
      photo:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200",
      responsabilites: [
        "Coordination des directions",
        "Suivi du PAG",
        "Reporting ministériel",
      ],
    },
    {
      nom: "AGBESSI Jean-Paul",
      fonction: "Directeur Technique Administration",
      photo:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200",
      responsabilites: [
        "Gestion administrative",
        "Procédures internes",
        "Documentation officielle",
      ],
    },
    {
      nom: "DOSSOU Sylvie",
      fonction: "Directrice Technique Suivi-Évaluation",
      photo:
        "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=200",
      responsabilites: [
        "Suivi des performances",
        "Évaluation des programmes",
        "Capitalisation des acquis",
      ],
    },
  ];

  fichesMetiers = [
    {
      titre: "Coordinateur Général",
      description: "Coordination des activités de l'ensemble du ministère.",
      file: "assets/download-data/fiches-metiers/coordinateur-general.pdf",
      readMoreLink: "#",
    },
    {
      titre: "Chargé de Mission",
      description: "Suivi de dossiers spéciaux et missions transversales.",
      file: "assets/download-data/fiches-metiers/charge-de-mission.pdf",
      readMoreLink: "#",
    },
    {
      titre: "Analyste Performance",
      description: "Suivi et évaluation des performances du ministère.",
      file: "assets/download-data/fiches-metiers/analyste-performance.pdf",
      readMoreLink: "#",
    },
    {
      titre: "Secrétaire de Direction",
      description: "Assistance administrative et gestion du secrétariat.",
      file: "assets/download-data/fiches-metiers/secretaire-de-direction.pdf",
      readMoreLink: "#",
    },
    {
      titre: "Chargé de Relations",
      description: "Gestion des relations institutionnelles et partenariats.",
      file: "assets/download-data/fiches-metiers/charge-de-relations.pdf",
      readMoreLink: "#",
    },
    {
      titre: "Documentaliste",
      description: "Gestion de la documentation et des archives.",
      file: "assets/download-data/fiches-metiers/documentaliste.pdf",
      readMoreLink: "#",
    },
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}
