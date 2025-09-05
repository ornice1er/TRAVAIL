import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-direction-generale-travail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction Générale du Travail</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            L'organe central de régulation du marché du travail et de promotion de l'emploi au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">La Direction Générale du Travail</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              La Direction Générale du Travail (DGT) est l'organe central chargé de la conception, 
              de la mise en œuvre et du suivi des politiques nationales en matière d'emploi, 
              de relations professionnelles et de protection des travailleurs.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Elle veille à l'application de la législation du travail, promeut le dialogue social 
              et œuvre pour l'amélioration des conditions de travail et la création d'emplois décents au Bénin.
            </p>
            <div class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Directeur Général du Travail</h3>
              <p class="text-secondary-800 dark:text-secondary-400 font-medium">M. [Nom du Directeur Général]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Direction Générale du Travail" 
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
            Les domaines d'intervention de la DGT
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mission of missions" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mission.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Directions Techniques -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Directions Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Organisation des services techniques de la DGT
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let direction of directions" class="card p-8 animate-on-scroll">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-3xl">{{ direction.icone }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ direction.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ direction.description }}</p>
                <ul class="space-y-2">
                  <li *ngFor="let attribution of direction.attributions" class="flex items-start">
                    <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">{{ attribution }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services aux Entreprises -->
    <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Services aux Entreprises</h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            Accompagnement des entreprises dans leurs obligations sociales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of servicesEntreprises" class="bg-white/10 dark:bg-white/5 rounded-lg p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ service.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ service.nom }}</h3>
            <p class="text-secondary-100 dark:text-secondary-200 mb-4">{{ service.description }}</p>
            <div class="text-sm text-secondary-200 dark:text-secondary-300">
              <strong>Délai :</strong> {{ service.delai }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Inspection du Travail -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Inspection du Travail</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Contrôle de l'application de la législation du travail
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Rôle des Inspecteurs</h3>
            <div class="space-y-4">
              <div *ngFor="let role of rolesInspecteurs" class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-secondary-600 dark:text-secondary-400">{{ role.icone }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ role.titre }}</h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">{{ role.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll">
            <div class="card p-8">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Statistiques d'Inspection</h3>
              <div class="space-y-6">
                <div *ngFor="let stat of statistiquesInspection" class="flex items-center justify-between">
                  <span class="text-gray-700 dark:text-gray-300">{{ stat.libelle }}</span>
                  <span class="text-2xl font-bold text-secondary-700 dark:text-secondary-400">{{ stat.valeur }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes Emploi -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Programmes d'Emploi</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Initiatives pour la promotion de l'emploi et l'insertion professionnelle
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let programme of programmesEmploi" class="card p-6 animate-on-scroll">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ programme.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ programme.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center">{{ programme.description }}</p>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400">Bénéficiaires</span>
                <span class="font-medium text-primary-700 dark:text-primary-400">{{ programme.beneficiaires }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400">Budget</span>
                <span class="font-medium text-primary-700 dark:text-primary-400">{{ programme.budget }}</span>
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
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacter la DGT</h2>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 30 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'dgt@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-4">
                <p class="text-sm text-secondary-700 dark:text-secondary-400">
                  <strong>Permanence :</strong> Service d'urgence disponible 24h/24 pour les accidents du travail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionGeneraleTravailComponent implements AfterViewInit {
  
  missions = [
    {
      icone: '💼',
      titre: 'Promotion de l\'Emploi',
      description: 'Développement des politiques d\'emploi et facilitation de l\'insertion professionnelle.'
    },
    {
      icone: '⚖️',
      titre: 'Relations Professionnelles',
      description: 'Régulation des relations entre employeurs et travailleurs, promotion du dialogue social.'
    },
    {
      icone: '🔍',
      titre: 'Inspection du Travail',
      description: 'Contrôle de l\'application de la législation du travail et des conditions de travail.'
    },
    {
      icone: '🛡️',
      titre: 'Protection des Travailleurs',
      description: 'Veille au respect des droits des travailleurs et à leur protection sociale.'
    },
    {
      icone: '📊',
      titre: 'Statistiques de l\'Emploi',
      description: 'Collecte et analyse des données sur l\'emploi et le marché du travail.'
    },
    {
      icone: '🎓',
      titre: 'Formation Professionnelle',
      description: 'Coordination des programmes de formation et de développement des compétences.'
    }
  ];
  
  directions = [
    {
      icone: '💼',
      nom: 'Direction de l\'Emploi et de l\'Insertion Professionnelle',
      description: 'Gestion des politiques d\'emploi et d\'insertion.',
      attributions: [
        'Élaboration des politiques d\'emploi',
        'Gestion des programmes d\'insertion',
        'Suivi du marché du travail',
        'Coordination avec l\'ANPE'
      ]
    },
    {
      icone: '🤝',
      nom: 'Direction des Relations Professionnelles',
      description: 'Médiation et régulation des relations de travail.',
      attributions: [
        'Médiation des conflits collectifs',
        'Enregistrement des syndicats',
        'Suivi des conventions collectives',
        'Promotion du dialogue social'
      ]
    },
    {
      icone: '🔍',
      nom: 'Direction de l\'Inspection du Travail',
      description: 'Contrôle de l\'application du droit du travail.',
      attributions: [
        'Inspections en entreprise',
        'Contrôle des conditions de travail',
        'Sanctions administratives',
        'Prévention des risques professionnels'
      ]
    },
    {
      icone: '📋',
      nom: 'Direction des Études et de la Législation',
      description: 'Élaboration et révision de la législation du travail.',
      attributions: [
        'Rédaction des textes législatifs',
        'Études sectorielles',
        'Veille juridique',
        'Harmonisation des textes'
      ]
    }
  ];
  
  servicesEntreprises = [
    {
      icone: '📝',
      nom: 'Visa de Contrat',
      description: 'Validation des contrats de travail pour les étrangers.',
      delai: '15 jours'
    },
    {
      icone: '📊',
      nom: 'Déclaration CNSS',
      description: 'Assistance pour les déclarations sociales.',
      delai: '5 jours'
    },
    {
      icone: '🏢',
      nom: 'Registre du Personnel',
      description: 'Tenue et validation du registre du personnel.',
      delai: '3 jours'
    },
    {
      icone: '⚖️',
      nom: 'Médiation Sociale',
      description: 'Résolution des conflits individuels de travail.',
      delai: '30 jours'
    },
    {
      icone: '🛡️',
      nom: 'Sécurité au Travail',
      description: 'Conseil en prévention des risques professionnels.',
      delai: '10 jours'
    },
    {
      icone: '📋',
      nom: 'Autorisation de Travail',
      description: 'Délivrance d\'autorisations de travail pour étrangers.',
      delai: '20 jours'
    }
  ];
  
  rolesInspecteurs = [
    {
      icone: '🔍',
      titre: 'Contrôle et Vérification',
      description: 'Vérification du respect de la législation du travail dans les entreprises.'
    },
    {
      icone: '📋',
      titre: 'Conseil et Information',
      description: 'Conseil aux employeurs et travailleurs sur leurs droits et obligations.'
    },
    {
      icone: '⚖️',
      titre: 'Sanctions Administratives',
      description: 'Application de sanctions en cas de non-respect de la réglementation.'
    },
    {
      icone: '🛡️',
      titre: 'Protection des Travailleurs',
      description: 'Veille à la protection de la santé et sécurité des travailleurs.'
    }
  ];
  
  statistiquesInspection = [
    { libelle: 'Entreprises inspectées/an', valeur: '2,500+' },
    { libelle: 'Infractions constatées', valeur: '450' },
    { libelle: 'Médiations réussies', valeur: '85%' },
    { libelle: 'Accidents prévenus', valeur: '200+' }
  ];
  
  programmesEmploi = [
    {
      icone: '👥',
      nom: 'Programme Jeunes Entrepreneurs',
      description: 'Accompagnement des jeunes dans la création d\'entreprises.',
      beneficiaires: '5,000 jeunes',
      budget: '2 milliards FCFA'
    },
    {
      icone: '🎓',
      nom: 'Formation Professionnelle Accélérée',
      description: 'Formation rapide aux métiers porteurs.',
      beneficiaires: '10,000 personnes',
      budget: '3 milliards FCFA'
    },
    {
      icone: '🏭',
      nom: 'Emplois Verts',
      description: 'Création d\'emplois dans l\'économie verte.',
      beneficiaires: '3,000 emplois',
      budget: '1.5 milliard FCFA'
    },
    {
      icone: '👩',
      nom: 'Autonomisation des Femmes',
      description: 'Programme spécial d\'insertion des femmes.',
      beneficiaires: '8,000 femmes',
      budget: '2.5 milliards FCFA'
    },
    {
      icone: '🌾',
      nom: 'Emploi Rural',
      description: 'Développement de l\'emploi en milieu rural.',
      beneficiaires: '15,000 ruraux',
      budget: '4 milliards FCFA'
    },
    {
      icone: '💻',
      nom: 'Emploi Numérique',
      description: 'Formation aux métiers du numérique.',
      beneficiaires: '2,000 jeunes',
      budget: '1 milliard FCFA'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}