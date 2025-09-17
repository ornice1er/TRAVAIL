import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationService } from "../../../shared/services/animation.service";
import '@tailwindplus/elements';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: "app-secretariat-general",
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Secrétariat Général du Ministère</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            L'organe central de coordination et d'administration du Ministère du Travail et de la Fonction Publique.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Le Secrétariat Général en chiffres</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            L'impact de l'action du Secrétariat Général du Ministère
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

    <!-- Mission & Attribution -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Mission & Attribution</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
          <div class="md:col-span-1 text-center">
            <div class="relative inline-block">
              <img src="https://www.travail.gouv.bj/storage/structures/respos/1708440238kanhounon-norbert.jpg"
                   alt="ALOHON N. Germain - Secrétaire Général du Ministère"
                   class="rounded-2xl shadow-lg w-full max-w-xs mx-auto">
            </div>
            <div class="mt-6">
              <h3 class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">ALOHON N. Germain</h3>
              <p class="text-gray-600 dark:text-gray-300">Secrétaire Général du Ministère</p>
            </div>
          </div>
          <div class="md:col-span-2">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Conformément aux dispositions de l'article 39 du décret n° 2021-401 du 28 juillet 2021 fixant le 
              nouveau type des ministères, le secrétariat général du Ministère du Travail et de la Fonction 
              Publique est l'organe chargé de l'exécution correcte de la mission du ministère. Il veille à l'exécution des résultats et à la 
              satisfaction des besoins des citoyens.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Il assure la continuité de l'administration du ministère.
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Attributions</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">À ce titre et sous autorité du ministre :</p>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>propose en collaboration avec le cabinet du ministre, les orientations stratégiques destinées à traduire la vision, les politiques et les stratégies du gouvernement dans les secteurs d'activités relevant du ministère</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>veille à la mise en œuvre du Programme d'Actions du Gouvernement (PAG) et des orientations stratégiques du département en collaboration avec le cabinet du ministère</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>veille à aligner toutes les directions centrales, techniques et départementales sur les orientations stratégiques du département et coordonne les actions de mise en œuvre du programme de renforcement du leadership du ministère</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>assure un rôle technique sur tous les dossiers relevant de l'Inspection du ministère</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>assure avec l'appui technique du programme support, l'élaboration des rapports, l'évaluation et la capitalisation du plan d'amélioration de la performance globale du ministère, de ses politiques, de ses programmes et de ses projets</span>
            </li>
          </ul>

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

        <div class="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Secrétaire Général Adjoint -->
            <div class="text-center">
              <div class="relative inline-block">
                <img src="https://www.travail.gouv.bj/storage/teams/1708594357estelle-honfo-akpovo.jpg"
                     alt="Estelle HONFO AKPOVO - Secrétaire Générale Adjointe du Ministère"
                     class="rounded-2xl shadow-lg w-full max-w-xs mx-auto">
              </div>
              <div class="mt-6">
                <h3 class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">Estelle HONFO AKPOVO</h3>
                <p class="text-gray-600 dark:text-gray-300">Secrétaire Générale Adjointe du Ministère</p>
              </div>
            </div>
            
            <!-- Assistant -->
            <div class="text-center">
              <div class="relative inline-block">
                <img src="https://www.travail.gouv.bj/storage/teams/1714985419vissoh-ahissin-g-mahoutondji-fredy.jpg"
                     alt="VISSOH AHISSIN G. Mahoutondji Frédy - Assistant du Secrétaire Général du Ministère"
                     class="rounded-2xl shadow-lg w-full max-w-xs mx-auto">
              </div>
              <div class="mt-6">
                <h3 class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2">VISSOH AHISSIN G. Mahoutondji Frédy</h3>
                <p class="text-gray-600 dark:text-gray-300">Assistant du Secrétaire Général du Ministère</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Présentation des directeurs techniques -->
    <!-- <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Directeurs Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'équipe technique du Secrétariat Général
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
            Les métiers et compétences du Secrétariat Général
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of fichesMetiers" class="card p-6 flex flex-col">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center flex-grow">{{ metier.description }}</p>
            
            <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
              <a [href]="metier.file" download class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                Télécharger
              </a>
              <a [href]="metier.readMoreLink" class="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200">
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
  `,
})
export class SecretariatGeneralComponent implements AfterViewInit {
  
  chiffres = [
    {
      icone: '📊',
      valeur: '25',
      titre: 'Structures Coordonnées',
      description: 'Directions et services sous coordination'
    },
    {
      icone: '📋',
      valeur: '1,200+',
      titre: 'Dossiers Traités',
      description: 'Dossiers administratifs par mois'
    },
    {
      icone: '🎯',
      valeur: '95%',
      titre: 'Taux de Réalisation',
      description: 'Objectifs du PAG atteints'
    },
    {
      icone: '⏱️',
      valeur: '48h',
      titre: 'Délai Moyen',
      description: 'Traitement des dossiers urgents'
    }
  ];
  
  directeursTechniques = [
    {
      nom: 'KOUTON Marie-Claire',
      fonction: 'Directrice Technique Coordination',
      photo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Coordination des directions',
        'Suivi du PAG',
        'Reporting ministériel'
      ]
    },
    {
      nom: 'AGBESSI Jean-Paul',
      fonction: 'Directeur Technique Administration',
      photo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Gestion administrative',
        'Procédures internes',
        'Documentation officielle'
      ]
    },
    {
      nom: 'DOSSOU Sylvie',
      fonction: 'Directrice Technique Suivi-Évaluation',
      photo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=200',
      responsabilites: [
        'Suivi des performances',
        'Évaluation des programmes',
        'Capitalisation des acquis'
      ]
    }
  ];
  
  fichesMetiers = [
    {
      titre: 'Coordinateur Général',
      description: 'Coordination des activités de l\'ensemble du ministère.',
      file: 'assets/download-data/fiches-metiers/coordinateur-general.pdf',
      readMoreLink: '#'
    },
    {
      titre: 'Chargé de Mission',
      description: 'Suivi de dossiers spéciaux et missions transversales.',
      file: 'assets/download-data/fiches-metiers/charge-de-mission.pdf',
      readMoreLink: '#'
    },
    {
      titre: 'Analyste Performance',
      description: 'Suivi et évaluation des performances du ministère.',
      file: 'assets/download-data/fiches-metiers/analyste-performance.pdf',
      readMoreLink: '#'
    },
    {
      titre: 'Secrétaire de Direction',
      description: 'Assistance administrative et gestion du secrétariat.',
      file: 'assets/download-data/fiches-metiers/secretaire-de-direction.pdf',
      readMoreLink: '#'
    },
    {
      titre: 'Chargé de Relations',
      description: 'Gestion des relations institutionnelles et partenariats.',
      file: 'assets/download-data/fiches-metiers/charge-de-relations.pdf',
      readMoreLink: '#'
    },
    {
      titre: 'Documentaliste',
      description: 'Gestion de la documentation et des archives.',
      file: 'assets/download-data/fiches-metiers/documentaliste.pdf',
      readMoreLink: '#'
    }
  ];
  
  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}