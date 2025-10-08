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

@Component({
  selector: "app-directions-departementales",
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule, MetiersListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Directions Départementales
          </h1>
          <p
            class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto"
          >
            Le réseau territorial du Ministère du Travail et de la Fonction
            Publique sur l'ensemble du territoire béninois.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section
      class="section-padding bg-primary-800 dark:bg-primary-900 text-white"
    >
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            Le Réseau Territorial en chiffres
          </h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            L'impact de l'action des Directions Départementales
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
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="">
            <div class="relative">
              <img
                src="/benin.jpg"
                alt="Drapeau Bénin"
                class="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
              <!-- <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center">
                <span class="text-white text-2xl">🇧🇯</span>
              </div> -->
            </div>
            <!-- <div class="mt-6 text-center">
              <h3 class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">GANDAHO D. J. Wilfried</h3>
              <p class="text-gray-600 dark:text-gray-300">Directeur</p>
            </div> -->
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
              2021-562 du 3 novembre 2021 portant attributions, organisation et
              fonctionnement du Ministère du Travail et de la Fonction publique,
              les directions départementales du travail et de la fonction
              publique sont des démembrements territoriaux du ministère chargés
              de la gestion des plans d'action sectoriels, de l'assistance
              technique et de l'appui-consell aux communes, dans les domaines de
              compétence du ministère, conformément aux lois sur la
              décentralisation.
            </p>

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
            Directeurs Départementaux
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les responsables des 12 directions départementales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let directeur of departements"
            class="card p-6 text-center "
          >
            <div
              class="w-32 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 overflow-hidden"
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
              {{ directeur.directeur }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-xs mb-3">
              {{ directeur.nom }}
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

        <app-metiers-list [metiers]="metiersDeLaStructure"></app-metiers-list>
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
export class DirectionsDepartementalesComponent
  implements AfterViewInit, OnInit
{
  metiersDeLaStructure: any[] = [];
  private structureId = 23; // ID for Directions Départementales

  chiffres = [
    {
      icone: "🏢",
      valeur: "12",
      titre: "Directions Départementales",
      description: "Couverture de tout le territoire national",
    },
    {
      icone: "👥",
      valeur: "580",
      titre: "Agents Territoriaux",
      description: "Personnel des directions départementales",
    },
    {
      icone: "🏛️",
      valeur: "77",
      titre: "Communes Couvertes",
      description: "Toutes les communes du Bénin",
    },
    {
      icone: "📋",
      valeur: "45K",
      titre: "Dossiers Traités",
      description: "Dossiers administratifs par an",
    },
  ];

  departements = [
    {
      nom: "Direction Départementale Alibori",
      directeur: "M. COLLY Faustin Tiburce",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/faustin-tiburce-colly.jpg",
    },
    {
      nom: "Direction Départementale Atacora",
      directeur: "M. SEKE Jacques",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/seke-jacques.jpg",
    },
    {
      nom: "Direction Départementale Atlantique",
      directeur: "Mme ALASSANE OUASSAGARI Lamatou",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/alassane-ouassagari-lamatou.JPG",
    },
    {
      nom: "Direction Départementale Borgou",
      directeur: "M. TAHOUNGA Biwègnon Robert Bertrand",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/1733740668tahounga-biwegnon-robert-bertrand.jpg",
    },
    {
      nom: "Direction Départementale Collines",
      directeur: "Mme DAFIA YAROU Gniré",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/dafia-yarou-gnire.jpg",
    },
    {
      nom: "Direction Départementale Couffo",
      directeur: "M. ADOSSOU Jules Parfait Akpédjé",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/1678289709adossou-jules-parfait-akpedje.jpg",
    },
    {
      nom: "Direction Départementale Donga",
      directeur: "Mme AMOUSSOU Valéry James",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/valery-james-amoussou.png",
    },
    {
      nom: "Direction Départementale Littoral",
      directeur: "Mme LEGBA ADANKON Constance",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/1708504919legba-adankon-constance.jpg",
    },
    {
      nom: "Direction Départementale Mono",
      directeur: "M. WHANNOU Kolawolé Sidoine Fred",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/whannou-kolawole-sidoine-fred.jpg",
    },
    {
      nom: "Direction Départementale Ouémé",
      directeur: "Mme AKOTENOU Edwige Sigan",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/akotenou-sigan-edwige.jpg",
    },
    {
      nom: "Direction Départementale Plateau",
      directeur: "M. ZOUNMATOUN Raymond",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/1733740395zounmatoun-raymond.jpg",
    },
    {
      nom: "Direction Départementale Zou",
      directeur: "M. TOKPO Houénagnon Gérard",
      photo:
        "https://www.travail.gouv.bj/storage/structures/respos/tokpo-houenagnon-gerard.jpg",
    },
  ];

  contactsSpecifiques = [
    {
      icone: "🔍",
      service: "Service Inspection Territoriale",
      description: "Contrôle des entreprises au niveau départemental.",
      telephone: "+229 21 30 70 01",
      email: "inspection.territoriale@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Inspection du travail",
    },
    {
      icone: "💼",
      service: "Service Emploi Local",
      description: "Promotion de l'emploi et insertion professionnelle.",
      telephone: "+229 21 30 70 02",
      email: "emploi.local@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Emploi et insertion",
    },
    {
      icone: "📋",
      service: "Service Formalités",
      description: "Traitement des formalités administratives.",
      telephone: "+229 21 30 70 03",
      email: "formalites@travail.gouv.bj",
      horaires: "Lun-Ven 8h-15h30",
      specialite: "Formalités administratives",
    },
    {
      icone: "🤝",
      service: "Service Médiation",
      description: "Médiation des conflits de travail locaux.",
      telephone: "+229 21 30 70 04",
      email: "mediation.locale@travail.gouv.bj",
      horaires: "Lun-Ven 8h-17h",
      specialite: "Médiation sociale",
    },
    {
      icone: "📊",
      service: "Service Statistiques",
      description: "Collecte et traitement des données locales.",
      telephone: "+229 21 30 70 05",
      email: "stats.locales@travail.gouv.bj",
      horaires: "Lun-Ven 8h-16h",
      specialite: "Statistiques locales",
    },
    {
      icone: "📞",
      service: "Accueil et Orientation",
      description: "Information et orientation des usagers.",
      telephone: "+229 21 30 70 00",
      email: "accueil.territorial@travail.gouv.bj",
      horaires: "Lun-Ven 7h30-17h",
      specialite: "Information générale",
    },
  ];

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.metiersDeLaStructure = metiers.filter(
      (m) => m.structureId === this.structureId
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}
