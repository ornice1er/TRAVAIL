import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimationService } from '../../shared/services/animation.service';
import { Actualite } from '../../shared/models/actualite.model';

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Actualités</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles et initiatives du Ministère du Travail.
          </p>
        </div>
      </div>
    </div>

    <!-- Actualité à la une -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="">
          <div class="card overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="relative h-64 lg:h-auto">
                <img [src]="actualiteUne.imageUrl" 
                     [alt]="actualiteUne.titre" 
                     class="w-full h-full object-cover"
                     loading="lazy">
                <div class="absolute top-4 left-4">
                  <span class="bg-primary-800 dark:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium" aria-label="Article à la une">
                    À la une
                  </span>
                </div>
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {{ actualiteUne.datePublication | date:'d MMMM yyyy':'fr' }}
                </div>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ actualiteUne.titre }}</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 text-content">{{ actualiteUne.resume }}</p>
                <a [routerLink]="['/actualites', actualiteUne.id]" 
                   class="btn-primary w-fit"
                   [attr.aria-label]="'Lire article complet: ' + actualiteUne.titre">
                  Lire l'article complet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filtres -->
    <section class="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-label="Filtres par catégorie">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4 " role="group" aria-label="Filtrer les actualités par catégorie">
          <button 
            *ngFor="let categorie of categories"
            (click)="filtrerActualites(categorie.slug)"
            [class]="categorieActive === categorie.slug ? 'btn-primary' : 'btn-secondary'"
            class="px-6 py-2 rounded-full text-sm font-medium transition-all"
            [attr.aria-pressed]="categorieActive === categorie.slug"
            [attr.aria-label]="'Filtrer par ' + categorie.nom">
            {{ categorie.nom }}
          </button>
        </div>
      </div>
    </section>

    <!-- Liste des actualités -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800" aria-label="Liste des actualités">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          <article *ngFor="let actualite of actualitesFiltrees; trackBy: trackByActualiteId" 
                   class="card overflow-hidden  hover:shadow-lg transition-all duration-300"
                   role="listitem">
            <div class="relative h-48 overflow-hidden">
              <img [src]="actualite.imageUrl" 
                   [alt]="actualite.titre" 
                   class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                   loading="lazy">
              <div class="absolute top-4 left-4">
                <span class="bg-primary-800 dark:bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-medium" [attr.aria-label]="'Catégorie: ' + actualite.categorie">
                  {{ actualite.categorie }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {{ actualite.datePublication | date:'d MMMM yyyy':'fr' }}
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">{{ actualite.titre }}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-content">{{ actualite.resume }}</p>
              <div class="flex items-center justify-between">
                <a [routerLink]="['/actualites', actualite.id]" 
                   class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium inline-flex items-center"
                   [attr.aria-label]="'Lire article: ' + actualite.titre">
                  Lire la suite
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
                <div class="flex space-x-1" aria-label="Tags de l'article">
                  <span *ngFor="let tag of actualite.tags.slice(0, 2)" 
                        class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        [title]="'Tag: ' + tag">
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Pagination -->
        <nav class="flex justify-center mt-12 " aria-label="Navigation des pages">
          <div class="flex space-x-2" role="group">
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" aria-label="Page précédente">
              Précédent
            </button>
            <button class="px-4 py-2 bg-primary-800 dark:bg-primary-700 text-white rounded-lg" aria-current="page" aria-label="Page 1, page actuelle">1</button>
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" aria-label="Aller à la page 2">2</button>
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" aria-label="Aller à la page 3">3</button>
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" aria-label="Page suivante">
              Suivant
            </button>
          </div>
        </nav>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="card p-8 lg:p-12 text-center ">
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Restez informé de nos actualités
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-content">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités 
            et informations importantes directement dans votre boîte mail.
          </p>
          <form class="max-w-md mx-auto" aria-label="Inscription à la newsletter">
            <div class="flex gap-3">
              <label for="newsletter-email" class="sr-only">Adresse email pour la newsletter</label>
              <input type="email" 
                     id="newsletter-email"
                     placeholder="Votre adresse email"
                     required
                     class="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <button type="submit" class="btn-primary px-6 py-3 whitespace-nowrap" aria-label="S'inscrire à la newsletter">
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ActualitesComponent implements AfterViewInit {
  
  categorieActive = 'toutes';
  
  categories = [
    { nom: 'Toutes', slug: 'toutes' },
    { nom: 'Digital', slug: 'digital' },
    { nom: 'Réglementation', slug: 'reglementation' },
    { nom: 'Formation', slug: 'formation' },
    { nom: 'Événements', slug: 'evenements' }
  ];
  
  actualiteUne: Actualite = {
    id: '1',
    titre: 'Lancement du nouveau portail numérique de l\'emploi',
    resume: 'Le Ministère du Travail dévoile sa nouvelle plateforme digitale révolutionnaire pour faciliter la recherche d\'emploi et les démarches administratives des entreprises au Bénin.',
    contenu: '',
    imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    datePublication: new Date('2024-01-15'),
    auteur: 'Ministère du Travail',
    categorie: 'Digital',
    tags: ['emploi', 'numérique', 'innovation']
  };
  
  actualites: Actualite[] = [
    {
      id: '2',
      titre: 'Augmentation du salaire minimum interprofessionnel',
      resume: 'Le gouvernement annonce une revalorisation du SMIG à partir du 1er mars 2024, bénéficiant à plus de 500 000 travailleurs.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      datePublication: new Date('2024-01-10'),
      auteur: 'Direction de la Communication',
      categorie: 'Réglementation',
      tags: ['salaire', 'SMIG', 'travailleurs']
    },
    {
      id: '3',
      titre: 'Programme de formation pour 10 000 jeunes',
      resume: 'Lancement d\'un vaste programme de formation professionnelle destiné aux jeunes diplômés sans emploi, en partenariat avec le secteur privé.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      datePublication: new Date('2024-01-05'),
      auteur: 'ANPE',
      categorie: 'Formation',
      tags: ['jeunes', 'formation', 'emploi']
    },
    {
      id: '4',
      titre: 'Forum national sur l\'emploi des jeunes',
      resume: 'Organisation du premier forum national dédié à l\'emploi des jeunes, réunissant entreprises, institutions et jeunes demandeurs d\'emploi.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800',
      datePublication: new Date('2023-12-20'),
      auteur: 'Cabinet du Ministre',
      categorie: 'Événements',
      tags: ['forum', 'jeunes', 'emploi', 'entreprises']
    },
    {
      id: '5',
      titre: 'Nouvelle réglementation sur le télétravail',
      resume: 'Adoption d\'un cadre juridique pour encadrer le télétravail au Bénin, offrant plus de flexibilité aux travailleurs et employeurs.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800',
      datePublication: new Date('2023-12-15'),
      auteur: 'Direction Générale du Travail',
      categorie: 'Réglementation',
      tags: ['télétravail', 'réglementation', 'flexibilité']
    },
    {
      id: '6',
      titre: 'Digitalisation de la fonction publique',
      resume: 'Lancement d\'un projet ambitieux de digitalisation des services de la fonction publique pour améliorer l\'efficacité administrative.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      datePublication: new Date('2023-12-10'),
      auteur: 'Direction Générale de la Fonction Publique',
      categorie: 'Digital',
      tags: ['digitalisation', 'fonction publique', 'efficacité']
    }
  ];
  
  actualitesFiltrees = [...this.actualites];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
  
  filtrerActualites(categorie: string) {
    this.categorieActive = categorie;
    if (categorie === 'toutes') {
      this.actualitesFiltrees = [...this.actualites];
    } else {
      this.actualitesFiltrees = this.actualites.filter(actualite => 
        actualite.categorie.toLowerCase() === categorie.toLowerCase()
      );
    }
  }
  
  trackByActualiteId(index: number, actualite: Actualite): string {
    return actualite.id;
  }
}