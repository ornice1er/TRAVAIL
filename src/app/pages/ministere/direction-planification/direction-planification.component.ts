import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-direction-planification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction de la Planification de l'Administration et des Finances</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            L'organe de planification stratégique et de gestion financière du Ministère du Travail et de la Fonction Publique.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">La Direction DPAF</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              La Direction de la Planification de l'Administration et des Finances (DPAF) est l'organe central 
              de planification stratégique, de programmation budgétaire et de gestion financière du ministère.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Elle assure la coordination entre les orientations politiques du ministère et leur traduction 
              en programmes opérationnels, tout en veillant à l'optimisation de l'utilisation des ressources 
              financières disponibles.
            </p>
            <div class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Directeur DPAF</h3>
              <p class="text-secondary-800 dark:text-secondary-400 font-medium">M. [Nom du Directeur DPAF]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Direction Planification" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Missions -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Missions Principales</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les domaines d'intervention de la DPAF
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mission of missions" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mission.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Organisation des Services</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Structure organisationnelle de la DPAF
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let service of services" class="card p-8 animate-on-scroll">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-3xl">{{ service.icone }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ service.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ service.description }}</p>
                <ul class="space-y-2">
                  <li *ngFor="let attribution of service.attributions" class="flex items-start">
                    <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">{{ attribution }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processus de Planification -->
    <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Processus de Planification</h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            Le cycle de planification stratégique et budgétaire
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div *ngFor="let etape of processusPlanning; let i = index" class="flex items-start space-x-6 animate-on-scroll">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-lg">
                  {{ i + 1 }}
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">{{ etape.titre }}</h3>
                <p class="text-secondary-100 dark:text-secondary-200 mb-3">{{ etape.description }}</p>
                <div class="text-sm text-secondary-200 dark:text-secondary-300">
                  <strong>Période :</strong> {{ etape.periode }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Outils et Méthodes -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Outils et Méthodes</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les instruments utilisés pour la planification et le suivi
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let outil of outils" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ outil.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ outil.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ outil.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Indicateurs de Performance -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Indicateurs de Performance</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Mesure de l'efficacité de la planification
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let indicateur of indicateurs" class="text-center animate-on-scroll">
            <div class="w-20 h-20 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ indicateur.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-secondary-700 dark:text-secondary-400 mb-2">{{ indicateur.valeur }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ indicateur.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ indicateur.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacter la DPAF</h2>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 20 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">dpaf@travail.gouv.bj</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionPlanificationComponent implements AfterViewInit {
  
  missions = [
    {
      icone: '📊',
      titre: 'Planification Stratégique',
      description: 'Élaboration des plans stratégiques et opérationnels du ministère.'
    },
    {
      icone: '💰',
      titre: 'Gestion Budgétaire',
      description: 'Préparation, exécution et suivi du budget du ministère.'
    },
    {
      icone: '📈',
      titre: 'Suivi-Évaluation',
      description: 'Suivi des performances et évaluation des programmes et projets.'
    },
    {
      icone: '🎯',
      titre: 'Programmation',
      description: 'Programmation des activités et allocation des ressources.'
    },
    {
      icone: '📋',
      titre: 'Reporting',
      description: 'Production de rapports d\'activités et de performance.'
    },
    {
      icone: '🤝',
      titre: 'Coordination',
      description: 'Coordination avec les partenaires techniques et financiers.'
    }
  ];
  
  services = [
    {
      icone: '📊',
      nom: 'Service de la Planification et de la Programmation',
      description: 'Élaboration des plans et programmes du ministère.',
      attributions: [
        'Élaboration du plan stratégique',
        'Programmation des activités',
        'Coordination intersectorielle',
        'Planification des investissements'
      ]
    },
    {
      icone: '💰',
      nom: 'Service du Budget et des Finances',
      description: 'Gestion budgétaire et financière du ministère.',
      attributions: [
        'Préparation du budget',
        'Suivi de l\'exécution budgétaire',
        'Gestion de la trésorerie',
        'Contrôle des dépenses'
      ]
    },
    {
      icone: '📈',
      nom: 'Service du Suivi-Évaluation',
      description: 'Suivi des performances et évaluation des résultats.',
      attributions: [
        'Définition des indicateurs',
        'Collecte des données',
        'Analyse des performances',
        'Évaluation d\'impact'
      ]
    },
    {
      icone: '📋',
      nom: 'Service des Études et de la Documentation',
      description: 'Études sectorielles et gestion documentaire.',
      attributions: [
        'Études prospectives',
        'Analyses sectorielles',
        'Veille stratégique',
        'Gestion documentaire'
      ]
    }
  ];
  
  processusPlanning = [
    {
      titre: 'Diagnostic et Analyse',
      description: 'Analyse de la situation existante et identification des enjeux stratégiques.',
      periode: 'Janvier - Février'
    },
    {
      titre: 'Définition des Orientations',
      description: 'Définition des orientations stratégiques et des objectifs prioritaires.',
      periode: 'Mars - Avril'
    },
    {
      titre: 'Élaboration des Plans',
      description: 'Élaboration des plans opérationnels et des programmes d\'activités.',
      periode: 'Mai - Juin'
    },
    {
      titre: 'Budgétisation',
      description: 'Traduction des plans en budgets et allocation des ressources.',
      periode: 'Juillet - Août'
    },
    {
      titre: 'Validation et Adoption',
      description: 'Validation des plans et budgets par les instances compétentes.',
      periode: 'Septembre - Octobre'
    },
    {
      titre: 'Mise en Œuvre et Suivi',
      description: 'Mise en œuvre des plans et suivi régulier des performances.',
      periode: 'Novembre - Décembre'
    }
  ];
  
  outils = [
    {
      icone: '📊',
      nom: 'Cadre de Dépenses à Moyen Terme (CDMT)',
      description: 'Outil de programmation budgétaire pluriannuelle.'
    },
    {
      icone: '🎯',
      nom: 'Cadre de Mesure de Performance',
      description: 'Système d\'indicateurs de performance et de résultats.'
    },
    {
      icone: '📈',
      nom: 'Tableau de Bord de Gestion',
      description: 'Outil de pilotage et de suivi des activités.'
    },
    {
      icone: '💻',
      nom: 'Système d\'Information de Gestion',
      description: 'Plateforme informatisée de gestion des données.'
    },
    {
      icone: '📋',
      nom: 'Matrice de Planification',
      description: 'Outil de structuration des objectifs et activités.'
    },
    {
      icone: '🔄',
      nom: 'Cycle de Revue Périodique',
      description: 'Mécanisme de révision et d\'ajustement des plans.'
    }
  ];
  
  indicateurs = [
    {
      icone: '✅',
      valeur: '95%',
      titre: 'Taux d\'Exécution Budgétaire',
      description: 'Niveau d\'exécution du budget annuel'
    },
    {
      icone: '📊',
      valeur: '12',
      titre: 'Plans Opérationnels',
      description: 'Nombre de plans élaborés par an'
    },
    {
      icone: '🎯',
      valeur: '85%',
      titre: 'Objectifs Atteints',
      description: 'Pourcentage d\'objectifs réalisés'
    },
    {
      icone: '⏱️',
      valeur: '30j',
      titre: 'Délai de Reporting',
      description: 'Délai moyen de production des rapports'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}