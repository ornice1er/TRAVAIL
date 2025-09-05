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
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Inspection Générale des Services et Emplois Publics</h1>
          <p class="text-xl text-accent-100 dark:text-accent-200 max-w-3xl mx-auto">
            L'organe de contrôle, d'audit et d'évaluation des services publics et de l'emploi au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">L'Inspection Générale</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              L'Inspection Générale des Services et Emplois Publics (IGSEP) est un organe de contrôle, 
              d'audit et d'évaluation placé sous l'autorité directe du Ministre du Travail et de la Fonction Publique.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Elle a pour mission principale de veiller à la bonne application des lois, règlements et 
              procédures dans l'administration publique, ainsi qu'au respect des normes de qualité 
              dans la prestation des services publics.
            </p>
            <div class="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Inspecteur Général</h3>
              <p class="text-accent-700 dark:text-accent-400 font-medium">M. [Nom de l'Inspecteur Général]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Inspection Générale" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Missions -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Missions et Attributions</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les domaines d'intervention de l'Inspection Générale
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mission of missions" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mission.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types d'Inspection -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Types d'Inspection</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les différentes modalités d'intervention de l'IGSEP
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let type of typesInspection" class="card p-8 animate-on-scroll">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center">
                  <span class="text-3xl">{{ type.icone }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ type.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ type.description }}</p>
                <ul class="space-y-2">
                  <li *ngFor="let caracteristique of type.caracteristiques" class="flex items-start">
                    <span class="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">{{ caracteristique }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processus d'Inspection -->
    <section class="section-padding bg-accent-800 dark:bg-accent-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Processus d'Inspection</h2>
          <p class="text-xl text-accent-100 dark:text-accent-200">
            Les étapes d'une mission d'inspection
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div *ngFor="let etape of processusInspection; let i = index" class="flex items-start space-x-6 animate-on-scroll">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-lg">
                  {{ i + 1 }}
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">{{ etape.titre }}</h3>
                <p class="text-accent-100 dark:text-accent-200 mb-3">{{ etape.description }}</p>
                <div class="text-sm text-accent-200 dark:text-accent-300">
                  <strong>Durée :</strong> {{ etape.duree }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Résultats et Impact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Résultats et Impact</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'impact de l'action de l'Inspection Générale
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let resultat of resultats" class="text-center animate-on-scroll">
            <div class="w-20 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ resultat.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-accent-700 dark:text-accent-400 mb-2">{{ resultat.chiffre }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ resultat.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ resultat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Signaler un Dysfonctionnement</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Vous pouvez signaler tout dysfonctionnement dans l'administration publique à l'Inspection Générale.
          </p>
          <div class="card p-8">
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
  
  missions = [
    {
      icone: '🔍',
      titre: 'Contrôle et Audit',
      description: 'Contrôler le fonctionnement des services publics et auditer les procédures administratives.'
    },
    {
      icone: '⚖️',
      titre: 'Respect de la Légalité',
      description: 'Veiller au respect des lois, règlements et procédures dans l\'administration publique.'
    },
    {
      icone: '📊',
      titre: 'Évaluation des Performances',
      description: 'Évaluer l\'efficacité et l\'efficience des services publics et des agents.'
    },
    {
      icone: '🎯',
      titre: 'Amélioration Continue',
      description: 'Proposer des recommandations pour améliorer la qualité des services publics.'
    },
    {
      icone: '📋',
      titre: 'Enquêtes Administratives',
      description: 'Mener des enquêtes sur les dysfonctionnements et les plaintes des usagers.'
    },
    {
      icone: '🤝',
      titre: 'Médiation',
      description: 'Faciliter la résolution des conflits entre l\'administration et les usagers.'
    }
  ];
  
  typesInspection = [
    {
      icone: '📅',
      nom: 'Inspection Programmée',
      description: 'Inspections planifiées selon un calendrier annuel établi.',
      caracteristiques: [
        'Planification annuelle',
        'Notification préalable',
        'Préparation approfondie',
        'Rapport détaillé'
      ]
    },
    {
      icone: '⚡',
      nom: 'Inspection Inopinée',
      description: 'Inspections surprises pour vérifier le fonctionnement normal des services.',
      caracteristiques: [
        'Sans préavis',
        'Contrôle en situation réelle',
        'Vérification immédiate',
        'Rapport express'
      ]
    },
    {
      icone: '🚨',
      nom: 'Inspection d\'Urgence',
      description: 'Inspections déclenchées suite à des signalements ou incidents graves.',
      caracteristiques: [
        'Déclenchement immédiat',
        'Traitement prioritaire',
        'Mesures conservatoires',
        'Suivi renforcé'
      ]
    },
    {
      icone: '🔄',
      nom: 'Inspection de Suivi',
      description: 'Vérification de la mise en œuvre des recommandations précédentes.',
      caracteristiques: [
        'Suivi des recommandations',
        'Évaluation des progrès',
        'Mesures correctives',
        'Validation des améliorations'
      ]
    }
  ];
  
  processusInspection = [
    {
      titre: 'Préparation de la Mission',
      description: 'Définition des objectifs, constitution de l\'équipe et préparation des outils d\'inspection.',
      duree: '1-2 semaines'
    },
    {
      titre: 'Notification et Planification',
      description: 'Information de l\'entité inspectée et planification détaillée des activités sur le terrain.',
      duree: '3-5 jours'
    },
    {
      titre: 'Inspection sur le Terrain',
      description: 'Collecte des données, entretiens, vérifications documentaires et observations directes.',
      duree: '1-3 semaines'
    },
    {
      titre: 'Analyse et Synthèse',
      description: 'Analyse des données collectées, identification des dysfonctionnements et formulation des recommandations.',
      duree: '1-2 semaines'
    },
    {
      titre: 'Rapport d\'Inspection',
      description: 'Rédaction du rapport final avec constats, recommandations et plan d\'amélioration.',
      duree: '1 semaine'
    },
    {
      titre: 'Suivi des Recommandations',
      description: 'Suivi de la mise en œuvre des recommandations et évaluation des améliorations.',
      duree: 'Continu'
    }
  ];
  
  resultats = [
    {
      icone: '📋',
      chiffre: '150+',
      titre: 'Inspections Annuelles',
      description: 'Nombre d\'inspections réalisées par an'
    },
    {
      icone: '✅',
      chiffre: '85%',
      titre: 'Recommandations Appliquées',
      description: 'Taux de mise en œuvre des recommandations'
    },
    {
      icone: '📈',
      chiffre: '40%',
      titre: 'Amélioration des Services',
      description: 'Amélioration moyenne de la qualité'
    },
    {
      icone: '⏱️',
      chiffre: '30%',
      titre: 'Réduction des Délais',
      description: 'Réduction des délais administratifs'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}