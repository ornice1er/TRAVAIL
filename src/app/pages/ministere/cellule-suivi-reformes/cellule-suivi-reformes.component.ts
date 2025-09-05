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
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Cellule de Suivi des Réformes</h1>
          <p class="text-xl text-accent-100 dark:text-accent-200 max-w-3xl mx-auto">
            L'organe de pilotage et de suivi de la mise en œuvre des réformes du secteur public au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">La Cellule de Suivi des Réformes</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              La Cellule de Suivi des Réformes (CSR) est une structure technique spécialisée chargée du pilotage, 
              du suivi et de l'évaluation de la mise en œuvre des réformes dans le secteur public béninois.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Elle assure la coordination entre les différents acteurs impliqués dans les processus de réforme 
              et veille à l'atteinte des objectifs de modernisation de l'administration publique.
            </p>
            <div class="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Chef de Cellule</h3>
              <p class="text-accent-700 dark:text-accent-400 font-medium">M. [Nom du Chef de Cellule]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Cellule Suivi Réformes" 
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
            Les domaines d'intervention de la CSR
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

    <!-- Réformes en Cours -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Réformes en Cours</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            État d'avancement des principales réformes
          </p>
        </div>
        
        <div class="space-y-8">
          <div *ngFor="let reforme of reformes" class="card p-8 animate-on-scroll">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              <div class="lg:col-span-3">
                <div class="flex items-start space-x-4 mb-4">
                  <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">{{ reforme.icone }}</span>
                  </div>
                  <div>
                    <div class="flex items-center space-x-3 mb-2">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ reforme.nom }}</h3>
                      <span [class]="getStatusClass(reforme.statut)" class="px-3 py-1 rounded-full text-xs font-medium">
                        {{ reforme.statut }}
                      </span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-3">{{ reforme.description }}</p>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Échéance :</strong> {{ reforme.echeance }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-accent-700 dark:text-accent-400 mb-2">{{ reforme.avancement }}%</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">Avancement</div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div class="bg-accent-600 h-3 rounded-full transition-all duration-300" 
                       [style.width.%]="reforme.avancement"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthodologie -->
    <section class="section-padding bg-accent-800 dark:bg-accent-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Méthodologie de Suivi</h2>
          <p class="text-xl text-accent-100 dark:text-accent-200">
            Approche structurée pour le pilotage des réformes
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div *ngFor="let etape of methodologie; let i = index" class="flex items-start space-x-6 animate-on-scroll">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-lg">
                  {{ i + 1 }}
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">{{ etape.titre }}</h3>
                <p class="text-accent-100 dark:text-accent-200 mb-3">{{ etape.description }}</p>
                <div class="text-sm text-accent-200 dark:text-accent-300">
                  <strong>Outils :</strong> {{ etape.outils }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Indicateurs de Performance -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Indicateurs de Performance</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Mesure de l'efficacité des réformes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let indicateur of indicateurs" class="text-center animate-on-scroll">
            <div class="w-20 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ indicateur.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-accent-700 dark:text-accent-400 mb-2">{{ indicateur.valeur }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ indicateur.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ indicateur.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Outils et Ressources -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Outils et Ressources</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Instruments de pilotage et de suivi des réformes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let outil of outils" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ outil.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ outil.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ outil.description }}</p>
            <div class="text-sm text-primary-700 dark:text-primary-400 font-medium">
              {{ outil.utilisation }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rapports et Publications -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Rapports et Publications</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Documentation et suivi des réformes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let rapport of rapports" class="card p-6 animate-on-scroll">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-2xl">{{ rapport.icone }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ rapport.titre }}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">{{ rapport.description }}</p>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500 dark:text-gray-400">{{ rapport.date }}</span>
                  <a href="#" class="text-accent-700 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 font-medium">
                    Télécharger
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacter la CSR</h2>
          <div class="card p-8">
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
                  <p class="text-gray-600 dark:text-gray-300">csr@travail.gouv.bj</p>
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
  
  missions = [
    {
      icone: '🎯',
      titre: 'Pilotage Stratégique',
      description: 'Coordination et pilotage de la mise en œuvre des réformes sectorielles.'
    },
    {
      icone: '📊',
      titre: 'Suivi et Évaluation',
      description: 'Suivi régulier des indicateurs de performance et évaluation des résultats.'
    },
    {
      icone: '📋',
      titre: 'Reporting',
      description: 'Production de rapports périodiques sur l\'avancement des réformes.'
    },
    {
      icone: '🤝',
      titre: 'Coordination Intersectorielle',
      description: 'Facilitation de la coordination entre les différents acteurs.'
    },
    {
      icone: '💡',
      titre: 'Appui Technique',
      description: 'Assistance technique aux structures de mise en œuvre des réformes.'
    },
    {
      icone: '🔄',
      titre: 'Gestion du Changement',
      description: 'Accompagnement du changement organisationnel et culturel.'
    }
  ];
  
  reformes = [
    {
      icone: '💻',
      nom: 'Digitalisation des Services Publics',
      description: 'Transformation numérique de l\'administration pour améliorer l\'efficacité.',
      statut: 'En cours',
      avancement: 65,
      echeance: 'Décembre 2024'
    },
    {
      icone: '👥',
      nom: 'Réforme de la Fonction Publique',
      description: 'Modernisation du système de gestion des ressources humaines.',
      statut: 'En cours',
      avancement: 45,
      echeance: 'Juin 2025'
    },
    {
      icone: '⚖️',
      nom: 'Simplification Administrative',
      description: 'Réduction des procédures et amélioration de l\'accueil des usagers.',
      statut: 'En cours',
      avancement: 80,
      echeance: 'Mars 2024'
    },
    {
      icone: '📊',
      nom: 'Système de Gestion Axée sur les Résultats',
      description: 'Mise en place d\'un système de pilotage par la performance.',
      statut: 'Planifié',
      avancement: 25,
      echeance: 'Septembre 2025'
    },
    {
      icone: '🎓',
      nom: 'Renforcement des Capacités',
      description: 'Programme de formation continue des agents publics.',
      statut: 'En cours',
      avancement: 70,
      echeance: 'Décembre 2024'
    }
  ];
  
  methodologie = [
    {
      titre: 'Planification et Cadrage',
      description: 'Définition des objectifs, indicateurs et calendrier de mise en œuvre.',
      outils: 'Cadre logique, chronogramme, matrice de risques'
    },
    {
      titre: 'Mise en Œuvre et Suivi',
      description: 'Accompagnement des structures et suivi régulier des activités.',
      outils: 'Tableau de bord, missions de terrain, réunions de coordination'
    },
    {
      titre: 'Évaluation et Ajustement',
      description: 'Évaluation périodique des résultats et ajustement des stratégies.',
      outils: 'Revues trimestrielles, enquêtes de satisfaction, études d\'impact'
    },
    {
      titre: 'Capitalisation et Communication',
      description: 'Documentation des bonnes pratiques et communication des résultats.',
      outils: 'Rapports d\'étape, bulletins d\'information, ateliers de partage'
    }
  ];
  
  indicateurs = [
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
      icone: '💰',
      valeur: '92%',
      titre: 'Exécution Budgétaire',
      description: 'Taux d\'utilisation des ressources'
    },
    {
      icone: '😊',
      valeur: '78%',
      titre: 'Satisfaction Usagers',
      description: 'Amélioration perçue des services'
    }
  ];
  
  outils = [
    {
      icone: '📊',
      nom: 'Tableau de Bord Intégré',
      description: 'Outil de pilotage en temps réel des réformes.',
      utilisation: 'Mise à jour mensuelle'
    },
    {
      icone: '📋',
      nom: 'Matrice de Suivi',
      description: 'Suivi détaillé des activités et indicateurs.',
      utilisation: 'Suivi hebdomadaire'
    },
    {
      icone: '📈',
      nom: 'Système de Reporting',
      description: 'Production automatisée de rapports d\'avancement.',
      utilisation: 'Rapports trimestriels'
    },
    {
      icone: '🎯',
      nom: 'Cadre de Performance',
      description: 'Définition et mesure des indicateurs de résultats.',
      utilisation: 'Évaluation semestrielle'
    },
    {
      icone: '💻',
      nom: 'Plateforme Collaborative',
      description: 'Espace de travail partagé pour les équipes projet.',
      utilisation: 'Utilisation quotidienne'
    },
    {
      icone: '📱',
      nom: 'Application Mobile',
      description: 'Suivi mobile pour les responsables de réformes.',
      utilisation: 'Accès permanent'
    }
  ];
  
  rapports = [
    {
      icone: '📊',
      titre: 'Rapport Annuel des Réformes 2023',
      description: 'Bilan complet de l\'avancement des réformes sur l\'année.',
      date: 'Janvier 2024'
    },
    {
      icone: '📈',
      titre: 'Tableau de Bord T4 2023',
      description: 'Indicateurs de performance du quatrième trimestre.',
      date: 'Décembre 2023'
    },
    {
      icone: '🎯',
      titre: 'Évaluation Mi-Parcours',
      description: 'Évaluation à mi-parcours du programme de réformes.',
      date: 'Juin 2023'
    },
    {
      icone: '💡',
      titre: 'Guide des Bonnes Pratiques',
      description: 'Capitalisation des expériences réussies.',
      date: 'Mars 2023'
    },
    {
      icone: '📋',
      titre: 'Plan d\'Action 2024',
      description: 'Programmation des activités pour l\'année 2024.',
      date: 'Décembre 2023'
    },
    {
      icone: '🔍',
      titre: 'Étude d\'Impact Digitalisation',
      description: 'Analyse de l\'impact de la digitalisation des services.',
      date: 'Septembre 2023'
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
      'En cours': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'Planifié': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'Terminé': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'Suspendu': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
    };
    return classes[statut as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }
}