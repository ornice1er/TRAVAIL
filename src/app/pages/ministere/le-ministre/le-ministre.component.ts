import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-le-ministre',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Le Ministre</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            Découvrez le profil et le parcours de Madame Adidjatou A. MATHYS, Ministre du Travail et de la Fonction Publique.
          </p>
        </div>
      </div>
    </div>

    <!-- Profil du Ministre -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="animate-on-scroll">
            <div class="relative">
              <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                   alt="Madame Adidjatou A. MATHYS, Ministre du Travail" 
                   class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
              <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-700 rounded-full flex items-center justify-center">
                <span class="text-white text-2xl">🇧🇯</span>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Madame Adidjatou A. MATHYS</h2>
            <h3 class="text-2xl font-semibold text-primary-800 dark:text-primary-400 mb-6">Ministre du Travail et de la Fonction Publique</h3>
            
            <div class="space-y-6">
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Profil Personnel</h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-primary-800 dark:bg-primary-400 rounded-full mr-3"></span>
                    Mariée et mère de trois enfants
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-primary-800 dark:bg-primary-400 rounded-full mr-3"></span>
                    Experte en Finance et Comptabilité de l'État
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-primary-800 dark:bg-primary-400 rounded-full mr-3"></span>
                    Administrateur du Trésor à la retraite
                  </li>
                </ul>
              </div>
              
              <div class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Formation</h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
                    Maîtrise ès-Sciences Économiques (1981) - Université Nationale du Bénin
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
                    Diplôme en Administration Centrale des Finances et Trésor (1984) - CEFAP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parcours Professionnel -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Parcours Professionnel</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un parcours exemplaire marqué par l'excellence et l'engagement au service de l'État.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div *ngFor="let etape of parcoursMinistre" class="card p-8 animate-on-scroll">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-primary-800 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    {{ etape.annee }}
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ etape.poste }}</h3>
                  <p class="text-primary-800 dark:text-primary-400 font-medium mb-3">{{ etape.periode }}</p>
                  <p class="text-gray-600 dark:text-gray-300">{{ etape.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Réalisations -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Principales Réalisations</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Des actions concrètes pour la modernisation de l'administration publique
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let realisation of realisations" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ realisation.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ realisation.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ realisation.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">Vision du Ministre</h2>
          <blockquote class="text-2xl font-light italic max-w-4xl mx-auto leading-relaxed">
            "Notre mission est de faire du Ministère du Travail et de la Fonction Publique un acteur clé 
            de la transformation de l'administration béninoise, au service du développement économique et social du pays."
          </blockquote>
          <cite class="block mt-8 text-primary-200 dark:text-primary-300 font-medium">
            - Madame Adidjatou A. MATHYS
          </cite>
        </div>
      </div>
    </section>
  `
})
export class LeMinistereComponent implements AfterViewInit {
  
  parcoursMinistre = [
    {
      annee: '2021',
      periode: 'Mai 2021 - Présent',
      poste: 'Ministre du Travail et de la Fonction Publique',
      description: 'Reconduite dans ses fonctions lors de la formation du premier gouvernement du deuxième quinquennat du Président Patrice Talon.'
    },
    {
      annee: '2017',
      periode: 'Octobre 2017 - Mai 2021',
      poste: 'Ministre du Travail et de la Fonction Publique',
      description: 'Maintenue à la tête du ministère lors du remaniement ministériel, confirmant la confiance du Chef de l\'État.'
    },
    {
      annee: '2016',
      periode: 'Avril 2016 - Octobre 2017',
      poste: 'Ministre du Travail, de la Fonction Publique et des Affaires Sociales',
      description: 'Nommée dans le premier gouvernement du Président Patrice Talon pour gérer ce département stratégique.'
    },
    {
      annee: '2012',
      periode: '2012 - 2016',
      poste: 'Ministre de l\'Économie et des Finances',
      description: 'Nommée par le Président Boni Yayi, elle démontre sa grande capacité managériale et son leadership confirmé.'
    },
    {
      annee: '2006',
      periode: '2006 - 2012',
      poste: 'Directrice de Cabinet',
      description: 'Directrice de Cabinet du Ministre de l\'Économie et des Finances, puis du Ministre Délégué chargé du Budget.'
    },
    {
      annee: '1999',
      periode: '1999 - 2003',
      poste: 'Directrice Générale du Trésor et de la Comptabilité Publique',
      description: 'Accède au poste de Directrice Générale après avoir gravi toutes les marches de la hiérarchie.'
    }
  ];
  
  realisations = [
    {
      icone: '🏛️',
      titre: 'Modernisation Administrative',
      description: 'Mise en place de réformes pour moderniser l\'administration publique béninoise.'
    },
    {
      icone: '💼',
      titre: 'Politique de l\'Emploi',
      description: 'Développement de stratégies innovantes pour lutter contre le chômage des jeunes.'
    },
    {
      icone: '📊',
      titre: 'Gestion Financière',
      description: 'Expertise reconnue dans la gestion des finances publiques et la comptabilité de l\'État.'
    },
    {
      icone: '🤝',
      titre: 'Dialogue Social',
      description: 'Promotion du dialogue entre les partenaires sociaux et amélioration des relations de travail.'
    },
    {
      icone: '🎓',
      titre: 'Formation Continue',
      description: 'Mise en place de programmes de formation pour les agents de la fonction publique.'
    },
    {
      icone: '⚖️',
      titre: 'Réformes Juridiques',
      description: 'Contribution à l\'élaboration et à la mise en œuvre de réformes du droit du travail.'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}