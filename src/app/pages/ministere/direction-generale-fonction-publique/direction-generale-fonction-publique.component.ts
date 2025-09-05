import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-direction-generale-fonction-publique',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction Générale de la Fonction Publique</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            L'organe central de gestion et de modernisation de la fonction publique béninoise.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">La Direction Générale de la Fonction Publique</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              La Direction Générale de la Fonction Publique (DGFP) est l'organe central chargé de la gestion 
              des ressources humaines de l'État et de la modernisation de l'administration publique béninoise.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Elle élabore et met en œuvre les politiques de gestion des agents publics, veille à l'application 
              du statut général de la fonction publique et pilote les réformes administratives pour améliorer 
              l'efficacité et la qualité des services publics.
            </p>
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Directeur Général de la Fonction Publique</h3>
              <p class="text-primary-800 dark:text-primary-400 font-medium">M. [Nom du Directeur Général]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Direction Générale Fonction Publique" 
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
            Les domaines d'intervention de la DGFP
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mission of missions" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mission.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Directions Techniques -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Directions Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Organisation des services techniques de la DGFP
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let direction of directions" class="card p-8 animate-on-scroll">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-3xl">{{ direction.icone }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ direction.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ direction.description }}</p>
                <ul class="space-y-2">
                  <li *ngFor="let attribution of direction.attributions" class="flex items-start">
                    <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">{{ attribution }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Concours et Recrutements -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Concours et Recrutements</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            Processus de recrutement dans la fonction publique
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let concours of concours" class="bg-white/10 dark:bg-white/5 rounded-lg p-6 animate-on-scroll">
            <div class="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ concours.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ concours.type }}</h3>
            <p class="text-primary-100 dark:text-primary-200 mb-4">{{ concours.description }}</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-primary-200 dark:text-primary-300">Postes disponibles</span>
                <span class="font-medium">{{ concours.postes }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-primary-200 dark:text-primary-300">Prochaine session</span>
                <span class="font-medium">{{ concours.session }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Réformes en Cours -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Réformes en Cours</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Modernisation de l'administration publique
          </p>
        </div>
        
        <div class="space-y-8">
          <div *ngFor="let reforme of reformes" class="card p-8 animate-on-scroll">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div class="lg:col-span-2">
                <div class="flex items-start space-x-4 mb-4">
                  <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">{{ reforme.icone }}</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ reforme.nom }}</h3>
                    <p class="text-gray-600 dark:text-gray-300">{{ reforme.description }}</p>
                  </div>
                </div>
                <div class="ml-16">
                  <ul class="space-y-2">
                    <li *ngFor="let objectif of reforme.objectifs" class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span class="text-gray-700 dark:text-gray-300 text-sm">{{ objectif }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-secondary-700 dark:text-secondary-400 mb-2">{{ reforme.avancement }}%</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">Avancement</div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-secondary-600 h-2 rounded-full transition-all duration-300" 
                       [style.width.%]="reforme.avancement"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistiques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">La Fonction Publique en Chiffres</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Données clés sur les effectifs et la gestion
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let stat of statistiques" class="text-center animate-on-scroll">
            <div class="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ stat.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-2">{{ stat.valeur }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ stat.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services aux Agents -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services aux Agents Publics</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Accompagnement tout au long de la carrière
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of servicesAgents" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ service.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ service.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ service.description }}</p>
            <div class="text-sm text-secondary-700 dark:text-secondary-400 font-medium">
              Délai : {{ service.delai }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacter la DGFP</h2>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 40 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'dgfp@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p class="text-sm text-primary-700 dark:text-primary-400">
                  <strong>Accueil agents :</strong> Du lundi au vendredi de 8h à 16h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionGeneraleFonctionPubliqueComponent implements AfterViewInit {
  
  missions = [
    {
      icone: '👥',
      titre: 'Gestion des Carrières',
      description: 'Gestion des carrières des agents publics, promotions et mutations.'
    },
    {
      icone: '📋',
      titre: 'Recrutement et Concours',
      description: 'Organisation des concours de recrutement dans la fonction publique.'
    },
    {
      icone: '🎓',
      titre: 'Formation des Agents',
      description: 'Développement des compétences et formation continue des agents publics.'
    },
    {
      icone: '⚖️',
      titre: 'Discipline et Contentieux',
      description: 'Gestion des procédures disciplinaires et du contentieux administratif.'
    },
    {
      icone: '🔄',
      titre: 'Réformes Administratives',
      description: 'Pilotage des réformes de modernisation de l\'administration publique.'
    },
    {
      icone: '📊',
      titre: 'Études et Statistiques',
      description: 'Production d\'études et de statistiques sur la fonction publique.'
    }
  ];
  
  directions = [
    {
      icone: '👥',
      nom: 'Direction de la Gestion des Carrières',
      description: 'Gestion des parcours professionnels des agents publics.',
      attributions: [
        'Recrutement et intégration',
        'Promotions et avancements',
        'Mutations et détachements',
        'Cessation de service'
      ]
    },
    {
      icone: '🎓',
      nom: 'Direction de la Formation',
      description: 'Développement des compétences des agents publics.',
      attributions: [
        'Formation initiale et continue',
        'Perfectionnement professionnel',
        'Bourses d\'études',
        'Évaluation des formations'
      ]
    },
    {
      icone: '⚖️',
      nom: 'Direction des Affaires Juridiques',
      description: 'Gestion du contentieux et de la discipline.',
      attributions: [
        'Procédures disciplinaires',
        'Contentieux administratif',
        'Conseil juridique',
        'Élaboration des textes'
      ]
    },
    {
      icone: '📊',
      nom: 'Direction des Études et de la Documentation',
      description: 'Études prospectives et gestion documentaire.',
      attributions: [
        'Études sectorielles',
        'Statistiques RH',
        'Veille réglementaire',
        'Documentation administrative'
      ]
    }
  ];
  
  concours = [
    {
      icone: '🎓',
      type: 'Concours Directs',
      description: 'Recrutement de nouveaux agents par voie de concours.',
      postes: '2,000',
      session: 'Mars 2024'
    },
    {
      icone: '📈',
      type: 'Concours Professionnels',
      description: 'Promotion interne des agents en activité.',
      postes: '1,500',
      session: 'Mai 2024'
    },
    {
      icone: '🏆',
      type: 'Concours Exceptionnels',
      description: 'Recrutements spécialisés pour postes techniques.',
      postes: '500',
      session: 'Juillet 2024'
    }
  ];
  
  reformes = [
    {
      icone: '💻',
      nom: 'Digitalisation de la GRH',
      description: 'Mise en place d\'un système intégré de gestion des ressources humaines.',
      avancement: 75,
      objectifs: [
        'Dématérialisation des dossiers agents',
        'Automatisation des processus RH',
        'Portail agent en ligne',
        'Tableau de bord décisionnel'
      ]
    },
    {
      icone: '📊',
      nom: 'Réforme du Système d\'Évaluation',
      description: 'Modernisation du système d\'évaluation des performances.',
      avancement: 60,
      objectifs: [
        'Nouveaux critères d\'évaluation',
        'Formation des évaluateurs',
        'Système de notation harmonisé',
        'Lien performance-carrière'
      ]
    },
    {
      icone: '🎯',
      nom: 'Gestion Prévisionnelle des Emplois',
      description: 'Mise en place d\'une GPEC dans l\'administration.',
      avancement: 45,
      objectifs: [
        'Cartographie des métiers',
        'Identification des besoins futurs',
        'Plans de formation ciblés',
        'Mobilité professionnelle'
      ]
    }
  ];
  
  statistiques = [
    {
      icone: '👥',
      valeur: '156K',
      titre: 'Agents Publics',
      description: 'Effectif total de la fonction publique'
    },
    {
      icone: '🏛️',
      valeur: '85',
      titre: 'Ministères et Institutions',
      description: 'Structures employeuses'
    },
    {
      icone: '📈',
      valeur: '12%',
      titre: 'Taux de Promotion',
      description: 'Promotions annuelles moyennes'
    },
    {
      icone: '🎓',
      valeur: '25K',
      titre: 'Agents Formés',
      description: 'Bénéficiaires de formation par an'
    }
  ];
  
  servicesAgents = [
    {
      icone: '📄',
      nom: 'Actes de Carrière',
      description: 'Délivrance d\'attestations et certificats de service.',
      delai: '48h'
    },
    {
      icone: '💰',
      nom: 'Gestion de la Solde',
      description: 'Traitement des dossiers de solde et indemnités.',
      delai: '15 jours'
    },
    {
      icone: '🏥',
      nom: 'Couverture Médicale',
      description: 'Gestion de l\'assurance maladie des agents.',
      delai: '7 jours'
    },
    {
      icone: '🏠',
      nom: 'Logement de Fonction',
      description: 'Attribution et gestion des logements administratifs.',
      delai: '30 jours'
    },
    {
      icone: '✈️',
      nom: 'Congés et Permissions',
      description: 'Traitement des demandes de congés et permissions.',
      delai: '5 jours'
    },
    {
      icone: '🎯',
      nom: 'Orientation de Carrière',
      description: 'Conseil et orientation pour l\'évolution professionnelle.',
      delai: '10 jours'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}