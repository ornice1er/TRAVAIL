import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationService } from "../../../shared/services/animation.service";

@Component({
  selector: "app-secretariat-general",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
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

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-center gap-8">
            <div class="animate-on-scroll">
              <div class="relative">
                <img
                  src="https://www.travail.gouv.bj/storage/structures/respos/1708440238kanhounon-norbert.jpg"
                  alt="KANHOUNON N. Norbert - Secrétaire Général du Ministère"
                  class="rounded-2xl shadow-lg w-full max-w-2xs mx-auto"
                />
                <div
                  class="absolute -bottom-6 -right-6 w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center"
                >
                  <span class="text-white text-2xl">🇧🇯</span>
                </div>
              </div>
              <div class="mt-3 text-center">
                <h3
                  class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-0"
                >
                  ALOHON N. Germain
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Secrétaire Général du Ministère
                </p>
              </div>
            </div>
            <div class="animate-on-scroll">
              <div class="relative">
                <img
                  src="https://www.travail.gouv.bj/storage/teams/1708594357estelle-honfo-akpovo.jpg"
                  alt="Estelle HONFO AKPOVO - Secrétaire Générale Adjointe du Ministère"
                  class="rounded-2xl shadow-lg w-full max-w-2xs mx-auto"
                />
                <div
                  class="absolute -bottom-6 -right-6 w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center"
                >
                  <span class="text-white text-2xl">🇧🇯</span>
                </div>
              </div>
              <div class="mt-3 text-center">
                <h3
                  class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-0"
                >
                  Estelle HONFO AKPOVO
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                Secrétaire Générale Adjointe du Ministère
                </p>
              </div>
            </div>
            <div class="animate-on-scroll">
              <div class="relative">
                <img
                  src="https://www.travail.gouv.bj/storage/teams/1714985419vissoh-ahissin-g-mahoutondji-fredy.jpg"
                  alt="VISSOH AHISSIN G. Mahoutondji Frédy - Assistant du Secrétaire Général du Ministère"
                  class="rounded-2xl shadow-lg w-full max-w-2xs mx-auto"
                />
              
              </div>
              <div class="mt-3 text-center">
                <h3
                  class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-0"
                >
                  VISSOH AHISSIN G. Mahoutondji Frédy
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Assistant du Secrétaire Général du Ministère
                </p>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Le Secrétariat Général
            </h2>

            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
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
            <p
              class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Il assure la continuité de l'administration du ministère.
            </p>

            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Attributions
            </h3>
            <p
              class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            >
              À ce titre et sous autorité du ministre,
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >propose en collaboration avec le cabinet du ministre, les
                  orientations stratégiques destinées à traduire la vision, les
                  politiques et les stratégies du</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >gouvernement dans les secteurs d'activités relevant du
                  ministère</span
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
                  >veille à aligner toutes les directions centrales, techniques
                  et départementales sur les orientations stratégiques du
                  département et coordonne les actions de mise en œuvre du
                  programme de renforcement du leadership des du ministère</span
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
                  l'élaboration des rapports, l'évaluation et la capitalisation
                  du plan d'amélioration de la performance</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >globale du ministère, de ses politiques, de ses programmes et
                  de ses projets</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >coordonne les activités du personnel du ministère à l'effet
                  de formuler des résultats, une exigence de performance et de
                  qualité de service qui réponde aux besoins spécifiques des
                  citoyens, optimise les ressources intrants et activités</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >développe, en collaboration avec le cabinet du ministère et
                  en liaison avec les autres départements ministériels, des
                  partenariats, des réseaux et des coopérations avec le secteur
                  privé, la société civile, les organisations, les partenaires
                  techniques et financiers aux plans national et
                  international</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >assure la coordination de l'ensemble des activités du
                  ministère en matière de gestion administrative et de gestion
                  des finances publiques au sein du ministère, en liaison avec
                  la direction de la planification, de l'administration et des
                  finances, la direction des systèmes d'information et les
                  directions techniques</span
                >
              </li>
              <li class="flex items-start">
                <span
                  class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                ></span>
                <span
                  >assure l'élaboration du rapport annuel de capitalisation des
                  bonnes pratiques pour consolider les acquis et enrichir la
                  culture administrative, exécute toutes autres tâches à lui
                  confiées par le ministère dans le strict respect des lois et
                  règlements.</span
                >
              </li>
            </ul>

            <div
              class="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6"
            >
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le secrétaire général du ministère est dirigé par un secrétaire
                général assisté d'un secrétaire général adjoint.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Les directeurs centraux, les directeurs techniques, les
                directeurs départementaux et les responsables d'organismes sont
                intégrés sous l'autorité du secrétaire général du ministère.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Missions -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Missions Principales
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les responsabilités clés du Secrétariat Général
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let mission of missions"
            class="card p-6 text-center animate-on-scroll"
          >
            <div
              class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              {{ mission.titre }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ mission.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Organisation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Organisation
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Structure organisationnelle du Secrétariat Général
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              *ngFor="let service of services"
              class="card p-6 animate-on-scroll"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-2xl">{{ service.icone }}</span>
                </div>
                <div class="flex-1">
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                  >
                    {{ service.nom }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">
                    {{ service.description }}
                  </p>
                  <ul class="space-y-2">
                    <li
                      *ngFor="let attribution of service.attributions"
                      class="flex items-start"
                    >
                      <span
                        class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"
                      ></span>
                      <span class="text-gray-700 dark:text-gray-300 text-sm">{{
                        attribution
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processus -->
    <section
      class="section-padding bg-primary-800 dark:bg-primary-900 text-white"
    >
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            Processus de Coordination
          </h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            Comment le Secrétariat Général coordonne les activités du ministère
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div
              *ngFor="let etape of processus; let i = index"
              class="flex items-start space-x-6 animate-on-scroll"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-lg"
                >
                  {{ i + 1 }}
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">{{ etape.titre }}</h3>
                <p class="text-primary-100 dark:text-primary-200">
                  {{ etape.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Contacter le Secrétariat Général
          </h2>
          <div class="card p-8">
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
                    +229 21 30 00 00
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
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SecretariatGeneralComponent implements AfterViewInit {
  missions = [
    {
      icone: "🎯",
      titre: "Coordination Générale",
      description:
        "Coordonner les activités de l'ensemble des directions et services du ministère.",
    },
    {
      icone: "📋",
      titre: "Gestion Administrative",
      description:
        "Assurer la gestion administrative et le suivi des dossiers transversaux.",
    },
    {
      icone: "📊",
      titre: "Planification Stratégique",
      description:
        "Participer à l'élaboration et au suivi des plans d'action du ministère.",
    },
    {
      icone: "🤝",
      titre: "Interface Institutionnelle",
      description:
        "Servir d'interface entre le Cabinet et les directions techniques.",
    },
    {
      icone: "📈",
      titre: "Suivi-Évaluation",
      description:
        "Assurer le suivi et l'évaluation des programmes et projets du ministère.",
    },
    {
      icone: "📝",
      titre: "Documentation",
      description:
        "Gérer la documentation officielle et les archives du ministère.",
    },
  ];

  services = [
    {
      icone: "👥",
      nom: "Service des Ressources Humaines",
      description: "Gestion du personnel et développement des compétences.",
      attributions: [
        "Gestion des carrières du personnel",
        "Formation et perfectionnement",
        "Évaluation des performances",
        "Gestion des congés et permissions",
      ],
    },
    {
      icone: "💰",
      nom: "Service Financier et Comptable",
      description: "Gestion financière et comptable du ministère.",
      attributions: [
        "Élaboration du budget",
        "Suivi de l'exécution budgétaire",
        "Gestion de la comptabilité",
        "Contrôle des dépenses",
      ],
    },
    {
      icone: "🏢",
      nom: "Service du Patrimoine et de la Logistique",
      description: "Gestion du patrimoine mobilier et immobilier.",
      attributions: [
        "Gestion des bâtiments et équipements",
        "Maintenance et entretien",
        "Approvisionnement et stocks",
        "Transport et véhicules",
      ],
    },
    {
      icone: "📋",
      nom: "Service des Affaires Générales",
      description: "Coordination des activités administratives générales.",
      attributions: [
        "Courrier et communication",
        "Organisation des réunions",
        "Protocole et cérémonies",
        "Relations publiques",
      ],
    },
  ];

  processus = [
    {
      titre: "Réception des Instructions",
      description:
        "Réception et analyse des instructions du Cabinet du Ministre pour définir les priorités d'action.",
    },
    {
      titre: "Planification et Coordination",
      description:
        "Élaboration des plans d'action et coordination avec les différentes directions techniques.",
    },
    {
      titre: "Suivi de l'Exécution",
      description:
        "Suivi régulier de la mise en œuvre des activités et programmes par les services compétents.",
    },
    {
      titre: "Reporting et Évaluation",
      description:
        "Consolidation des rapports d'activités et évaluation des résultats obtenus.",
    },
    {
      titre: "Communication et Feedback",
      description:
        "Communication des résultats au Cabinet et feedback pour l'amélioration continue.",
    },
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}
