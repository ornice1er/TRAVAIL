import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-notre-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Notre Vision</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            Découvrez la vision stratégique du Ministère du Travail et de la Fonction Publique pour le développement du Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Vision Principale -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <div class="w-20 h-20 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <span class="text-4xl">🎯</span>
          </div>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">Notre Vision Stratégique</h2>
          <blockquote class="text-2xl font-light text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed italic">
            "Faire du Ministère du Travail et de la Fonction Publique un acteur de référence dans la promotion 
            de l'emploi décent, la modernisation de l'administration publique et le développement du capital humain au Bénin."
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Axes Stratégiques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nos Axes Stratégiques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Quatre piliers fondamentaux pour atteindre notre vision
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let axe of axesStrategiques" class="card p-8 animate-on-scroll">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-3xl">{{ axe.icone }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ axe.titre }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ axe.description }}</p>
                <ul class="space-y-2">
                  <li *ngFor="let objectif of axe.objectifs" class="flex items-start">
                    <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300">{{ objectif }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectifs 2030 -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Objectifs Horizon 2030</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Nos ambitions chiffrées pour la décennie
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let objectif of objectifs2030" class="text-center animate-on-scroll">
            <div class="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ objectif.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-primary-800 dark:text-primary-400 mb-2">{{ objectif.chiffre }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ objectif.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ objectif.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Nos Valeurs</h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            Les principes qui guident notre action quotidienne
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let valeur of valeurs" class="text-center animate-on-scroll">
            <div class="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ valeur.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ valeur.nom }}</h3>
            <p class="text-secondary-100 dark:text-secondary-200">{{ valeur.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">Notre Engagement</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Le Ministère du Travail et de la Fonction Publique s'engage à être un partenaire de confiance 
            pour tous les acteurs du monde du travail. Nous œuvrons quotidiennement pour créer un environnement 
            propice à l'épanouissement professionnel, à l'innovation administrative et au développement économique durable.
          </p>
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ensemble, construisons l'avenir du travail au Bénin</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Notre vision ne peut se réaliser qu'avec la participation active de tous : citoyens, entreprises, 
              partenaires sociaux et institutions. Rejoignez-nous dans cette démarche de transformation positive.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class NotreVisionComponent implements AfterViewInit {
  
  axesStrategiques = [
    {
      icone: '💼',
      titre: 'Promotion de l\'Emploi Décent',
      description: 'Développer des politiques actives d\'emploi et faciliter l\'insertion professionnelle.',
      objectifs: [
        'Créer 500 000 emplois décents d\'ici 2030',
        'Réduire le chômage des jeunes de 50%',
        'Développer l\'entrepreneuriat et l\'auto-emploi',
        'Renforcer les compétences professionnelles'
      ]
    },
    {
      icone: '🏛️',
      titre: 'Modernisation Administrative',
      description: 'Transformer l\'administration publique pour plus d\'efficacité et de transparence.',
      objectifs: [
        'Digitaliser 80% des services publics',
        'Réduire les délais administratifs de 60%',
        'Améliorer la qualité de service aux usagers',
        'Renforcer les capacités des agents publics'
      ]
    },
    {
      icone: '⚖️',
      titre: 'Dialogue Social Renforcé',
      description: 'Promouvoir un dialogue constructif entre tous les acteurs du monde du travail.',
      objectifs: [
        'Moderniser le cadre juridique du travail',
        'Renforcer les mécanismes de concertation',
        'Améliorer les conditions de travail',
        'Prévenir et résoudre les conflits sociaux'
      ]
    },
    {
      icone: '🎓',
      titre: 'Développement du Capital Humain',
      description: 'Investir dans la formation et le développement des compétences.',
      objectifs: [
        'Former 100 000 personnes par an',
        'Adapter les formations aux besoins du marché',
        'Développer la formation continue',
        'Promouvoir l\'égalité des chances'
      ]
    }
  ];
  
  objectifs2030 = [
    {
      icone: '👥',
      chiffre: '500K',
      titre: 'Emplois Créés',
      description: 'Nouveaux emplois décents créés d\'ici 2030'
    },
    {
      icone: '📱',
      chiffre: '80%',
      titre: 'Services Digitalisés',
      description: 'Des services publics accessibles en ligne'
    },
    {
      icone: '🎯',
      chiffre: '15%',
      titre: 'Taux de Chômage',
      description: 'Objectif de réduction du chômage national'
    },
    {
      icone: '⭐',
      chiffre: '95%',
      titre: 'Satisfaction Usagers',
      description: 'Taux de satisfaction des services publics'
    }
  ];
  
  valeurs = [
    {
      icone: '🤝',
      nom: 'Intégrité',
      description: 'Nous agissons avec honnêteté, transparence et éthique dans toutes nos actions.'
    },
    {
      icone: '🎯',
      nom: 'Excellence',
      description: 'Nous visons l\'excellence dans la qualité de nos services et de nos réalisations.'
    },
    {
      icone: '🌟',
      nom: 'Innovation',
      description: 'Nous encourageons l\'innovation et l\'adaptation aux évolutions technologiques.'
    },
    {
      icone: '⚖️',
      nom: 'Équité',
      description: 'Nous garantissons l\'égalité des chances et la justice sociale pour tous.'
    },
    {
      icone: '🤲',
      nom: 'Service Public',
      description: 'Nous plaçons l\'intérêt général et le service aux citoyens au cœur de notre mission.'
    },
    {
      icone: '🔄',
      nom: 'Durabilité',
      description: 'Nous œuvrons pour un développement durable et responsable.'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}