import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';
import { Service } from '../../shared/models/actualite.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Services en ligne</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            Simplifiez vos démarches administratives grâce à nos services numériques accessibles 24h/24 et 7j/7.
          </p>
        </div>
      </div>
    </div>

    <!-- Filtres -->
    <section class="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4 animate-on-scroll">
          <button 
            *ngFor="let categorie of categories"
            (click)="filtrerServices(categorie.slug)"
            [class]="categorieActive === categorie.slug ? 'btn-primary' : 'btn-secondary'"
            class="px-6 py-2 rounded-full text-sm font-medium transition-all">
            {{ categorie.nom }}
          </button>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of servicesFiltres; trackBy: trackByServiceId" 
               class="card p-6 animate-on-scroll hover:scale-105 transition-all duration-300"
               [attr.aria-label]="'Service: ' + service.nom">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center" aria-hidden="true">
                <span class="text-2xl">{{ service.icone }}</span>
              </div>
              <span 
                [class]="service.disponible ? 'status-success' : 'status-warning'"
                class="status-indicator"
                [attr.aria-label]="service.disponible ? 'Service disponible' : 'Service bientôt disponible'">
                {{ service.disponible ? 'Disponible' : 'Bientôt' }}
              </span>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ service.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 text-content">{{ service.description }}</p>
            
            <div class="flex items-center justify-between">
              <a [href]="service.url" 
                 [class]="service.disponible ? 'text-secondary-800 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-300' : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'"
                 class="font-medium inline-flex items-center"
                 [attr.aria-label]="service.disponible ? 'Accéder au service ' + service.nom : 'Service ' + service.nom + ' prochainement disponible'"
                 [attr.tabindex]="service.disponible ? 0 : -1">
                {{ service.disponible ? 'Accéder' : 'Prochainement' }}
                <svg *ngIf="service.disponible" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ service.tempsEstime || '5-10 min' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide d'utilisation -->
    <section class="section-padding bg-white dark:bg-gray-900" aria-label="Guide d'utilisation des services">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Comment utiliser nos services ?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-content">
            Suivez ces étapes simples pour accéder à nos services en ligne.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          <div *ngFor="let etape of etapesUtilisation; let i = index" 
               class="text-center animate-on-scroll"
               role="listitem">
            <div class="w-16 h-16 bg-primary-800 dark:bg-primary-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              {{ i + 1 }}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ etape.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-content">{{ etape.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section class="py-16 bg-primary-50 dark:bg-primary-900/20" aria-label="Support et aide">
      <div class="container-custom">
        <div class="card p-8 text-center animate-on-scroll">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Besoin d'aide ?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-content">
            Notre équipe support est disponible pour vous accompagner dans l'utilisation de nos services en ligne.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+22921300000" class="btn-primary" aria-label="Appeler le support au +229 21 30 00 00">
              📞 +229 21 30 00 00
            </a>
            <a href="mailto:support@travail.gouv.bj" class="btn-secondary" aria-label="Envoyer un email au support">
              ✉️ {{'support@travail.gouv.bj'}}
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements AfterViewInit {
  
  categorieActive = 'tous';
  
  categories = [
    { nom: 'Tous', slug: 'tous' },
    { nom: 'Emploi', slug: 'emploi' },
    { nom: 'Entreprise', slug: 'entreprise' },
    { nom: 'Fonction Publique', slug: 'fonction-publique' },
    { nom: 'Formation', slug: 'formation' }
  ];
  
  services: (Service & { categorie: string, tempsEstime?: string })[] = [
    {
      id: '1',
      nom: 'Demande d\'emploi en ligne',
      description: 'Inscrivez-vous sur notre plateforme et consultez les offres d\'emploi disponibles.',
      url: '#',
      icone: '💼',
      disponible: true,
      categorie: 'emploi',
      tempsEstime: '10 min'
    },
    {
      id: '2',
      nom: 'Dépôt de CV en ligne',
      description: 'Créez votre profil professionnel et téléchargez votre CV pour être visible des recruteurs.',
      url: '#',
      icone: '📄',
      disponible: true,
      categorie: 'emploi',
      tempsEstime: '15 min'
    },
    {
      id: '3',
      nom: 'Déclaration CNSS',
      description: 'Effectuez vos déclarations sociales mensuelles de manière dématérialisée.',
      url: '#',
      icone: '📊',
      disponible: true,
      categorie: 'entreprise',
      tempsEstime: '20 min'
    },
    {
      id: '4',
      nom: 'Registre du personnel',
      description: 'Tenez à jour le registre de votre personnel selon les obligations légales.',
      url: '#',
      icone: '👥',
      disponible: true,
      categorie: 'entreprise',
      tempsEstime: '5 min'
    },
    {
      id: '5',
      nom: 'Autorisation de travail étrangers',
      description: 'Demandez une autorisation de travail pour vos employés de nationalité étrangère.',
      url: '#',
      icone: '🌍',
      disponible: false,
      categorie: 'entreprise',
      tempsEstime: '30 min'
    },
    {
      id: '6',
      nom: 'Concours fonction publique',
      description: 'Inscrivez-vous aux concours de recrutement dans la fonction publique.',
      url: '#',
      icone: '🏛️',
      disponible: true,
      categorie: 'fonction-publique',
      tempsEstime: '25 min'
    },
    {
      id: '7',
      nom: 'Dossier administratif agent',
      description: 'Consultez et mettez à jour votre dossier administratif en tant qu\'agent public.',
      url: '#',
      icone: '📋',
      disponible: true,
      categorie: 'fonction-publique',
      tempsEstime: '10 min'
    },
    {
      id: '8',
      nom: 'Formation continue',
      description: 'Inscrivez-vous aux formations continues proposées par l\'administration.',
      url: '#',
      icone: '🎓',
      disponible: true,
      categorie: 'formation',
      tempsEstime: '15 min'
    },
    {
      id: '9',
      nom: 'Certification professionnelle',
      description: 'Obtenez une certification officielle de vos compétences professionnelles.',
      url: '#',
      icone: '🏆',
      disponible: false,
      categorie: 'formation',
      tempsEstime: '45 min'
    }
  ];
  
  servicesFiltres = [...this.services];
  
  etapesUtilisation = [
    {
      titre: 'Créez votre compte',
      description: 'Inscrivez-vous gratuitement avec votre adresse email et créez un mot de passe sécurisé.'
    },
    {
      titre: 'Sélectionnez votre service',
      description: 'Choisissez le service dont vous avez besoin parmi notre catalogue complet.'
    },
    {
      titre: 'Suivez le processus',
      description: 'Remplissez les formulaires en ligne et téléchargez vos documents si nécessaire.'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
  
  filtrerServices(categorie: string) {
    this.categorieActive = categorie;
    if (categorie === 'tous') {
      this.servicesFiltres = [...this.services];
    } else {
      this.servicesFiltres = this.services.filter(service => service.categorie === categorie);
    }
  }
  
  trackByServiceId(index: number, service: Service): string {
    return service.id;
  }
}