import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-direction-systemes-information',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction des Systèmes d'Information</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            L'organe de transformation numérique et de gestion des systèmes d'information du ministère.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <div class="flex items-start space-x-6 mb-8">
              <div class="flex-shrink-0">
                <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                     alt="GANDAHO D. J. Wilfried - Directeur" 
                     class="w-32 h-40 object-cover rounded-lg shadow-md">
                <div class="text-center mt-2">
                  <p class="text-sm font-semibold text-gray-900 dark:text-white">GANDAHO D. J. Wilfried</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">Directeur</p>
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  La direction des systèmes d'information assure, en relation avec toutes les structures du ministère, la 
                  conception, la mise en œuvre, la coordination et le suivi-évaluation d'actions intégrées.
                </p>
              </div>
            </div>
            
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Attributions</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Ces actions visent à :</p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>garantir l'opérationnalisation sectorielle de la politique nationale des services et systèmes d'information</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>conduire l'élaboration, la mise à jour et l'exécution opérationnelle du schéma directeur sectoriel des systèmes d'information en lien avec le schéma directeur national des systèmes d'information</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>développer et optimiser les systèmes d'information du ministère</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>assurer les projets et programmes numériques du ministère</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>assurer la promotion et l'accélération de la transformation digitale du ministère</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>mettre en œuvre et garantir la cohérence technique et applicative des systèmes d'information</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>coordonner les fonctions des systèmes d'information des entités, directions ou structures sous tutelle du ministère</span>
              </li>
            </ul>
            
            <!-- Boutons PDF -->
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#" class="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Lire l'arrêté
              </a>
              <a href="#" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Télécharger
              </a>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Direction Systèmes Information" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Attributions détaillées -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="card p-8 animate-on-scroll">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Attributions détaillées (suite)</h3>
            <div class="space-y-6 text-gray-700 dark:text-gray-300">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>garantir l'acquisition, l'authentification et la sauvegarde des documents administratifs et autres productions intellectuelles en accord avec les règles et politiques en vigueur</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>veiller à l'élaboration et à la mise en œuvre de la stratégie des infrastructures de connectivité intra-ministérielle</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>mettre en œuvre la politique de sécurité des systèmes d'information en accord avec les politiques et règles en vigueur</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>élaborer et mettre en œuvre la politique archivistique et de gestion des savoirs du ministère, en accord avec les politiques et règles en vigueur</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>garantir l'optimisation budgétaire et la mutualisation des ressources informatiques au sein du ministère</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>garantir la protection des données à caractère personnel dans les services et systèmes d'information du ministère</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>contribuer à faire de la donnée, un actif stratégique du ministère</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>assurer la fluidité et l'accessibilité de l'information</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>faciliter les relations entre les directions techniques et les usagers/clients pour un service public efficace</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Directeur DSI</h3>
              <p class="text-primary-800 dark:text-primary-400 font-medium">M. [Nom du Directeur DSI]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Direction Systèmes Information" 
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
            Les domaines d'intervention de la DSI
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

    <!-- Projets Numériques -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projets Numériques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les principales réalisations de la transformation numérique
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let projet of projets" class="card p-8 animate-on-scroll">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-3xl">{{ projet.icone }}</span>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ projet.nom }}</h3>
                  <span [class]="getStatusClass(projet.statut)" class="px-3 py-1 rounded-full text-xs font-medium">
                    {{ projet.statut }}
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ projet.description }}</p>
                <div class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400">Avancement</span>
                    <span class="font-medium">{{ projet.avancement }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-primary-600 h-2 rounded-full transition-all duration-300" 
                         [style.width.%]="projet.avancement"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Techniques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Organisation des équipes techniques de la DSI
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
                  <li *ngFor="let competence of service.competences" class="flex items-start">
                    <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">{{ competence }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Technologies Utilisées</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            Stack technologique et outils de développement
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div *ngFor="let tech of technologies" class="text-center animate-on-scroll">
            <div class="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">{{ tech.icone }}</span>
            </div>
            <h3 class="text-sm font-semibold mb-2">{{ tech.nom }}</h3>
            <p class="text-xs text-primary-200 dark:text-primary-300">{{ tech.usage }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sécurité -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sécurité Informatique</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Mesures de protection des systèmes d'information
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mesure of mesuresSecurite" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mesure.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mesure.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mesure.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Support Technique</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Besoin d'assistance technique ou de support informatique ?
          </p>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">🛠️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Support Technique</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 25 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'dsi@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p class="text-sm text-primary-700 dark:text-primary-400">
                  <strong>Horaires :</strong> Support disponible du lundi au vendredi de 8h à 17h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionSystemesInformationComponent implements AfterViewInit {
  
  missions = [
    {
      icone: '💻',
      titre: 'Développement d\'Applications',
      description: 'Conception et développement de solutions informatiques métier.'
    },
    {
      icone: '🌐',
      titre: 'Transformation Numérique',
      description: 'Pilotage de la digitalisation des services publics.'
    },
    {
      icone: '🔧',
      titre: 'Maintenance Systèmes',
      description: 'Maintenance et évolution des systèmes d\'information existants.'
    },
    {
      icone: '🛡️',
      titre: 'Sécurité Informatique',
      description: 'Protection des données et sécurisation des infrastructures.'
    },
    {
      icone: '📊',
      titre: 'Gestion des Données',
      description: 'Administration des bases de données et analyse des données.'
    },
    {
      icone: '🎓',
      titre: 'Formation Utilisateurs',
      description: 'Formation et accompagnement des utilisateurs aux outils numériques.'
    }
  ];
  
  projets = [
    {
      icone: '🌐',
      nom: 'Portail Emploi Numérique',
      description: 'Plateforme de recherche d\'emploi et de gestion des candidatures.',
      statut: 'En production',
      avancement: 100
    },
    {
      icone: '📱',
      nom: 'Application Mobile MTFP',
      description: 'Application mobile pour l\'accès aux services du ministère.',
      statut: 'En développement',
      avancement: 75
    },
    {
      icone: '🏛️',
      nom: 'SIRH Fonction Publique',
      description: 'Système intégré de gestion des ressources humaines.',
      statut: 'En test',
      avancement: 90
    },
    {
      icone: '📋',
      nom: 'Plateforme E-Services',
      description: 'Dématérialisation des démarches administratives.',
      statut: 'En développement',
      avancement: 60
    },
    {
      icone: '📊',
      nom: 'Tableau de Bord Décisionnel',
      description: 'Outil de pilotage et d\'aide à la décision.',
      statut: 'Planifié',
      avancement: 25
    },
    {
      icone: '🔐',
      nom: 'Système d\'Authentification Unique',
      description: 'SSO pour l\'accès sécurisé aux applications.',
      statut: 'En développement',
      avancement: 45
    }
  ];
  
  services = [
    {
      icone: '💻',
      nom: 'Équipe Développement',
      description: 'Développement d\'applications web et mobiles.',
      competences: [
        'Développement Full-Stack',
        'Applications mobiles',
        'APIs et microservices',
        'Intégration de systèmes'
      ]
    },
    {
      icone: '🔧',
      nom: 'Équipe Infrastructure',
      description: 'Gestion des serveurs et infrastructures réseau.',
      competences: [
        'Administration serveurs',
        'Gestion réseau',
        'Cloud computing',
        'Virtualisation'
      ]
    },
    {
      icone: '📊',
      nom: 'Équipe Data',
      description: 'Gestion et analyse des données.',
      competences: [
        'Administration BDD',
        'Business Intelligence',
        'Data Analytics',
        'Reporting automatisé'
      ]
    },
    {
      icone: '🛡️',
      nom: 'Équipe Sécurité',
      description: 'Sécurisation des systèmes et données.',
      competences: [
        'Audit de sécurité',
        'Gestion des accès',
        'Chiffrement des données',
        'Plan de continuité'
      ]
    }
  ];
  
  technologies = [
    { icone: '🌐', nom: 'Angular', usage: 'Frontend' },
    { icone: '⚡', nom: 'Node.js', usage: 'Backend' },
    { icone: '🗄️', nom: 'PostgreSQL', usage: 'Base de données' },
    { icone: '☁️', nom: 'Azure', usage: 'Cloud' },
    { icone: '🐳', nom: 'Docker', usage: 'Conteneurs' },
    { icone: '🔄', nom: 'Git', usage: 'Versioning' }
  ];
  
  mesuresSecurite = [
    {
      icone: '🔐',
      titre: 'Authentification Forte',
      description: 'Mise en place de l\'authentification à deux facteurs pour tous les accès.'
    },
    {
      icone: '🛡️',
      titre: 'Pare-feu Avancé',
      description: 'Protection périmétrique avec pare-feu nouvelle génération.'
    },
    {
      icone: '🔒',
      titre: 'Chiffrement des Données',
      description: 'Chiffrement des données sensibles en transit et au repos.'
    },
    {
      icone: '📋',
      titre: 'Audit de Sécurité',
      description: 'Audits réguliers et tests de pénétration des systèmes.'
    },
    {
      icone: '💾',
      titre: 'Sauvegarde Sécurisée',
      description: 'Stratégie de sauvegarde 3-2-1 avec chiffrement.'
    },
    {
      icone: '👥',
      titre: 'Formation Sécurité',
      description: 'Sensibilisation du personnel aux bonnes pratiques de sécurité.'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
  
  getStatusClass(statut: string): string {
    const classes = {
      'En production': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'En développement': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'En test': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'Planifié': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    };
    return classes[statut as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }
}