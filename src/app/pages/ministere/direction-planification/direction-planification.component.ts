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
  selector: "app-direction-planification",
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Direction de la Planification de l'Administration et des Finances
          </h1>
          <p
            class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto"
          >
            L'organe de planification stratégique et de gestion financière du
            Ministère du Travail et de la Fonction Publique.
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
            La Direction en chiffres
          </h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            L'impact de l'action de la Direction de la Planification
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
              <!-- Directeur -->
              <!-- <div class="text-center">
                <div class="relative inline-block">
                  <img
                    src="https://www.travail.gouv.bj/storage/structures/respos/malick-abdoulazize.JPG"
                    alt="MALICK Abdoulaziz - Directeur"
                    class="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
                  />
                  <div
                    class="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary-700 rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">🇧🇯</span>
                  </div>
                </div>
                <div class="mt-6">
                  <h3
                    class="text-xl font-bold text-secondary-800 dark:text-secondary-400 mb-2"
                  >
                    MALICK Abdoulaziz
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">Directeur</p>
                </div>
              </div> -->

              <!-- Directeur Adjoint -->
              <div class="text-center">
                <div class="relative inline-block">
                  <img
                    src="https://www.travail.gouv.bj/storage/teams/1708959455ayegnon-fernand.jpg"
                    alt="AYEGNON Fernand - Directeur"
                    class="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
                  />
                </div>
                <div class="mt-6">
                  <h3
                    class="text-xl font-bold text-secondary-800 dark:text-secondary-400 mb-2"
                  >
                    AYEGNON Fernand
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Directeur
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
              class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Conformément aux dispositions de l'article 31 du décret n°
              2021-401 du 28 juillet 2021 fixant le nouveau type des ministères,
              la Direction de la planification, de l'administration et des
              finances assure au niveau du ministère, la programmation et la
              planification des activités, la gestion des ressources humaines,
              matérielles et des moyens financiers, de concert avec les
              responsables de chaque structure.
            </p>

            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Attributions
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              À ce titre, elle est chargée :
            </p>

            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">
                  En matière de planification :
                </h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start">
                    <span
                      class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                    ></span>
                    <span
                      >de collecter et de diffuser toutes les informations
                      nécessaires à une réflexion prospective</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                    ></span>
                    <span
                      >d'assurer la programmation dans les domaines de
                      compétence du ministère en liaison avec les structures
                      compétentes du ministère en charge du développement</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                    ></span>
                    <span
                      >d'animer les processus de planification, de la
                      budgétisation et de consultations au sein du
                      ministère</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                    ></span>
                    <span
                      >d'élaborer, de suivre et d'évaluer les plans stratégiques
                      du ministère en liaison avec les structures d'élaboration
                      et de supervision des activités du ministère</span
                    >
                  </li>
                </ul>
              </div>
            </div>

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
    </section>

    <!-- Présentation des directeurs techniques -->
    <!-- <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Départements</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'équipe technique de la Direction de la Planification
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let directeur of directeursTechniques" class="card p-6 text-center ">
            <div class="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 overflow-hidden">
              <img [src]="directeur.photo" 
                   [alt]="directeur.nom" 
                   class="w-full h-full object-cover"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
              <div class="w-full h-full bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center" style="display: none;">
                <span class="text-2xl text-secondary-600 dark:text-secondary-400">👤</span>
              </div>
            </div>
            <h3 class="text-sm font-bold text-secondary-800 dark:text-secondary-400 mb-2">{{ directeur.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-xs mb-3">{{ directeur.fonction }}</p>
            <div class="space-y-2">
              <div *ngFor="let responsabilite of directeur.responsabilites" class="text-xs text-gray-500 dark:text-gray-400">
                • {{ responsabilite }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Fiches métiers -->
    <!-- <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Fiches Métiers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300"></p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let metier of fichesMetiers"
            class="card p-6 flex flex-col"
          >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center"
            >
              {{ metier.titre }}
            </h3>
            <p
              class="text-gray-600 dark:text-gray-300 mb-4 text-center flex-grow"
            >
              {{ metier.description }}
            </p>

            <div
              class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center"
            >
              <a
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm opacity-50 cursor-not-allowed"
              >
                <svg
                  class="w-4 h-4 mr-2"
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
              <a
                class="text-sm font-medium text-primary-600 opacity-50 cursor-not-allowed"
              >
                Lire plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Contacts spécifiques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <!-- Contact général -->
        <div class="max-w-2xl mx-auto mt-16 ">
          <div class="card p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Général
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Pour toute information concernant la planification et les
              finances.
            </p>
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div
                  class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">
                    Téléphone
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    +229 21 30 20 00
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div
                  class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{ "dpaf@travail.gouv.bj" }}
                  </p>
                </div>
              </div>
              <div
                class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-4"
              >
                <p class="text-sm text-secondary-700 dark:text-secondary-400">
                  <strong>Service budgétaire :</strong> Disponible du lundi au
                  vendredi de 8h à 16h
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
export class DirectionPlanificationComponent implements AfterViewInit {
  chiffres = [
    {
      icone: "✅",
      valeur: "95%",
      titre: "Taux d'Exécution Budgétaire",
      description: "Niveau d'exécution du budget annuel",
    },
    {
      icone: "📊",
      valeur: "12",
      titre: "Plans Opérationnels",
      description: "Nombre de plans élaborés par an",
    },
    {
      icone: "🎯",
      valeur: "85%",
      titre: "Objectifs Atteints",
      description: "Pourcentage d'objectifs réalisés",
    },
    {
      icone: "⏱️",
      valeur: "30j",
      titre: "Délai de Reporting",
      description: "Délai moyen de production des rapports",
    },
  ];

  directeursTechniques = [
    {
      nom: "KOUTON Marie",
      fonction: "Directrice Technique Planification",
      photo:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200",
      responsabilites: [
        "Élaboration des plans stratégiques",
        "Coordination de la planification",
        "Suivi des programmes",
      ],
    },
    {
      nom: "AGBESSI Paul",
      fonction: "Directeur Technique Budget",
      photo:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200",
      responsabilites: [
        "Préparation du budget",
        "Suivi de l'exécution budgétaire",
        "Contrôle financier",
      ],
    },
    {
      nom: "DOSSOU Sylvie",
      fonction: "Directrice Technique Administration",
      photo:
        "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=200",
      responsabilites: [
        "Gestion administrative",
        "Ressources humaines",
        "Logistique et patrimoine",
      ],
    },
  ];

  fichesMetiers = [
    {
      icone: "📊",
      titre: "Planificateur Stratégique",
      description: "Élaboration et suivi des plans stratégiques du ministère.",
      competences: [
        "Planification stratégique",
        "Analyse prospective",
        "Gestion de projet",
        "Suivi-évaluation",
      ],
      missions: [
        "Élaboration de plans",
        "Analyse prospective",
        "Coordination intersectorielle",
        "Suivi des indicateurs",
      ],
      niveauRequis: "Bac+5",
      experience: "5 ans minimum",
    },
    {
      icone: "💰",
      titre: "Gestionnaire Budgétaire",
      description: "Gestion et suivi de l'exécution du budget ministériel.",
      competences: [
        "Gestion budgétaire",
        "Finances publiques",
        "Contrôle de gestion",
        "Comptabilité publique",
      ],
      missions: [
        "Préparation du budget",
        "Suivi de l'exécution",
        "Contrôle des dépenses",
        "Reporting financier",
      ],
      niveauRequis: "Bac+4",
      experience: "3 ans minimum",
    },
    {
      icone: "📈",
      titre: "Chargé de Suivi-Évaluation",
      description: "Suivi des performances et évaluation des programmes.",
      competences: [
        "Méthodologie d'évaluation",
        "Indicateurs de performance",
        "Collecte de données",
        "Analyse statistique",
      ],
      missions: [
        "Définition d'indicateurs",
        "Collecte de données",
        "Évaluation de programmes",
        "Production de rapports",
      ],
      niveauRequis: "Bac+4",
      experience: "3 ans minimum",
    },
    {
      icone: "📋",
      titre: "Chargé d'Études",
      description: "Réalisation d'études sectorielles et prospectives.",
      competences: [
        "Méthodologie de recherche",
        "Analyse sectorielle",
        "Rédaction de rapports",
        "Veille stratégique",
      ],
      missions: [
        "Études prospectives",
        "Analyses sectorielles",
        "Veille stratégique",
        "Appui à la décision",
      ],
      niveauRequis: "Bac+5",
      experience: "4 ans minimum",
    },
    {
      icone: "👥",
      titre: "Gestionnaire RH",
      description: "Gestion des ressources humaines du ministère.",
      competences: [
        "Gestion des ressources humaines",
        "Droit du travail",
        "Formation",
        "Évaluation du personnel",
      ],
      missions: [
        "Gestion du personnel",
        "Formation des agents",
        "Évaluation des performances",
        "Gestion des carrières",
      ],
      niveauRequis: "Bac+4",
      experience: "3 ans minimum",
    },
    {
      icone: "🏢",
      titre: "Gestionnaire Patrimoine",
      description: "Gestion du patrimoine mobilier et immobilier.",
      competences: [
        "Gestion patrimoniale",
        "Maintenance",
        "Logistique",
        "Marchés publics",
      ],
      missions: [
        "Gestion des bâtiments",
        "Maintenance des équipements",
        "Approvisionnement",
        "Gestion des véhicules",
      ],
      niveauRequis: "Bac+3",
      experience: "2 ans minimum",
    },
  ];

  contactsSpecifiques = [
    {
      icone: "📊",
      service: "Service Planification",
      description: "Élaboration des plans et programmation des activités.",
      telephone: "+229 21 30 20 01",
      email: "planification.dpaf@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Planification stratégique",
    },
    {
      icone: "💰",
      service: "Service Budget et Finances",
      description: "Gestion budgétaire et financière du ministère.",
      telephone: "+229 21 30 20 02",
      email: "budget.dpaf@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Gestion budgétaire",
    },
    {
      icone: "📈",
      service: "Service Suivi-Évaluation",
      description: "Suivi des performances et évaluation des résultats.",
      telephone: "+229 21 30 20 03",
      email: "suivi.evaluation@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Suivi et évaluation",
    },
    {
      icone: "👥",
      service: "Service Ressources Humaines",
      description: "Gestion du personnel du ministère.",
      telephone: "+229 21 30 20 04",
      email: "rh.dpaf@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Gestion RH",
    },
    {
      icone: "🏢",
      service: "Service Patrimoine",
      description: "Gestion du patrimoine et de la logistique.",
      telephone: "+229 21 30 20 05",
      email: "patrimoine.dpaf@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Patrimoine et logistique",
    },
    {
      icone: "📞",
      service: "Accueil et Information",
      description: "Information générale sur les services de la direction.",
      telephone: "+229 21 30 20 00",
      email: "info.dpaf@travail.gouv.bj",
      horaires: "Lun-Ven 7h30-17h",
      specialite: "Information générale",
    },
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}
