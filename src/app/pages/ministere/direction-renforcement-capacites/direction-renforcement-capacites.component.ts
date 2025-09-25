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
  selector: "app-direction-renforcement-capacites",
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
                    src="https://www.travail.gouv.bj/storage/structures/respos/1709533437avalla-omer-w-charles.jpg"
                    alt="AVALLA Omer W. Charles - Directeur Général"
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
                    AVALLA Omer W. Charles
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Directeur Général
                  </p>
                </div>
              </div>

              <!-- Directeur Général Adjoint -->
              <div class="text-center">
                <div class="relative inline-block">
                  <img
                    src="https://www.travail.gouv.bj/storage/teams/1677698988ohossa-sourou-djile.JPG"
                    alt="OHOSSA Saturnin Djiki - Directeur Général Adjoint"
                    class="rounded-2xl shadow-lg w-full max-w-sm h-72 mx-auto"
                  />
                </div>
                <div class="mt-6">
                  <h3
                    class="text-xl font-bold text-secondary-800 dark:text-secondary-400 mb-2"
                  >
                    OHOSSA Sourou Djilé
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Directeur Général Adjoint
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
              Conformément aux dispositions de l'article 10 du décret n°
              2021-562 du 03 novembre 2021 portant attributions, organisation et
              fonctionnement du Ministère du Travail et de la Fonction Publique,
              la direction générale du renforcement des capacités et de
              l'employabilité assure la mise en œuvre de la politique de l'État
              en matière de formation et de valorisation des ressources
              humaines.
            </p>

            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Attributions
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              À ce titre, elle est chargée, en liaison avec les structures
              techniques des autres ministères et institutions de l'État :
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >de promouvoir l'employabilité et le développement de
                  l'expertise des agents de l'État et de la main d'œuvre</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >d'assurer la réglementation et le contrôle du contrat
                  d'apprentissage dans les corps de métiers, en collaboration
                  avec les ministères compétents</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >d'accompagner les structures et organismes de formation
                  professionnelle continue des agents de l'État et du secteur
                  privé</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >d'agréer les centres de formation continue qualifiants des
                  agents de l'État et du secteur privé</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >de contrôler l'application de la réglementation relative au
                  fonctionnement des centres agréés de formation continue et du
                  contenu de leurs programmes de formation en collaboration avec
                  le ministère en charge de la formation technique et
                  professionnelle</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >d'assurer le développement des ressources humaines et la
                  programmation de la formation, notamment du personnel civil de
                  l'État</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >de centraliser la documentation relative à la formation
                  professionnelle continue des agents de l'État</span
                >
              </li>
            </ul>

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
                [src]="directeur.photo"
                [alt]="directeur.nom"
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
              {{ directeur.nom }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-xs mb-3">
              {{ directeur.fonction }}
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

    <!-- Fiches métiers -->
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
    </section>

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
                    {{ "secretariat.general@travail.gouv.bj" }}
                  </p>
                </div>
              </div>
              <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p class="text-sm text-primary-700 dark:text-primary-400">
                  <strong>Horaires :</strong> Du lundi au vendredi de 8h à 17h
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
export class DirectionRenforcementCapacitesComponent implements AfterViewInit {
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

  directeursTechniques = [
    {
      nom: "GOUDA Nodichao Marylène Rékiath",
      fonction:
        "Directrice de la Formation Continue, des Bonnes Pratiques, de la Planification Et de Validation des Plans de Formation",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1677699129gouda-nodichao-marylene-rekiath.JPG",
      // responsabilites: [
      //   'Coordination des programmes de formation',
      //   'Développement pédagogique',
      //   'Évaluation des formations'
      // ]
    },
  ];

  fichesMetiers = [
    {
      icone: "🎓",
      titre: "Ingénieur de Formation",
      description: "Conception et développement de programmes de formation.",
      competences: [
        "Ingénierie pédagogique",
        "Analyse des besoins",
        "Conception de curricula",
        "Évaluation pédagogique",
      ],
      missions: [
        "Conception de formations",
        "Développement pédagogique",
        "Évaluation des programmes",
        "Innovation pédagogique",
      ],
      niveauRequis: "Bac+5",
      experience: "4 ans minimum",
    },
    {
      icone: "💼",
      titre: "Conseiller en Employabilité",
      description: "Accompagnement des bénéficiaires vers l'emploi.",
      competences: [
        "Techniques d'insertion",
        "Coaching professionnel",
        "Marché du travail",
        "Accompagnement individuel",
      ],
      missions: [
        "Accompagnement individuel",
        "Techniques de recherche d'emploi",
        "Mise en relation",
        "Suivi post-formation",
      ],
      niveauRequis: "Bac+4",
      experience: "3 ans minimum",
    },
    {
      icone: "🏆",
      titre: "Responsable Certification",
      description: "Gestion des processus de certification des compétences.",
      competences: [
        "Systèmes de certification",
        "Évaluation des compétences",
        "Normes qualité",
        "Validation des acquis",
      ],
      missions: [
        "Certification des compétences",
        "Validation des acquis",
        "Contrôle qualité",
        "Délivrance de diplômes",
      ],
      niveauRequis: "Bac+5",
      experience: "5 ans minimum",
    },
    {
      icone: "🤝",
      titre: "Chargé de Partenariats",
      description: "Développement des partenariats avec les entreprises.",
      competences: [
        "Développement de partenariats",
        "Négociation",
        "Gestion de relations",
        "Communication",
      ],
      missions: [
        "Prospection d'entreprises",
        "Négociation de partenariats",
        "Suivi des conventions",
        "Animation du réseau",
      ],
      niveauRequis: "Bac+4",
      experience: "3 ans minimum",
    },
    {
      icone: "📊",
      titre: "Analyste Emploi-Formation",
      description: "Analyse des besoins en formation et évolution des métiers.",
      competences: [
        "Analyse du marché du travail",
        "Prospective métiers",
        "Statistiques",
        "Études sectorielles",
      ],
      missions: [
        "Analyse des besoins",
        "Études prospectives",
        "Observatoire des métiers",
        "Recommandations stratégiques",
      ],
      niveauRequis: "Bac+5",
      experience: "4 ans minimum",
    },
    {
      icone: "🎯",
      titre: "Coordinateur de Programmes",
      description: "Coordination des programmes de renforcement des capacités.",
      competences: [
        "Gestion de programmes",
        "Coordination multi-acteurs",
        "Suivi-évaluation",
        "Reporting",
      ],
      missions: [
        "Coordination de programmes",
        "Suivi des activités",
        "Gestion des partenaires",
        "Évaluation des résultats",
      ],
      niveauRequis: "Bac+4",
      experience: "4 ans minimum",
    },
  ];

  contactsSpecifiques = [
    {
      icone: "🎓",
      service: "Service Formation Continue",
      description: "Programmes de formation professionnelle continue.",
      telephone: "+229 21 30 50 01",
      email: "formation.continue@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Formation continue",
    },
    {
      icone: "💼",
      service: "Service Employabilité",
      description: "Accompagnement vers l'emploi et insertion professionnelle.",
      telephone: "+229 21 30 50 02",
      email: "employabilite@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Insertion professionnelle",
    },
    {
      icone: "🏆",
      service: "Service Certification",
      description: "Certification des compétences et validation des acquis.",
      telephone: "+229 21 30 50 03",
      email: "certification@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Certification des compétences",
    },
    {
      icone: "🤝",
      service: "Service Partenariats",
      description: "Développement des partenariats avec les entreprises.",
      telephone: "+229 21 30 50 04",
      email: "partenariats.dgrce@travail.gouv.bj",
      horaires: "Lun-Ven 8h-17h",
      specialite: "Partenariats entreprises",
    },
    {
      icone: "📊",
      service: "Service Études et Prospective",
      description: "Études sur l'emploi et prospective des métiers.",
      telephone: "+229 21 30 50 05",
      email: "etudes.dgrce@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Études et prospective",
    },
    {
      icone: "📞",
      service: "Accueil et Information",
      description: "Information sur les programmes de formation disponibles.",
      telephone: "+229 21 30 50 00",
      email: "info.dgrce@travail.gouv.bj",
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
