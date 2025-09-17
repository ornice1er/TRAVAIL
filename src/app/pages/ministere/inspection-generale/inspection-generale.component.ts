import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-inspection-generale',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-accent-700 to-accent-800 dark:from-accent-800 dark:to-accent-900 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Inspection Générale des Services et Emplois Publics</h1>
          <p class="text-xl text-accent-100 dark:text-accent-200 max-w-3xl mx-auto">
            L'organe de contrôle, d'audit et d'évaluation des services publics et de l'emploi au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section class="section-padding bg-accent-800 dark:bg-accent-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">L'Inspection Générale en chiffres</h2>
          <p class="text-xl text-accent-100 dark:text-accent-200">
            L'impact de l'action de l'Inspection Générale des Services et Emplois Publics
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
              <img src="https://www.travail.gouv.bj/storage/structures/respos/1708440169alokpo-n-germain.jpg" 
                   alt="KANHOUNON Norbert Bocreace - Inspecteur Général des Services et Emplois Publics" 
                   class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
              <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-accent-700 rounded-full flex items-center justify-center">
                <span class="text-white text-2xl">🇧🇯</span>
              </div>
            </div>
            <div class="mt-6 text-center">
              <h3 class="text-xl font-bold text-accent-800 dark:text-accent-400 mb-2">KANHOUNON Norbert Bocreace</h3>
              <p class="text-gray-600 dark:text-gray-300">Inspecteur Général des Services et Emplois Publics</p>
            </div>
          </div>
          
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Attribution</h2>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Conformément aux dispositions de l'article 4 du décret n° 2018-398 du 29 août 2018 portant statuts 
              particuliers des corps de contrôle de l'ordre administratif en République du Bénin, l'inspection générale 
              des services et emplois publics exerce une mission générale de contrôle, d'audit, d'étude et de conseil et 
              d'évaluation dans les domaines administratif, déontologique et de gestion des ressources humaines pour 
              l'ensemble des services centraux et déconcentrés de tous les ministères et institutions de l'État, des 
              collectivités territoriales et des établissements et organismes publics.
            </p>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Attributions</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              L'inspection générale des services et emplois publics exerce ses attributions tant au niveau national que 
              sectoriel.
            </p>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Au niveau national, l'inspection générale des services et emplois publics a pour attributions:
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de contrôler la gestion administrative et celle des ressources humaines</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de contrôler l'organisation et le fonctionnement des services publics et des structures chargées de la gestion des agents publics</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de contrôler l'application des règles de déontologie administrative, d'éthique, et santé et de sécurité au travail</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'apporter l'assistance conseil nécessaire dans les services de l'État, des collectivités territoriales décentralisées, des établissements et offices publics ou semi-publics ainsi que des organismes de toute nature utilisant des agents publics</span>
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
            L'équipe technique de l'Inspection Générale
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
            Les métiers et compétences de l'Inspection Générale
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

    <!-- Contact spécifiques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacts Spécifiques</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Contactez directement les services spécialisés de l'Inspection Générale
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
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Signaler un Dysfonctionnement</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Vous pouvez signaler tout dysfonctionnement dans l'administration publique à l'Inspection Générale.
            </p>
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Ligne directe</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 15 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'inspection.generale@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4">
                <p class="text-sm text-accent-700 dark:text-accent-400">
                  <strong>Confidentialité garantie :</strong> Tous les signalements sont traités de manière confidentielle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class InspectionGeneraleComponent implements AfterViewInit {
  
  chiffres = [
    {
      icone: '📋',
      valeur: '150+',
      titre: 'Inspections Annuelles',
      description: 'Nombre d\'inspections réalisées par an'
    },
    {
      icone: '✅',
      valeur: '85%',
      titre: 'Recommandations Appliquées',
      description: 'Taux de mise en œuvre des recommandations'
    },
    {
      icone: '📈',
      valeur: '40%',
      titre: 'Amélioration des Services',
      description: 'Amélioration moyenne de la qualité'
    },
    {
      icone: '⏱️',
      valeur: '30%',
      titre: 'Réduction des Délais',
      description: 'Réduction des délais administratifs'
    }
  ];
  
  directeursTechniques = [
    {
      nom: 'ADJOVI Marcel',
      fonction: 'Directeur Technique Principal',
      photo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Coordination des missions d\'inspection',
        'Supervision des équipes techniques',
        'Validation des rapports d\'audit'
      ]
    },
    {
      nom: 'KOSSOU Françoise',
      fonction: 'Directrice Audit Interne',
      photo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Audit des procédures internes',
        'Évaluation des systèmes de contrôle',
        'Recommandations d\'amélioration'
      ]
    },
    {
      nom: 'TOGNON Sylvain',
      fonction: 'Directeur Contrôle de Gestion',
      photo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Contrôle de la gestion publique',
        'Analyse des performances',
        'Suivi des indicateurs'
      ]
    }
  ];
  
  fichesMetiers = [
    {
      icone: '🔍',
      titre: 'Inspecteur des Services Publics',
      description: 'Contrôle et évaluation du fonctionnement des services administratifs.',
      competences: [
        'Maîtrise du droit administratif',
        'Techniques d\'audit et de contrôle',
        'Analyse organisationnelle',
        'Rédaction de rapports'
      ],
      missions: [
        'Inspection des services publics',
        'Évaluation des procédures',
        'Contrôle de conformité',
        'Recommandations d\'amélioration'
      ],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    {
      icone: '👥',
      titre: 'Inspecteur des Emplois Publics',
      description: 'Contrôle de la gestion des ressources humaines dans l\'administration.',
      competences: [
        'Gestion des ressources humaines',
        'Droit de la fonction publique',
        'Techniques d\'évaluation',
        'Gestion des carrières'
      ],
      missions: [
        'Audit des dossiers RH',
        'Contrôle des recrutements',
        'Vérification des carrières',
        'Évaluation des performances'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '⚖️',
      titre: 'Inspecteur Déontologie',
      description: 'Veille au respect de l\'éthique et de la déontologie administrative.',
      competences: [
        'Droit disciplinaire',
        'Éthique administrative',
        'Techniques d\'enquête',
        'Médiation et arbitrage'
      ],
      missions: [
        'Enquêtes disciplinaires',
        'Contrôle déontologique',
        'Médiation de conflits',
        'Formation à l\'éthique'
      ],
      niveauRequis: 'Bac+5',
      experience: '7 ans minimum'
    },
    {
      icone: '📊',
      titre: 'Auditeur Interne',
      description: 'Audit des processus et systèmes de gestion administrative.',
      competences: [
        'Techniques d\'audit',
        'Analyse financière',
        'Systèmes d\'information',
        'Gestion des risques'
      ],
      missions: [
        'Audit des processus',
        'Évaluation des risques',
        'Contrôle interne',
        'Amélioration continue'
      ],
      niveauRequis: 'Bac+5',
      experience: '4 ans minimum'
    },
    {
      icone: '📋',
      titre: 'Contrôleur de Gestion Publique',
      description: 'Contrôle de l\'efficacité et de l\'efficience des services publics.',
      competences: [
        'Contrôle de gestion',
        'Analyse budgétaire',
        'Indicateurs de performance',
        'Tableaux de bord'
      ],
      missions: [
        'Contrôle budgétaire',
        'Analyse des coûts',
        'Mesure de performance',
        'Optimisation des ressources'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '🎯',
      titre: 'Évaluateur de Politiques Publiques',
      description: 'Évaluation de l\'impact et de l\'efficacité des politiques publiques.',
      competences: [
        'Méthodologie d\'évaluation',
        'Analyse statistique',
        'Politiques publiques',
        'Recherche appliquée'
      ],
      missions: [
        'Évaluation d\'impact',
        'Analyse de politiques',
        'Études prospectives',
        'Recommandations stratégiques'
      ],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    }
  ];
  
  contactsSpecifiques = [
    {
      icone: '🔍',
      service: 'Service Inspection Administrative',
      description: 'Contrôle du fonctionnement des services administratifs.',
      telephone: '+229 21 30 15 01',
      email: 'inspection.admin@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Dysfonctionnements administratifs'
    },
    {
      icone: '👥',
      service: 'Service Inspection RH',
      description: 'Contrôle de la gestion des ressources humaines.',
      telephone: '+229 21 30 15 02',
      email: 'inspection.rh@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Gestion du personnel public'
    },
    {
      icone: '⚖️',
      service: 'Service Déontologie',
      description: 'Enquêtes disciplinaires et respect de l\'éthique.',
      telephone: '+229 21 30 15 03',
      email: 'deontologie@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Violations déontologiques'
    },
    {
      icone: '📊',
      service: 'Service Audit et Évaluation',
      description: 'Audit des processus et évaluation des performances.',
      telephone: '+229 21 30 15 04',
      email: 'audit.evaluation@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Audit de performance'
    },
    {
      icone: '🚨',
      service: 'Cellule d\'Urgence',
      description: 'Traitement des signalements urgents et crises.',
      telephone: '+229 21 30 15 99',
      email: 'urgence.inspection@travail.gouv.bj',
      horaires: '24h/24 - 7j/7',
      specialite: 'Situations d\'urgence'
    },
    {
      icone: '📞',
      service: 'Accueil et Orientation',
      description: 'Information et orientation des usagers.',
      telephone: '+229 21 30 15 00',
      email: 'accueil.inspection@travail.gouv.bj',
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