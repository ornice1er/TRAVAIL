import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';
import '@tailwindplus/elements';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-direction-generale-fonction-publique',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction Générale de la Fonction Publique</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            L'organe central de gestion et de modernisation de la fonction publique béninoise.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">La Fonction Publique en chiffres</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            L'impact de l'action de la Direction Générale de la Fonction Publique
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
              <img src="https://www.travail.gouv.bj/storage/structures/respos/ainanmon-c-eric.JPG" 
                   alt="AINANMON C. Eric - Directeur Général" 
                   class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
              <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center">
                <span class="text-white text-2xl">🇧🇯</span>
              </div>
            </div>
            <div class="mt-6 text-center">
              <h3 class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">AINANMON C. Eric</h3>
              <p class="text-gray-600 dark:text-gray-300">Directeur Général</p>
            </div>
            
            <div class="mt-8">
              <div class="relative">
                <img src="https://www.travail.gouv.bj/storage/teams/1677698519migan-rolande-regina-henriette-ayodele.JPG" 
                     alt="MIGAN Bolanle Regina Henriette Ayéfé - Directeur Général Adjoint" 
                     class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
              </div>
              <div class="mt-6 text-center">
                <h3 class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">MIGAN Rolande Regina Henriette Ayodélé</h3>
                <p class="text-gray-600 dark:text-gray-300">Directeur Général Adjoint</p>
              </div>
            </div>
          </div>
          
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Attribution</h2>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Conformément aux dispositions de l'article 9 du décret n° 2021-562 du 03 novembre 2021 portant 
              attributions, organisation et fonctionnement du Ministère du Travail et de la Fonction Publique, la 
              direction générale de la fonction publique définit, suit et évalue la politique de l'État en matière de 
              fonction publique.
            </p>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Attributions</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">À ce titre, elle est chargée :</p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'assurer la gestion prévisionnelle et la programmation des effectifs de fonction publique</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'organiser le recrutement des agents de l'État</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de suivre la gestion des carrières des agents de l'État ; d'organiser la gestion des départs à la retraite</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de conserver les archives du personnel de l'État ; d'élaborer les projets de textes législatifs et réglementaires en matière de fonction publique</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de gérer les relations avec les juridictions en matière de contentieux administratif</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'organiser la discipline dans la fonction publique</span>
              </li>
            </ul>
            
            <div class="mt-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                Elle assure en outre, le secrétariat permanent :
              </p>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300 mt-3">
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>du comité consultatif paritaire de la fonction publique</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>de la conférence des gestionnaires des ressources humaines</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>du conseil national de discipline</span>
                </li>
              </ul>
            </div>
            
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
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Directeurs Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'équipe technique de la Direction Générale de la Fonction Publique
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Fiches Métiers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les métiers et compétences de la Direction Générale de la Fonction Publique
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of fichesMetiers" class="card p-6 ">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ metier.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center">{{ metier.description }}</p>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Compétences requises :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let competence of metier.competences" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ competence }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Missions principales :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let mission of metier.missions" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ mission }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="pt-3 border-t border-gray-200 dark:border-gray-600">
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500 dark:text-gray-400">Niveau requis</span>
                  <span class="font-medium text-primary-700 dark:text-primary-400">{{ metier.niveauRequis }}</span>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span class="text-gray-500 dark:text-gray-400">Expérience</span>
                  <span class="font-medium text-primary-700 dark:text-primary-400">{{ metier.experience }}</span>
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
            Contactez directement les services spécialisés de la Direction Générale de la Fonction Publique
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let contact of contactsSpecifiques" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ contact.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ contact.service }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ contact.description }}</p>
            
            <div class="space-y-3">
              <div class="flex items-center justify-center space-x-3">
                <span class="text-primary-600 dark:text-primary-400">📞</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.telephone }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-primary-600 dark:text-primary-400">✉️</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.email }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-primary-600 dark:text-primary-400">⏰</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.horaires }}</span>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p class="text-xs text-primary-700 dark:text-primary-400 font-medium">
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
              Pour toute information concernant la fonction publique.
            </p>
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
export class DirectionGeneraleFonctionPubliqueComponent implements AfterViewInit {
  
  chiffres = [
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
  
  directeursTechniques = [
   {
      nom: 'ZENONTIN Zita Emma épouse DOSSA DAH',
      fonction: 'Chef du Département des Retraites et des Archives',
      photo: 'https://www.travail.gouv.bj/storage/teams/1677698620zenontin-zita-emma-epouse-dossa-dah.JPG',
    },
    {
      nom: 'MASSOU Siaka',
      fonction: 'Chef du Département du Recrutement des Agents de l’Etat',
      photo: 'https://www.travail.gouv.bj/storage/teams/1677698690massou-siaka.JPG',
    },
    {
      nom: 'AHOUANDOGBO Gbènakpon Elodie',
      fonction: 'Chef du Département des Etudes, du Contentieux et du Régime Disciplinaire',
      photo: 'https://www.travail.gouv.bj/storage/teams/1677698788ahouandogbo-gbenakpon-elodie.JPG',

    },
    {
      nom: 'IDOHOU Prosper',
      fonction: 'Chef de la Cellule de Gestion du Fichier Unique de Référence et de la Programmation des Effectifs',
      photo: 'https://www.travail.gouv.bj/storage/teams/1677698854idohou-prosper.JPG',
    }
  ];
  
  fichesMetiers = [
    {
      icone: '👥',
      titre: 'Gestionnaire des Carrières',
      description: 'Gestion des parcours professionnels des agents publics.',
      competences: [
        'Droit de la fonction publique',
        'Gestion des ressources humaines',
        'Procédures administratives',
        'Systèmes d\'information RH'
      ],
      missions: [
        'Suivi des carrières',
        'Gestion des promotions',
        'Traitement des mutations',
        'Conseil aux agents'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '📋',
      titre: 'Chargé de Recrutement',
      description: 'Organisation et gestion des concours de recrutement.',
      competences: [
        'Organisation d\'événements',
        'Évaluation des candidats',
        'Procédures de sélection',
        'Communication'
      ],
      missions: [
        'Organisation des concours',
        'Évaluation des candidatures',
        'Gestion des jurys',
        'Publication des résultats'
      ],
      niveauRequis: 'Bac+3',
      experience: '2 ans minimum'
    },
    {
      icone: '⚖️',
      titre: 'Conseiller Juridique',
      description: 'Gestion du contentieux et des affaires disciplinaires.',
      competences: [
        'Droit administratif',
        'Procédures disciplinaires',
        'Contentieux administratif',
        'Rédaction juridique'
      ],
      missions: [
        'Traitement du contentieux',
        'Procédures disciplinaires',
        'Conseil juridique',
        'Rédaction d\'actes'
      ],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    {
      icone: '📊',
      titre: 'Analyste RH',
      description: 'Analyse des données et statistiques de la fonction publique.',
      competences: [
        'Analyse statistique',
        'Systèmes d\'information',
        'Reporting',
        'Tableaux de bord'
      ],
      missions: [
        'Analyse des effectifs',
        'Production de statistiques',
        'Études prospectives',
        'Tableaux de bord RH'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '🎓',
      titre: 'Responsable Formation',
      description: 'Coordination des programmes de formation des agents.',
      competences: [
        'Ingénierie de formation',
        'Gestion de projet',
        'Évaluation pédagogique',
        'Partenariats'
      ],
      missions: [
        'Conception de formations',
        'Coordination des programmes',
        'Évaluation des formations',
        'Gestion des partenaires'
      ],
      niveauRequis: 'Bac+5',
      experience: '4 ans minimum'
    },
    {
      icone: '💰',
      titre: 'Gestionnaire de la Solde',
      description: 'Gestion de la paie et des indemnités des agents publics.',
      competences: [
        'Gestion de la paie',
        'Réglementation salariale',
        'Systèmes de paie',
        'Contrôle financier'
      ],
      missions: [
        'Traitement de la paie',
        'Calcul des indemnités',
        'Contrôle des soldes',
        'Régularisations'
      ],
      niveauRequis: 'Bac+3',
      experience: '2 ans minimum'
    }
  ];
  
  contactsSpecifiques = [
    {
      icone: '👥',
      service: 'Service Gestion des Carrières',
      description: 'Gestion des parcours professionnels et promotions.',
      telephone: '+229 21 30 40 01',
      email: 'carrieres.dgfp@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Carrières et promotions'
    },
    {
      icone: '📋',
      service: 'Service Recrutement',
      description: 'Organisation des concours et recrutements.',
      telephone: '+229 21 30 40 02',
      email: 'recrutement.dgfp@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Concours et recrutements'
    },
    {
      icone: '⚖️',
      service: 'Service Contentieux',
      description: 'Gestion des affaires disciplinaires et contentieux.',
      telephone: '+229 21 30 40 03',
      email: 'contentieux.dgfp@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Discipline et contentieux'
    },
    {
      icone: '🎓',
      service: 'Service Formation',
      description: 'Coordination des programmes de formation continue.',
      telephone: '+229 21 30 40 04',
      email: 'formation.dgfp@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Formation des agents'
    },
    {
      icone: '💰',
      service: 'Service Solde et Pensions',
      description: 'Gestion de la paie et des pensions de retraite.',
      telephone: '+229 21 30 40 05',
      email: 'solde.dgfp@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Paie et pensions'
    },
    {
      icone: '📞',
      service: 'Accueil et Information',
      description: 'Information générale sur la fonction publique.',
      telephone: '+229 21 30 40 00',
      email: 'info.dgfp@travail.gouv.bj',
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