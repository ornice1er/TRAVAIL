import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-secretariat-general',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Secrétariat Général du Ministère</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            L'organe central de coordination et d'administration du Ministère du Travail et de la Fonction Publique.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Le Secrétariat Général</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Le Secrétariat Général constitue l'organe central de coordination, d'administration et de gestion 
              du Ministère du Travail et de la Fonction Publique. Il assure la liaison entre le Cabinet du Ministre 
              et les différentes directions techniques du ministère.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Placé sous l'autorité directe du Ministre, le Secrétariat Général veille à la mise en œuvre 
              des orientations politiques et stratégiques définies par la tutelle, tout en assurant 
              la coordination des activités de l'ensemble des services du ministère.
            </p>
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secrétaire Général</h3>
              <p class="text-primary-800 dark:text-primary-400 font-medium">M. [Nom du Secrétaire Général]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Secrétariat Général" 
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
            Les responsabilités clés du Secrétariat Général
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

    <!-- Organisation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Organisation</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Structure organisationnelle du Secrétariat Général
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div *ngFor="let service of services" class="card p-6 animate-on-scroll">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">{{ service.icone }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ service.nom }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">{{ service.description }}</p>
                  <ul class="space-y-2">
                    <li *ngFor="let attribution of service.attributions" class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span class="text-gray-700 dark:text-gray-300 text-sm">{{ attribution }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processus -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Processus de Coordination</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            Comment le Secrétariat Général coordonne les activités du ministère
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div *ngFor="let etape of processus; let i = index" class="flex items-start space-x-6 animate-on-scroll">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-lg">
                  {{ i + 1 }}
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">{{ etape.titre }}</h3>
                <p class="text-primary-100 dark:text-primary-200">{{ etape.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacter le Secrétariat Général</h2>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 00 00</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SecretariatGeneralComponent implements AfterViewInit {
  
  missions = [
    {
      icone: '🎯',
      titre: 'Coordination Générale',
      description: 'Coordonner les activités de l\'ensemble des directions et services du ministère.'
    },
    {
      icone: '📋',
      titre: 'Gestion Administrative',
      description: 'Assurer la gestion administrative et le suivi des dossiers transversaux.'
    },
    {
      icone: '📊',
      titre: 'Planification Stratégique',
      description: 'Participer à l\'élaboration et au suivi des plans d\'action du ministère.'
    },
    {
      icone: '🤝',
      titre: 'Interface Institutionnelle',
      description: 'Servir d\'interface entre le Cabinet et les directions techniques.'
    },
    {
      icone: '📈',
      titre: 'Suivi-Évaluation',
      description: 'Assurer le suivi et l\'évaluation des programmes et projets du ministère.'
    },
    {
      icone: '📝',
      titre: 'Documentation',
      description: 'Gérer la documentation officielle et les archives du ministère.'
    }
  ];
  
  services = [
    {
      icone: '👥',
      nom: 'Service des Ressources Humaines',
      description: 'Gestion du personnel et développement des compétences.',
      attributions: [
        'Gestion des carrières du personnel',
        'Formation et perfectionnement',
        'Évaluation des performances',
        'Gestion des congés et permissions'
      ]
    },
    {
      icone: '💰',
      nom: 'Service Financier et Comptable',
      description: 'Gestion financière et comptable du ministère.',
      attributions: [
        'Élaboration du budget',
        'Suivi de l\'exécution budgétaire',
        'Gestion de la comptabilité',
        'Contrôle des dépenses'
      ]
    },
    {
      icone: '🏢',
      nom: 'Service du Patrimoine et de la Logistique',
      description: 'Gestion du patrimoine mobilier et immobilier.',
      attributions: [
        'Gestion des bâtiments et équipements',
        'Maintenance et entretien',
        'Approvisionnement et stocks',
        'Transport et véhicules'
      ]
    },
    {
      icone: '📋',
      nom: 'Service des Affaires Générales',
      description: 'Coordination des activités administratives générales.',
      attributions: [
        'Courrier et communication',
        'Organisation des réunions',
        'Protocole et cérémonies',
        'Relations publiques'
      ]
    }
  ];
  
  processus = [
    {
      titre: 'Réception des Instructions',
      description: 'Réception et analyse des instructions du Cabinet du Ministre pour définir les priorités d\'action.'
    },
    {
      titre: 'Planification et Coordination',
      description: 'Élaboration des plans d\'action et coordination avec les différentes directions techniques.'
    },
    {
      titre: 'Suivi de l\'Exécution',
      description: 'Suivi régulier de la mise en œuvre des activités et programmes par les services compétents.'
    },
    {
      titre: 'Reporting et Évaluation',
      description: 'Consolidation des rapports d\'activités et évaluation des résultats obtenus.'
    },
    {
      titre: 'Communication et Feedback',
      description: 'Communication des résultats au Cabinet et feedback pour l\'amélioration continue.'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}