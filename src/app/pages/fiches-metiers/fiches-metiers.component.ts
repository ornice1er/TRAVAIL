import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimationService } from '../../shared/services/animation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fiches-metiers',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Fiches Métiers</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            Découvrez tous les métiers et opportunités de carrière dans les structures du Ministère du Travail et de la Fonction Publique
          </p>
        </div>
      </div>
    </div>

    <!-- Filtres -->
    <section class="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <!-- Filtres par structure -->
          <div class="flex flex-wrap justify-center gap-4">
            <button
              *ngFor="let structure of structures"
              (click)="filtrerParStructure(structure.slug)"
              [class]="structureActive === structure.slug ? 'btn-primary' : 'btn-secondary'"
              class="px-6 py-2 rounded-full text-sm font-medium transition-all">
              {{ structure.nom }}
            </button>
          </div>
          <!-- Barre de recherche -->
          <div class="relative w-full md:w-auto">
            <input
              type="text"
              [(ngModel)]="termeRecherche"
              (ngModelChange)="appliquerFiltres()"
              placeholder="Rechercher un métier..."
              class="form-input w-full md:w-72 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Liste des fiches métiers -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of metiersFilters; trackBy: trackByMetierId" 
               class="card p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <span class="text-2xl">{{ metier.icone }}</span>
              </div>
              <span class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                {{ metier.structure }}
              </span>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">{{ metier.description }}</p>
            
            <div class="space-y-3 mb-6">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm mb-2">Compétences requises :</h4>
                <div class="flex flex-wrap gap-1">
                  <span *ngFor="let competence of metier.competences.slice(0, 3)" 
                        class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs">
                    {{ competence }}
                  </span>
                  <span *ngIf="metier.competences.length > 3" 
                        class="text-xs text-gray-500 dark:text-gray-400">
                    +{{ metier.competences.length - 3 }} autres
                  </span>
                </div>
              </div>
              
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400">
                  <strong>Niveau :</strong> {{ metier.niveauRequis }}
                </span>
                <span class="text-gray-500 dark:text-gray-400">
                  <strong>Exp :</strong> {{ metier.experience }}
                </span>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <button class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors opacity-50 cursor-not-allowed">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Télécharger
              </button>
              <button class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 opacity-50 cursor-not-allowed">
                Détails
              </button>
            </div>
          </div>
        </div>
        
        <!-- Message si aucun résultat -->
        <div *ngIf="metiersFilters.length === 0" class="text-center py-16">
          <div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🔍</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Aucun métier trouvé</h3>
          <p class="text-gray-600 dark:text-gray-300">Essayez de modifier vos critères de recherche.</p>
        </div>
      </div>
    </section>

    <!-- Informations complémentaires -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-6">Rejoignez-nous</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Le Ministère du Travail et de la Fonction Publique offre de nombreuses opportunités de carrière 
            pour contribuer au développement du Bénin.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/actualites" class="btn-primary bg-white text-primary-800 hover:bg-gray-100">
              Voir les concours
            </a>
            <a routerLink="/contact" class="btn-secondary border-white text-white hover:bg-white/10">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FichesMetiersComponent implements AfterViewInit {
  
  structureActive = 'toutes';
  termeRecherche = '';
  
  structures = [
    { nom: 'Toutes', slug: 'toutes' },
    { nom: 'Direction Générale du Travail', slug: 'dgt' },
    { nom: 'Direction Générale Fonction Publique', slug: 'dgfp' },
    { nom: 'Direction Renforcement Capacités', slug: 'drc' },
    { nom: 'Direction Systèmes Information', slug: 'dsi' },
    { nom: 'Inspection Générale', slug: 'ig' },
    { nom: 'Directions Départementales', slug: 'dd' },
    { nom: 'Cellule Suivi Réformes', slug: 'csr' }
  ];
  
  metiers = [
    // Direction Générale du Travail
    {
      id: '1',
      titre: 'Inspecteur du Travail',
      description: 'Contrôle de l\'application de la législation du travail dans les entreprises.',
      icone: '🔍',
      structure: 'Direction Générale du Travail',
      structureSlug: 'dgt',
      competences: ['Droit du travail', 'Techniques d\'inspection', 'Médiation sociale', 'Rédaction de rapports'],
      missions: ['Inspection des entreprises', 'Contrôle des conditions de travail', 'Médiation des conflits', 'Application des sanctions'],
      niveauRequis: 'Bac+5',
      experience: '3 ans minimum'
    },
    {
      id: '2',
      titre: 'Médiateur Social',
      description: 'Résolution des conflits collectifs de travail et facilitation du dialogue social.',
      icone: '⚖️',
      structure: 'Direction Générale du Travail',
      structureSlug: 'dgt',
      competences: ['Techniques de médiation', 'Droit social', 'Communication', 'Négociation'],
      missions: ['Médiation des conflits', 'Facilitation du dialogue', 'Négociation collective', 'Prévention des grèves'],
      niveauRequis: 'Bac+4',
      experience: '5 ans minimum'
    },
    {
      id: '3',
      titre: 'Conseiller Emploi',
      description: 'Promotion de l\'emploi et insertion professionnelle des demandeurs d\'emploi.',
      icone: '💼',
      structure: 'Direction Générale du Travail',
      structureSlug: 'dgt',
      competences: ['Politiques d\'emploi', 'Insertion professionnelle', 'Marché du travail', 'Accompagnement'],
      missions: ['Développement de l\'emploi', 'Insertion des jeunes', 'Partenariats entreprises', 'Programmes d\'emploi'],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    
    // Direction Générale de la Fonction Publique
    {
      id: '4',
      titre: 'Gestionnaire des Carrières',
      description: 'Gestion des parcours professionnels des agents publics et suivi des promotions.',
      icone: '👥',
      structure: 'Direction Générale Fonction Publique',
      structureSlug: 'dgfp',
      competences: ['Droit de la fonction publique', 'Gestion des ressources humaines', 'Procédures administratives', 'Systèmes d\'information RH'],
      missions: ['Suivi des carrières', 'Gestion des promotions', 'Traitement des mutations', 'Conseil aux agents'],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      id: '5',
      titre: 'Chargé de Recrutement',
      description: 'Organisation et gestion des concours de recrutement dans la fonction publique.',
      icone: '📋',
      structure: 'Direction Générale Fonction Publique',
      structureSlug: 'dgfp',
      competences: ['Organisation d\'événements', 'Évaluation des candidats', 'Procédures de sélection', 'Communication'],
      missions: ['Organisation des concours', 'Évaluation des candidatures', 'Gestion des jurys', 'Publication des résultats'],
      niveauRequis: 'Bac+3',
      experience: '2 ans minimum'
    },
    {
      id: '6',
      titre: 'Conseiller Juridique',
      description: 'Gestion du contentieux administratif et des affaires disciplinaires.',
      icone: '⚖️',
      structure: 'Direction Générale Fonction Publique',
      structureSlug: 'dgfp',
      competences: ['Droit administratif', 'Procédures disciplinaires', 'Contentieux administratif', 'Rédaction juridique'],
      missions: ['Traitement du contentieux', 'Procédures disciplinaires', 'Conseil juridique', 'Rédaction d\'actes'],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    
    // Direction Renforcement des Capacités
    {
      id: '7',
      titre: 'Ingénieur de Formation',
      description: 'Conception et développement de programmes de formation professionnelle.',
      icone: '🎓',
      structure: 'Direction Renforcement Capacités',
      structureSlug: 'drc',
      competences: ['Ingénierie pédagogique', 'Analyse des besoins', 'Conception de curricula', 'Évaluation pédagogique'],
      missions: ['Conception de formations', 'Développement pédagogique', 'Évaluation des programmes', 'Innovation pédagogique'],
      niveauRequis: 'Bac+5',
      experience: '4 ans minimum'
    },
    {
      id: '8',
      titre: 'Conseiller en Employabilité',
      description: 'Accompagnement des bénéficiaires vers l\'emploi et développement de l\'employabilité.',
      icone: '💼',
      structure: 'Direction Renforcement Capacités',
      structureSlug: 'drc',
      competences: ['Techniques d\'insertion', 'Coaching professionnel', 'Marché du travail', 'Accompagnement individuel'],
      missions: ['Accompagnement individuel', 'Techniques de recherche d\'emploi', 'Mise en relation', 'Suivi post-formation'],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    
    // Direction des Systèmes d'Information
    {
      id: '9',
      titre: 'Développeur Full-Stack',
      description: 'Développement d\'applications web et mobiles pour les services du ministère.',
      icone: '💻',
      structure: 'Direction Systèmes Information',
      structureSlug: 'dsi',
      competences: ['Langages de programmation', 'Frameworks web', 'Bases de données', 'APIs et microservices'],
      missions: ['Développement d\'applications', 'Maintenance du code', 'Tests et débogage', 'Documentation technique'],
      niveauRequis: 'Bac+3',
      experience: '2 ans minimum'
    },
    {
      id: '10',
      titre: 'Administrateur Systèmes',
      description: 'Administration des serveurs et infrastructures réseau du ministère.',
      icone: '🔧',
      structure: 'Direction Systèmes Information',
      structureSlug: 'dsi',
      competences: ['Administration serveurs', 'Réseaux informatiques', 'Virtualisation', 'Cloud computing'],
      missions: ['Administration serveurs', 'Gestion du réseau', 'Maintenance infrastructure', 'Monitoring systèmes'],
      niveauRequis: 'Bac+3',
      experience: '3 ans minimum'
    },
    
    // Inspection Générale
    {
      id: '11',
      titre: 'Inspecteur des Services Publics',
      description: 'Contrôle et évaluation du fonctionnement des services administratifs.',
      icone: '🔍',
      structure: 'Inspection Générale',
      structureSlug: 'ig',
      competences: ['Droit administratif', 'Techniques d\'audit', 'Analyse organisationnelle', 'Rédaction de rapports'],
      missions: ['Inspection des services publics', 'Évaluation des procédures', 'Contrôle de conformité', 'Recommandations d\'amélioration'],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    },
    {
      id: '12',
      titre: 'Auditeur Interne',
      description: 'Audit des processus et systèmes de gestion administrative.',
      icone: '📊',
      structure: 'Inspection Générale',
      structureSlug: 'ig',
      competences: ['Techniques d\'audit', 'Analyse financière', 'Systèmes d\'information', 'Gestion des risques'],
      missions: ['Audit des processus', 'Évaluation des risques', 'Contrôle interne', 'Amélioration continue'],
      niveauRequis: 'Bac+5',
      experience: '4 ans minimum'
    },
    
    // Directions Départementales
    {
      id: '13',
      titre: 'Directeur Départemental',
      description: 'Direction et coordination des activités départementales du ministère.',
      icone: '🏛️',
      structure: 'Directions Départementales',
      structureSlug: 'dd',
      competences: ['Management public', 'Coordination territoriale', 'Relations institutionnelles', 'Gestion d\'équipe'],
      missions: ['Direction de la structure', 'Coordination des services', 'Relations avec les autorités', 'Représentation du ministère'],
      niveauRequis: 'Bac+5',
      experience: '10 ans minimum'
    },
    {
      id: '14',
      titre: 'Agent Administratif',
      description: 'Gestion des formalités et services administratifs au niveau territorial.',
      icone: '📋',
      structure: 'Directions Départementales',
      structureSlug: 'dd',
      competences: ['Procédures administratives', 'Accueil du public', 'Bureautique', 'Réglementation'],
      missions: ['Accueil des usagers', 'Traitement des dossiers', 'Délivrance d\'actes', 'Information du public'],
      niveauRequis: 'Bac+2',
      experience: '1 an minimum'
    },
    
    // Secrétariat Général
    {
      id: '15',
      titre: 'Coordinateur Général',
      description: 'Coordination des activités de l\'ensemble du ministère.',
      icone: '🎯',
      structure: 'Secrétariat Général',
      structureSlug: 'dgt',
      competences: ['Coordination institutionnelle', 'Management stratégique', 'Communication', 'Gestion de projet'],
      missions: ['Coordination des directions', 'Suivi du PAG', 'Reporting ministériel', 'Relations institutionnelles'],
      niveauRequis: 'Bac+5',
      experience: '7 ans minimum'
    },
    {
      id: '16',
      titre: 'Chargé de Mission',
      description: 'Suivi de dossiers spéciaux et missions transversales du ministère.',
      icone: '📋',
      structure: 'Secrétariat Général',
      structureSlug: 'dgt',
      competences: ['Gestion de projet', 'Analyse stratégique', 'Communication', 'Coordination'],
      missions: ['Suivi de dossiers spéciaux', 'Missions transversales', 'Appui au Secrétaire Général', 'Coordination inter-directions'],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    
    // Cellule de Suivi des Réformes
    {
      id: '17',
      titre: 'Chargé de Suivi des Réformes',
      description: 'Suivi opérationnel de la mise en œuvre des réformes sectorielles.',
      icone: '📊',
      structure: 'Cellule Suivi Réformes',
      structureSlug: 'csr',
      competences: ['Gestion de projet', 'Suivi-évaluation', 'Analyse de données', 'Reporting'],
      missions: ['Suivi des indicateurs', 'Production de rapports', 'Coordination des acteurs', 'Appui technique'],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      id: '18',
      titre: 'Analyste des Politiques Publiques',
      description: 'Analyse et évaluation de l\'efficacité des politiques de réforme.',
      icone: '🎯',
      structure: 'Cellule Suivi Réformes',
      structureSlug: 'csr',
      competences: ['Analyse des politiques publiques', 'Méthodologie d\'évaluation', 'Recherche appliquée', 'Statistiques'],
      missions: ['Évaluation d\'impact', 'Analyse de politiques', 'Études prospectives', 'Recommandations stratégiques'],
      niveauRequis: 'Bac+5',
      experience: '5 ans minimum'
    }
  ];
  
  metiersFilters = [...this.metiers];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
  
  filtrerParStructure(structure: string) {
    this.structureActive = structure;
    this.appliquerFiltres();
  }

  appliquerFiltres() {
    let metiers = [...this.metiers];

    // Filtrage par structure
    if (this.structureActive !== 'toutes') {
      metiers = metiers.filter(m => m.structureSlug === this.structureActive);
    }

    // Filtrage par terme de recherche
    const terme = this.termeRecherche.toLowerCase().trim();
    if (terme) {
      metiers = metiers.filter(m =>
        m.titre.toLowerCase().includes(terme) ||
        m.description.toLowerCase().includes(terme) ||
        m.competences.some(c => c.toLowerCase().includes(terme))
      );
    }

    this.metiersFilters = metiers;
  }
  
  trackByMetierId(index: number, metier: any): string {
    return metier.id;
  }
}