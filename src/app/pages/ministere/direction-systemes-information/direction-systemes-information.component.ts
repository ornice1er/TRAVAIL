import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';
import '@tailwindplus/elements';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-direction-systemes-information',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction des Systèmes d'Information</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            L'organe de transformation numérique et de gestion des systèmes d'information du ministère.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">La Direction en chiffres</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            L'impact de l'action de la Direction des Systèmes d'Information
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let chiffre of chiffres" class="text-center ">
            <div class="w-20 h-20 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ chiffre.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">{{ chiffre.valeur }}</div>
            <h3 class="text-lg font-semibold text-primary-100 dark:text-primary-200 mb-2">{{ chiffre.titre }}</h3>
            <p class="text-primary-200 dark:text-primary-300 text-sm">{{ chiffre.description }}</p>
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
              <img src="/dsi.jpeg" 
                   alt="GANDAHO D. J. Wilfried - Directeur" 
                   class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
              <!-- <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center">
                <span class="text-white text-2xl">🇧🇯</span>
              </div> -->
            </div>
            <div class="mt-6 text-center">
              <h3 class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">GANDAHO D. J. Wilfried</h3>
              <p class="text-gray-600 dark:text-gray-300">Directeur</p>
            </div>
          </div>
          
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Attribution</h2>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              La direction des systèmes d'information assure, en relation avec toutes les structures du ministère, la 
              conception, la mise en œuvre, la coordination et le suivi-évaluation d'actions intégrées.
            </p>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Attributions</h3>
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
            
            <!-- Boutons de téléchargement -->
             <!-- Boutons de téléchargement -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <button type="button" command="show-modal" commandfor="dialog" class="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
              Lire l'arrêté
            </button>
            <a href="https://travail.gouv.bj/download-data/aofs/2301250210-628.pdf/aof" download="https://travail.gouv.bj/download-data/aofs/2301250210-628.pdf/aof" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
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
    <!-- <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Départements</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'équipe technique de la Direction des Systèmes d'Information
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let directeur of directeursTechniques" class="card p-6 text-center ">
            <div class="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 overflow-hidden">
              <img [src]="directeur.photo" 
                   [alt]="directeur.nom" 
                   class="w-full h-full object-cover"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
              <div class="w-full h-full bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center" style="display: none;">
                <span class="text-2xl text-primary-600 dark:text-primary-400">👤</span>
              </div>
            </div>
            <h3 class="text-sm font-bold text-primary-800 dark:text-primary-400 mb-2">{{ directeur.nom }}</h3>
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
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Fiches Métiers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">

          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of fichesMetiers" class="card p-6 flex flex-col">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center flex-grow">{{ metier.description }}</p>
            
            <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
              <a class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm opacity-50 cursor-not-allowed">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                Télécharger
              </a>
              <a class="text-sm font-medium text-primary-600 opacity-50 cursor-not-allowed">
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
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Général</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Pour toute information concernant l'administration du ministère.
          </p>
        </div>
        
        <div class="max-w-2xl mx-auto">
          <div class="card p-8 text-center">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 01 52 16 00 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'secretariat.general@travail.gouv.bj'}}</p>
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
  <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <el-dialog-backdrop class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"></el-dialog-backdrop>

    <div tabindex="0" class="flex min-h-full items-end justify-center text-center focus:outline-none sm:items-center p-0 relative">
      <el-dialog-panel class="transform overflow-hidden absolute inset-0 bg-white px-4 pt-5 pb-4 text-left  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-full sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10">
        <div class="flex justify-end items-center w-full">
          <button type="button" command="close" commandfor="dialog" class="inline-flex  justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:shadow-none dark:hover:bg-red-400 dark:focus-visible:outline-red-500">Fermer</button>
        </div>
        <div>
         <ngx-extended-pdf-viewer [src]="'assets/download-data/aofs/aof-sgm.pdf'"></ngx-extended-pdf-viewer>
        </div>
        
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>
  `
})
export class DirectionSystemesInformationComponent implements AfterViewInit {
  
  chiffres = [
    {
      icone: '💻',
      valeur: '25',
      titre: 'Applications Développées',
      description: 'Solutions informatiques en production'
    },
    {
      icone: '🌐',
      valeur: '80%',
      titre: 'Services Digitalisés',
      description: 'Pourcentage de services dématérialisés'
    },
    {
      icone: '🛡️',
      valeur: '99.9%',
      titre: 'Disponibilité Systèmes',
      description: 'Taux de disponibilité des services'
    },
    {
      icone: '👥',
      valeur: '500+',
      titre: 'Utilisateurs Formés',
      description: 'Agents formés aux outils numériques'
    }
  ];
  
  directeursTechniques = [
    {
      nom: 'AGBESSI Paul',
      fonction: 'Directeur Technique Développement',
      photo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Développement d\'applications',
        'Architecture technique',
        'Supervision des projets'
      ]
    },
    {
      nom: 'KOSSOU Marie',
      fonction: 'Directrice Technique Infrastructure',
      photo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Gestion des infrastructures',
        'Administration réseau',
        'Sécurité informatique'
      ]
    },
    {
      nom: 'DOSSOU Jean-Claude',
      fonction: 'Directeur Technique Data',
      photo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Gestion des données',
        'Business Intelligence',
        'Analyse des données'
      ]
    }
  ];
  
  fichesMetiers = [
    {
      icone: '💻',
      titre: 'Développeur Full-Stack',
      description: 'Développement d\'applications web et mobiles.',
      competences: [
        'Langages de programmation',
        'Frameworks web',
        'Bases de données',
        'APIs et microservices'
      ],
      missions: [
        'Développement d\'applications',
        'Maintenance du code',
        'Tests et débogage',
        'Documentation technique'
      ],
      niveauRequis: 'Bac+3',
      experience: '2 ans minimum'
    },
    {
      icone: '🔧',
      titre: 'Administrateur Systèmes',
      description: 'Administration des serveurs et infrastructures réseau.',
      competences: [
        'Administration serveurs',
        'Réseaux informatiques',
        'Virtualisation',
        'Cloud computing'
      ],
      missions: [
        'Administration serveurs',
        'Gestion du réseau',
        'Maintenance infrastructure',
        'Monitoring systèmes'
      ],
      niveauRequis: 'Bac+3',
      experience: '3 ans minimum'
    },
    {
      icone: '🛡️',
      titre: 'Responsable Sécurité IT',
      description: 'Sécurisation des systèmes et protection des données.',
      competences: [
        'Sécurité informatique',
        'Audit de sécurité',
        'Gestion des risques',
        'Cryptographie'
      ],
      missions: [
        'Audit de sécurité',
        'Gestion des accès',
        'Protection des données',
        'Plan de continuité'
      ],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    {
      icone: '📊',
      titre: 'Analyste de Données',
      description: 'Analyse et exploitation des données ministérielles.',
      competences: [
        'Analyse de données',
        'Business Intelligence',
        'Statistiques',
        'Outils de visualisation'
      ],
      missions: [
        'Analyse des données',
        'Création de tableaux de bord',
        'Reporting automatisé',
        'Aide à la décision'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '🎯',
      titre: 'Chef de Projet IT',
      description: 'Pilotage des projets de transformation numérique.',
      competences: [
        'Gestion de projet',
        'Méthodologies agiles',
        'Coordination d\'équipes',
        'Gestion des risques'
      ],
      missions: [
        'Pilotage de projets',
        'Coordination des équipes',
        'Gestion des budgets',
        'Suivi des livrables'
      ],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    {
      icone: '🎓',
      titre: 'Formateur IT',
      description: 'Formation des utilisateurs aux outils numériques.',
      competences: [
        'Pédagogie',
        'Outils bureautiques',
        'Systèmes d\'information',
        'Communication'
      ],
      missions: [
        'Formation des utilisateurs',
        'Création de supports',
        'Accompagnement au changement',
        'Support utilisateur'
      ],
      niveauRequis: 'Bac+3',
      experience: '2 ans minimum'
    }
  ];
  
  contactsSpecifiques = [
    {
      icone: '💻',
      service: 'Service Développement',
      description: 'Développement d\'applications et solutions informatiques.',
      telephone: '+229 21 30 25 01',
      email: 'dev.dsi@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Développement logiciel'
    },
    {
      icone: '🔧',
      service: 'Service Infrastructure',
      description: 'Gestion des serveurs et infrastructures réseau.',
      telephone: '+229 21 30 25 02',
      email: 'infra.dsi@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Infrastructure IT'
    },
    {
      icone: '🛡️',
      service: 'Service Sécurité',
      description: 'Sécurisation des systèmes et protection des données.',
      telephone: '+229 21 30 25 03',
      email: 'securite.dsi@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Sécurité informatique'
    },
    {
      icone: '📊',
      service: 'Service Data',
      description: 'Gestion et analyse des données.',
      telephone: '+229 21 30 25 04',
      email: 'data.dsi@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Gestion des données'
    },
    {
      icone: '🛠️',
      service: 'Support Technique',
      description: 'Assistance technique et maintenance.',
      telephone: '+229 21 30 25 99',
      email: 'support.dsi@travail.gouv.bj',
      horaires: 'Lun-Ven 7h30-18h',
      specialite: 'Support utilisateur'
    },
    {
      icone: '📞',
      service: 'Accueil et Information',
      description: 'Information générale sur les services informatiques.',
      telephone: '+229 21 30 25 00',
      email: 'info.dsi@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
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
