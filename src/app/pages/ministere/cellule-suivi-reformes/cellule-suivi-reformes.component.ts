import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-cellule-suivi-reformes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-accent-700 to-accent-800 dark:from-accent-800 dark:to-accent-900 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Cellule de Suivi des Réformes</h1>
          <p class="text-xl text-accent-100 dark:text-accent-200 max-w-3xl mx-auto">
            L'organe de pilotage et de suivi de la mise en œuvre des réformes du secteur public au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section class="section-padding bg-accent-800 dark:bg-accent-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">La Cellule en chiffres</h2>
          <p class="text-xl text-accent-100 dark:text-accent-200">
            L'impact de l'action de la Cellule de Suivi des Réformes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let chiffre of chiffres" class="text-center ">
            <div class="w-20 h-20 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ chiffre.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">{{ chiffre.valeur }}</div>
            <h3 class="text-lg font-semibold text-accent-100 dark:text-accent-200 mb-2">{{ chiffre.titre }}</h3>
            <p class="text-accent-200 dark:text-accent-300 text-sm">{{ chiffre.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Attribution avec photo du responsable -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="">
            <div class="relative">
              <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                   alt="Chef de la Cellule de Suivi des Réformes" 
                   class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
              <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-accent-700 rounded-full flex items-center justify-center">
                <span class="text-white text-2xl">🇧🇯</span>
              </div>
            </div>
            <div class="mt-6 text-center">
              <h3 class="text-xl font-bold text-accent-800 dark:text-accent-400 mb-2">M. [Nom du Chef de Cellule]</h3>
              <p class="text-gray-600 dark:text-gray-300">Chef de la Cellule de Suivi des Réformes</p>
            </div>
          </div>
          
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Attribution</h2>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              La Cellule de Suivi des Réformes (CSR) est une structure technique spécialisée chargée du pilotage, 
              du suivi et de l'évaluation de la mise en œuvre des réformes dans le secteur public béninois.
            </p>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Attributions</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">À ce titre, elle est chargée :</p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de coordonner et piloter la mise en œuvre des réformes sectorielles</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'assurer le suivi régulier des indicateurs de performance et l'évaluation des résultats</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de produire des rapports périodiques sur l'avancement des réformes</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de faciliter la coordination entre les différents acteurs impliqués</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de fournir une assistance technique aux structures de mise en œuvre</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'accompagner le changement organisationnel et culturel</span>
              </li>
            </ul>
            
            <!-- Boutons de téléchargement -->
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
        </div>
      </div>
    </section>

    <!-- Présentation des directeurs techniques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Directeurs Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'équipe technique de la Cellule de Suivi des Réformes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let directeur of directeursTechniques" class="card p-6 text-center ">
            <div class="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 overflow-hidden">
              <img [src]="directeur.photo" 
                   [alt]="directeur.nom" 
                   class="w-full h-full object-cover"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
              <div class="w-full h-full bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center" style="display: none;">
                <span class="text-2xl text-accent-600 dark:text-accent-400">👤</span>
              </div>
            </div>
            <h3 class="text-lg font-bold text-accent-800 dark:text-accent-400 mb-2">{{ directeur.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">{{ directeur.fonction }}</p>
            <div class="space-y-2">
              <div *ngFor="let responsabilite of directeur.responsabilites" class="text-xs text-gray-500 dark:text-gray-400">
                • {{ responsabilite }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fiches métiers -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Fiches Métiers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les métiers et compétences de la Cellule de Suivi des Réformes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of fichesMetiers" class="card p-6 ">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ metier.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center">{{ metier.description }}</p>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Compétences requises :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let competence of metier.competences" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ competence }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Missions principales :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let mission of metier.missions" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ mission }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="pt-3 border-t border-gray-200 dark:border-gray-600">
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500 dark:text-gray-400">Niveau requis</span>
                  <span class="font-medium text-accent-700 dark:text-accent-400">{{ metier.niveauRequis }}</span>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span class="text-gray-500 dark:text-gray-400">Expérience</span>
                  <span class="font-medium text-accent-700 dark:text-accent-400">{{ metier.experience }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacts spécifiques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacts Spécifiques</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Contactez directement les services spécialisés de la Cellule de Suivi des Réformes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let contact of contactsSpecifiques" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ contact.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ contact.service }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ contact.description }}</p>
            
            <div class="space-y-3">
              <div class="flex items-center justify-center space-x-3">
                <span class="text-accent-600 dark:text-accent-400">📞</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.telephone }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-accent-600 dark:text-accent-400">✉️</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.email }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-accent-600 dark:text-accent-400">⏰</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.horaires }}</span>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p class="text-xs text-accent-700 dark:text-accent-400 font-medium">
                {{ contact.specialite }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Contact général -->
        <div class="max-w-2xl mx-auto mt-16 ">
          <div class="card p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Général</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Pour toute information concernant les réformes en cours.
            </p>
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 60 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'csr@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4">
                <p class="text-sm text-accent-700 dark:text-accent-400">
                  <strong>Réunions mensuelles :</strong> Premier mercredi de chaque mois à 9h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CelluleSuiviReformesComponent implements AfterViewInit {
  
  chiffres = [
    {
      icone: '📊',
      valeur: '15',
      titre: 'Réformes Pilotées',
      description: 'Réformes en cours de mise en œuvre'
    },
    {
      icone: '✅',
      valeur: '75%',
      titre: 'Taux de Réalisation',
      description: 'Pourcentage d\'objectifs atteints'
    },
    {
      icone: '⏱️',
      valeur: '85%',
      titre: 'Respect des Délais',
      description: 'Activités réalisées dans les temps'
    },
    {
      icone: '📈',
      valeur: '40%',
      titre: 'Amélioration Services',
      description: 'Amélioration de la qualité des services'
    }
  ];
  
  directeursTechniques = [
    {
      nom: 'ADJOVI Marcel',
      fonction: 'Directeur Technique Principal',
      photo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Coordination des missions de suivi',
        'Supervision des équipes techniques',
        'Validation des rapports de suivi'
      ]
    },
    {
      nom: 'KOSSOU Françoise',
      fonction: 'Directrice Suivi-Évaluation',
      photo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Évaluation des réformes',
        'Analyse des indicateurs',
        'Recommandations d\'amélioration'
      ]
    },
    {
      nom: 'TOGNON Sylvain',
      fonction: 'Directeur Coordination',
      photo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Coordination intersectorielle',
        'Facilitation du dialogue',
        'Suivi des partenariats'
      ]
    }
  ];
  
  fichesMetiers = [
    {
      icone: '📊',
      titre: 'Chargé de Suivi des Réformes',
      description: 'Suivi opérationnel de la mise en œuvre des réformes sectorielles.',
      competences: [
        'Gestion de projet',
        'Suivi-évaluation',
        'Analyse de données',
        'Reporting'
      ],
      missions: [
        'Suivi des indicateurs',
        'Production de rapports',
        'Coordination des acteurs',
        'Appui technique'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '🎯',
      titre: 'Analyste des Politiques Publiques',
      description: 'Analyse et évaluation de l\'efficacité des politiques de réforme.',
      competences: [
        'Analyse des politiques publiques',
        'Méthodologie d\'évaluation',
        'Recherche appliquée',
        'Statistiques'
      ],
      missions: [
        'Évaluation d\'impact',
        'Analyse de politiques',
        'Études prospectives',
        'Recommandations stratégiques'
      ],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    {
      icone: '🤝',
      titre: 'Facilitateur de Changement',
      description: 'Accompagnement du changement organisationnel et culturel.',
      competences: [
        'Gestion du changement',
        'Communication',
        'Formation d\'adultes',
        'Psychologie organisationnelle'
      ],
      missions: [
        'Accompagnement du changement',
        'Formation des équipes',
        'Communication interne',
        'Résolution de résistances'
      ],
      niveauRequis: 'Bac+4',
      experience: '4 ans minimum'
    },
    {
      icone: '📋',
      titre: 'Coordinateur de Projet',
      description: 'Coordination des projets de réforme et gestion des parties prenantes.',
      competences: [
        'Management de projet',
        'Coordination multi-acteurs',
        'Planification stratégique',
        'Gestion des risques'
      ],
      missions: [
        'Planification de projets',
        'Coordination des équipes',
        'Gestion des risques',
        'Suivi budgétaire'
      ],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    {
      icone: '📈',
      titre: 'Spécialiste Monitoring',
      description: 'Conception et gestion des systèmes de suivi et d\'évaluation.',
      competences: [
        'Systèmes de M&E',
        'Indicateurs de performance',
        'Outils de collecte',
        'Analyse quantitative'
      ],
      missions: [
        'Conception de systèmes M&E',
        'Collecte de données',
        'Analyse des performances',
        'Tableaux de bord'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '💡',
      titre: 'Conseiller en Innovation',
      description: 'Promotion de l\'innovation dans les processus de réforme.',
      competences: [
        'Innovation publique',
        'Design thinking',
        'Transformation digitale',
        'Créativité'
      ],
      missions: [
        'Identification d\'innovations',
        'Conception de solutions',
        'Pilotage d\'expérimentations',
        'Diffusion des bonnes pratiques'
      ],
      niveauRequis: 'Bac+5',
      experience: '4 ans minimum'
    }
  ];
  
  contactsSpecifiques = [
    {
      icone: '📊',
      service: 'Service Suivi des Réformes',
      description: 'Suivi opérationnel de l\'avancement des réformes.',
      telephone: '+229 21 30 60 01',
      email: 'suivi.reformes@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Suivi et coordination'
    },
    {
      icone: '📈',
      service: 'Service Évaluation',
      description: 'Évaluation de l\'impact et de l\'efficacité des réformes.',
      telephone: '+229 21 30 60 02',
      email: 'evaluation@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Évaluation d\'impact'
    },
    {
      icone: '🎯',
      service: 'Service Planification',
      description: 'Planification stratégique et programmation des réformes.',
      telephone: '+229 21 30 60 03',
      email: 'planification.csr@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Planification stratégique'
    },
    {
      icone: '🤝',
      service: 'Service Coordination',
      description: 'Coordination entre les différents acteurs des réformes.',
      telephone: '+229 21 30 60 04',
      email: 'coordination.csr@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Coordination multi-acteurs'
    },
    {
      icone: '💻',
      service: 'Service Innovation',
      description: 'Promotion de l\'innovation dans les processus de réforme.',
      telephone: '+229 21 30 60 05',
      email: 'innovation.csr@travail.gouv.bj',
      horaires: 'Lun-Ven 9h-17h',
      specialite: 'Innovation publique'
    },
    {
      icone: '📞',
      service: 'Accueil et Information',
      description: 'Information générale sur les réformes en cours.',
      telephone: '+229 21 30 60 00',
      email: 'info.csr@travail.gouv.bj',
      horaires: 'Lun-Ven 7h30-17h',
      specialite: 'Information générale'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}