import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-directions-departementales',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Directions Départementales</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            Le réseau territorial du Ministère du Travail et de la Fonction Publique sur l'ensemble du territoire béninois.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Réseau Territorial</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Les Directions Départementales du Travail et de la Fonction Publique constituent le réseau 
              territorial du ministère, assurant la mise en œuvre des politiques publiques au niveau local 
              et le rapprochement des services de l'administration des citoyens.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Présentes dans les 12 départements du Bénin, elles garantissent l'équité territoriale 
              dans l'accès aux services publics et adaptent les interventions aux spécificités locales.
            </p>
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Coordination Nationale</h3>
              <p class="text-primary-800 dark:text-primary-400 font-medium">Direction de la Coordination Territoriale</p>
            </div>
          </div>
          <div class="">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Directions Départementales" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Carte des Départements -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Implantation Territoriale</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            12 directions départementales pour couvrir l'ensemble du territoire
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let departement of departements" class="card p-6  hover:shadow-lg transition-all duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-2xl">🏛️</span>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ departement.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">Chef-lieu : {{ departement.chefLieu }}</p>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-500 dark:text-gray-400">Population</span>
                    <span class="font-medium">{{ departement.population }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-500 dark:text-gray-400">Communes</span>
                    <span class="font-medium">{{ departement.communes }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-500 dark:text-gray-400">Agents</span>
                    <span class="font-medium">{{ departement.agents }}</span>
                  </div>
                </div>
                <div class="mt-4">
                  <p class="text-xs text-primary-700 dark:text-primary-400 font-medium">
                    Directeur : {{ departement.directeur }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Missions -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Missions des Directions Départementales</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Rôles et responsabilités au niveau territorial
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mission of missions" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mission.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Offerts -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Services Offerts</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            Services disponibles dans chaque direction départementale
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let service of services" class="bg-white/10 dark:bg-white/5 rounded-lg p-6 text-center ">
            <div class="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ service.icone }}</span>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ service.nom }}</h3>
            <p class="text-primary-100 dark:text-primary-200 text-sm mb-4">{{ service.description }}</p>
            <div class="text-xs text-primary-200 dark:text-primary-300">
              Délai : {{ service.delai }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organisation Type -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Organisation Type</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Structure organisationnelle d'une direction départementale
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div *ngFor="let service of servicesInternes" class="card p-6 ">
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

    <!-- Statistiques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Impact Territorial</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Résultats de l'action des directions départementales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let stat of statistiques" class="text-center ">
            <div class="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ stat.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-2">{{ stat.valeur }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ stat.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Coordination et Communication -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Coordination et Communication</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Mécanismes de coordination entre le niveau central et territorial
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mecanisme of mecanismes" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mecanisme.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mecanisme.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ mecanisme.description }}</p>
            <div class="text-sm text-accent-700 dark:text-accent-400 font-medium">
              Fréquence : {{ mecanisme.frequence }}
            </div>
          </div>
        </div>
      </div>
    
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center ">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Trouver votre Direction Départementale</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Contactez la direction départementale de votre région pour bénéficier de nos services.
          </p>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Standard National</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 70 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">🌐</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Annuaire en ligne</p>
                  <p class="text-gray-600 dark:text-gray-300">www.travail.gouv.bj/annuaire</p>
                </div>
              </div>
              <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p class="text-sm text-primary-700 dark:text-primary-400">
                  <strong>Horaires :</strong> Du lundi au vendredi de 7h30 à 15h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionsDepartementalesComponent implements AfterViewInit {
  
  departements = [
    {
      nom: 'Alibori',
      chefLieu: 'Kandi',
      population: '867,463',
      communes: '6',
      agents: '45',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Atacora',
      chefLieu: 'Natitingou',
      population: '772,262',
      communes: '9',
      agents: '52',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Atlantique',
      chefLieu: 'Allada',
      population: '1,398,229',
      communes: '8',
      agents: '68',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Borgou',
      chefLieu: 'Parakou',
      population: '1,214,249',
      communes: '8',
      agents: '62',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Collines',
      chefLieu: 'Savalou',
      population: '716,558',
      communes: '6',
      agents: '38',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Couffo',
      chefLieu: 'Aplahoué',
      population: '741,895',
      communes: '6',
      agents: '35',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Donga',
      chefLieu: 'Djougou',
      population: '543,130',
      communes: '4',
      agents: '28',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Littoral',
      chefLieu: 'Cotonou',
      population: '679,012',
      communes: '1',
      agents: '85',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Mono',
      chefLieu: 'Lokossa',
      population: '497,243',
      communes: '6',
      agents: '32',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Ouémé',
      chefLieu: 'Porto-Novo',
      population: '1,096,850',
      communes: '9',
      agents: '58',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Plateau',
      chefLieu: 'Pobè',
      population: '624,146',
      communes: '5',
      agents: '35',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Zou',
      chefLieu: 'Abomey',
      population: '851,623',
      communes: '9',
      agents: '48',
      directeur: 'M. [Nom]'
    }
  ];
  
  missions = [
    {
      icone: '🏛️',
      titre: 'Représentation Locale',
      description: 'Représenter le ministère au niveau départemental et assurer la liaison avec les autorités locales.'
    },
    {
      icone: '📋',
      titre: 'Mise en Œuvre des Politiques',
      description: 'Décliner et mettre en œuvre les politiques nationales au niveau territorial.'
    },
    {
      icone: '🤝',
      titre: 'Services de Proximité',
      description: 'Offrir des services de proximité aux citoyens et aux entreprises du département.'
    },
    {
      icone: '🔍',
      titre: 'Contrôle et Inspection',
      description: 'Assurer le contrôle de l\'application de la législation du travail sur le territoire.'
    },
    {
      icone: '📊',
      titre: 'Collecte de Données',
      description: 'Collecter et transmettre les données statistiques locales au niveau central.'
    },
    {
      icone: '💼',
      titre: 'Promotion de l\'Emploi',
      description: 'Développer des initiatives locales de promotion de l\'emploi et de l\'entrepreneuriat.'
    }
  ];
  
  services = [
    {
      icone: '📄',
      nom: 'Actes Administratifs',
      description: 'Délivrance d\'attestations et certificats.',
      delai: '48h'
    },
    {
      icone: '🔍',
      nom: 'Inspection du Travail',
      description: 'Contrôle des entreprises et médiation.',
      delai: '15 jours'
    },
    {
      icone: '💼',
      nom: 'Orientation Emploi',
      description: 'Conseil et orientation professionnelle.',
      delai: '24h'
    },
    {
      icone: '📋',
      nom: 'Formalités Entreprises',
      description: 'Accompagnement des démarches.',
      delai: '5 jours'
    },
    {
      icone: '🎓',
      nom: 'Formation Continue',
      description: 'Programmes de formation locale.',
      delai: 'Variable'
    },
    {
      icone: '⚖️',
      nom: 'Médiation Sociale',
      description: 'Résolution des conflits de travail.',
      delai: '30 jours'
    },
    {
      icone: '📊',
      nom: 'Statistiques Locales',
      description: 'Données sur l\'emploi départemental.',
      delai: '7 jours'
    },
    {
      icone: '🏥',
      nom: 'Sécurité au Travail',
      description: 'Prévention des risques professionnels.',
      delai: '10 jours'
    }
  ];
  
  servicesInternes = [
    {
      icone: '👥',
      nom: 'Service des Ressources Humaines',
      description: 'Gestion du personnel départemental.',
      attributions: [
        'Gestion des carrières locales',
        'Formation du personnel',
        'Évaluation des agents',
        'Discipline et contentieux'
      ]
    },
    {
      icone: '💰',
      nom: 'Service Administratif et Financier',
      description: 'Gestion administrative et budgétaire.',
      attributions: [
        'Gestion du budget départemental',
        'Comptabilité et finances',
        'Logistique et patrimoine',
        'Marchés publics locaux'
      ]
    },
    {
      icone: '🔍',
      nom: 'Service de l\'Inspection du Travail',
      description: 'Contrôle et inspection des entreprises.',
      attributions: [
        'Inspections d\'entreprises',
        'Médiation des conflits',
        'Application de la législation',
        'Prévention des risques'
      ]
    },
    {
      icone: '💼',
      nom: 'Service de l\'Emploi',
      description: 'Promotion de l\'emploi et insertion.',
      attributions: [
        'Placement et orientation',
        'Programmes d\'insertion',
        'Statistiques de l\'emploi',
        'Partenariats locaux'
      ]
    }
  ];
  
  statistiques = [
    {
      icone: '🏢',
      valeur: '15K+',
      titre: 'Entreprises Suivies',
      description: 'Entreprises sous contrôle départemental'
    },
    {
      icone: '👥',
      valeur: '45K',
      titre: 'Travailleurs Protégés',
      description: 'Bénéficiaires des services territoriaux'
    },
    {
      icone: '📋',
      valeur: '8,500',
      titre: 'Dossiers Traités',
      description: 'Dossiers administratifs par an'
    },
    {
      icone: '🎯',
      valeur: '92%',
      titre: 'Taux de Satisfaction',
      description: 'Satisfaction des usagers'
    }
  ];
  
  mecanismes = [
    {
      icone: '📞',
      nom: 'Conférences Téléphoniques',
      description: 'Réunions de coordination entre le niveau central et les directions départementales.',
      frequence: 'Hebdomadaire'
    },
    {
      icone: '📊',
      nom: 'Rapports d\'Activités',
      description: 'Transmission régulière des rapports d\'activités et de performance.',
      frequence: 'Mensuelle'
    },
    {
      icone: '🤝',
      nom: 'Missions de Supervision',
      description: 'Missions d\'appui et de supervision du niveau central vers les départements.',
      frequence: 'Trimestrielle'
    },
    {
      icone: '🎓',
      nom: 'Formations Continues',
      description: 'Sessions de formation et de mise à niveau du personnel départemental.',
      frequence: 'Semestrielle'
    },
    {
      icone: '📋',
      nom: 'Réunions Nationales',
      description: 'Assemblées générales des directeurs départementaux.',
      frequence: 'Annuelle'
    },
    {
      icone: '💻',
      nom: 'Plateforme Numérique',
      description: 'Système d\'information partagé pour la coordination et le suivi.',
      frequence: 'Permanente'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}