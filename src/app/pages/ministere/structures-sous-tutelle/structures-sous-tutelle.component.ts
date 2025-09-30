import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-structures-sous-tutelle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Structures sous Tutelle</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            Les organismes et institutions spécialisés placés sous la tutelle du Ministère du Travail et de la Fonction Publique.
          </p>
        </div>
      </div>
    </div>

    <!-- Structures Principales -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Structures Principales</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les organismes clés sous tutelle du ministère
          </p>
        </div>
        
        <div class="space-y-8">
          <div *ngFor="let structure of structures" class="card p-8 ">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div class="lg:col-span-3">
                <div class="flex items-start space-x-6">
                  <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-3xl">{{ structure.icone }}</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center space-x-3 mb-3">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ structure.nom }}</h3>
                      <span [class]="getStatusClass(structure.statut)" class="px-3 py-1 rounded-full text-xs font-medium">
                        {{ structure.statut }}
                      </span>
                    </div>
                    <p class="text-lg text-secondary-700 dark:text-secondary-400 font-medium mb-4">{{ structure.sigle }}</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{{ structure.description }}</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Missions principales</h4>
                        <ul class="space-y-2">
                          <li *ngFor="let mission of structure.missions" class="flex items-start">
                            <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span class="text-gray-700 dark:text-gray-300 text-sm">{{ mission }}</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Informations</h4>
                        <div class="space-y-2 text-sm">
                          <div class="flex justify-between">
                            <span class="text-gray-500 dark:text-gray-400">Création</span>
                            <span class="font-medium">{{ structure.creation }}</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-500 dark:text-gray-400">Siège</span>
                            <span class="font-medium">{{ structure.siege }}</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-500 dark:text-gray-400">Personnel</span>
                            <span class="font-medium">{{ structure.personnel }}</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-500 dark:text-gray-400">Budget</span>
                            <span class="font-medium">{{ structure.budget }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <div class="mb-4">
                  <img [src]="structure.logo" [alt]="'Logo ' + structure.nom" class="w-24 h-24 mx-auto rounded-lg shadow-md">
                </div>
                <div class="space-y-2">
                  <a [href]="structure.siteWeb" target="_blank" class="btn-secondary text-sm w-full block">
                    Site Web
                  </a>
                  <!-- <p class="text-xs text-gray-500 dark:text-gray-400">
                    DG : {{ structure.directeur }}
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Types de Tutelle -->
    <!-- <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Types de Tutelle</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Modalités d'exercice de la tutelle ministérielle
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let type of typesTutelle" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ type.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ type.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ type.description }}</p>
            <ul class="space-y-2 text-sm">
              <li *ngFor="let caracteristique of type.caracteristiques" class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span class="text-gray-700 dark:text-gray-300">{{ caracteristique }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Gouvernance -->
    <!-- <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Gouvernance et Contrôle</h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            Mécanismes de pilotage et de contrôle des structures sous tutelle
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let mecanisme of mecanismesGouvernance" class="text-center ">
            <div class="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mecanisme.icone }}</span>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ mecanisme.nom }}</h3>
            <p class="text-secondary-100 dark:text-secondary-200 text-sm mb-4">{{ mecanisme.description }}</p>
            <div class="text-xs text-secondary-200 dark:text-secondary-300">
              {{ mecanisme.frequence }}
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Performance -->
    <!-- <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Performance Globale</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Indicateurs de performance des structures sous tutelle
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let indicateur of indicateursPerformance" class="text-center ">
            <div class="w-20 h-20 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ indicateur.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-secondary-700 dark:text-secondary-400 mb-2">{{ indicateur.valeur }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ indicateur.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ indicateur.description }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Partenariats -->
    <!-- <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Partenariats Stratégiques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Collaborations avec les partenaires nationaux et internationaux
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let partenariat of partenariats" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ partenariat.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ partenariat.type }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ partenariat.description }}</p>
            <div class="text-sm text-accent-700 dark:text-accent-400 font-medium">
              {{ partenariat.nombre }} partenaires actifs
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center ">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Direction de la Tutelle</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Pour toute information concernant les structures sous tutelle.
          </p>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 80 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'tutelle@travail.gouv.bj'}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StructuresSousTutelleComponent implements AfterViewInit {
  
  structures = [
    {
      nom: 'Caisse Nationale de Sécurité Sociale',
      sigle: 'CNSS',
      icone: '🏥',
      description: 'La CNSS gère le régime de sécurité sociale des travailleurs salariés du secteur privé et assure la protection sociale des travailleurs et de leurs familles.',
      missions: [
        'Gestion des prestations familiales',
        'Assurance maladie des travailleurs',
        'Pensions de retraite et d\'invalidité',
        'Accidents du travail et maladies professionnelles'
      ],
      creation: '1970',
      siege: 'Cotonou',
      personnel: '850 agents',
      budget: '45 milliards FCFA',
      statut: 'Opérationnel',
      directeur: 'Mme [Nom du DG]',
      logo: '/logo-cnss.png',
      siteWeb: 'https://cnss.bj'
    },
  ];
  
  typesTutelle = [
    {
      icone: '🎯',
      nom: 'Tutelle Technique',
      description: 'Contrôle de la conformité des activités aux missions assignées.',
      caracteristiques: [
        'Validation des programmes d\'activités',
        'Contrôle de la qualité des prestations',
        'Évaluation des performances',
        'Appui technique et conseil'
      ]
    },
    {
      icone: '💰',
      nom: 'Tutelle Financière',
      description: 'Contrôle de la gestion financière et budgétaire.',
      caracteristiques: [
        'Approbation des budgets',
        'Contrôle de l\'exécution budgétaire',
        'Audit financier périodique',
        'Validation des comptes annuels'
      ]
    },
    {
      icone: '👥',
      nom: 'Tutelle Administrative',
      description: 'Contrôle de la gestion administrative et des ressources humaines.',
      caracteristiques: [
        'Nomination des dirigeants',
        'Validation des organigrammes',
        'Contrôle des procédures',
        'Suivi des réformes internes'
      ]
    }
  ];
  
  mecanismesGouvernance = [
    {
      icone: '📋',
      nom: 'Conseils d\'Administration',
      description: 'Organes de gouvernance avec représentation ministérielle.',
      frequence: 'Trimestrielle'
    },
    {
      icone: '📊',
      nom: 'Rapports d\'Activités',
      description: 'Transmission régulière des rapports de performance.',
      frequence: 'Mensuelle'
    },
    {
      icone: '🔍',
      nom: 'Missions d\'Inspection',
      description: 'Contrôles périodiques de conformité et performance.',
      frequence: 'Semestrielle'
    },
    {
      icone: '💼',
      nom: 'Comités de Pilotage',
      description: 'Instances de coordination stratégique.',
      frequence: 'Bimestrielle'
    }
  ];
  
  indicateursPerformance = [
    {
      icone: '🎯',
      valeur: '87%',
      titre: 'Taux de Réalisation',
      description: 'Objectifs atteints par les structures'
    },
    {
      icone: '💰',
      valeur: '92%',
      titre: 'Exécution Budgétaire',
      description: 'Taux moyen d\'exécution des budgets'
    },
    {
      icone: '👥',
      valeur: '2.1M',
      titre: 'Bénéficiaires',
      description: 'Personnes servies par les structures'
    },
    {
      icone: '📈',
      valeur: '15%',
      titre: 'Croissance Activité',
      description: 'Augmentation annuelle des services'
    }
  ];
  
  partenariats = [
    {
      icone: '🌍',
      type: 'Partenaires Internationaux',
      description: 'Coopération avec les organisations internationales.',
      nombre: '25'
    },
    {
      icone: '🏢',
      type: 'Secteur Privé',
      description: 'Partenariats public-privé pour l\'emploi.',
      nombre: '180'
    },
    {
      icone: '🎓',
      type: 'Institutions de Formation',
      description: 'Collaboration avec les centres de formation.',
      nombre: '65'
    },
    {
      icone: '🤝',
      type: 'Société Civile',
      description: 'Partenariats avec les ONGs et associations.',
      nombre: '95'
    },
    {
      icone: '🏛️',
      type: 'Collectivités Locales',
      description: 'Coopération avec les communes.',
      nombre: '77'
    },
    {
      icone: '🔬',
      type: 'Centres de Recherche',
      description: 'Collaboration pour la recherche appliquée.',
      nombre: '12'
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
      'Opérationnel': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'En développement': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'En restructuration': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'Suspendu': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
    };
    return classes[statut as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }
}