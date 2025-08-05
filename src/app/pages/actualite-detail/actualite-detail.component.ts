import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Actualite } from '../../shared/models/actualite.model';

@Component({
  selector: 'app-actualite-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-32 pb-16 bg-white dark:bg-gray-900" *ngIf="actualite">
      <div class="container-custom">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <a routerLink="/actualites" class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 inline-flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour aux actualités
          </a>
        </nav>
        
        <!-- Article -->
        <article class="max-w-4xl mx-auto">
          <!-- En-tête -->
          <header class="mb-8">
            <div class="flex items-center mb-4">
              <span class="bg-primary-800 dark:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium mr-4">
                {{ actualite.categorie }}
              </span>
              <span class="text-gray-500 dark:text-gray-400">{{ actualite.datePublication | date:'d MMMM yyyy':'fr' }}</span>
            </div>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {{ actualite.titre }}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{{ actualite.resume }}</p>
          </header>
          
          <!-- Image -->
          <div class="mb-8">
            <img [src]="actualite.imageUrl" 
                 [alt]="actualite.titre" 
                 class="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg">
          </div>
          
          <!-- Contenu -->
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Le Ministère du Travail et de la Fonction Publique de la République du Bénin franchit une étape 
              majeure dans sa transformation numérique avec le lancement officiel de son nouveau portail en ligne 
              dédié à l'emploi et aux services administratifs.
            </p>
            
            <h2>Une plateforme révolutionnaire</h2>
            <p>
              Cette nouvelle plateforme digitale représente un investissement stratégique de plus de 2 milliards 
              de FCFA dans la modernisation des services publics. Elle permettra aux citoyens béninois d'accéder 
              facilement à une gamme complète de services en ligne, 24h/24 et 7j/7.
            </p>
            
            <h3>Fonctionnalités principales</h3>
            <ul>
              <li>Recherche d'emploi personnalisée avec matching intelligent</li>
              <li>Dépôt de CV et gestion de profil professionnel</li>
              <li>Suivi des candidatures en temps réel</li>
              <li>Services administratifs dématérialisés</li>
              <li>Formation continue et certification professionnelle</li>
            </ul>
            
            <h2>Impact attendu</h2>
            <p>
              Selon les projections du Ministère, cette plateforme devrait permettre de réduire le délai 
              moyen de recherche d'emploi de 30% et d'améliorer significativement l'efficacité des processus 
              administratifs. Plus de 500 000 utilisateurs sont attendus dans les 12 premiers mois.
            </p>
            
            <blockquote>
              "Cette initiative s'inscrit parfaitement dans la vision du gouvernement de faire du Bénin 
              un hub numérique en Afrique de l'Ouest. Nous mettons la technologie au service de nos 
              citoyens pour leur faciliter l'accès à l'emploi."
              <cite>- Dr. Adidjatou MATHYS, Ministre du Travail</cite>
            </blockquote>
          </div>
          
          <!-- Tags -->
          <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Mots-clés :</h4>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tag of actualite.tags" 
                    class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                #{{ tag }}
              </span>
            </div>
          </div>
          
          <!-- Partage -->
          <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Partager cet article :</h4>
            <div class="flex space-x-4">
              <button class="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span>Twitter</span>
              </button>
              <button class="flex items-center space-x-2 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                <span>Facebook</span>
              </button>
              <button class="flex items-center space-x-2 text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.9v6.2h.02z"/>
                </svg>
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
    
    <!-- Articles similaires -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800" *ngIf="actualite">
      <div class="container-custom">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Articles similaires</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let article of articlesSimilaires" class="card overflow-hidden">
            <div class="h-48 overflow-hidden">
              <img [src]="article.imageUrl" 
                   [alt]="article.titre" 
                   class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ article.datePublication | date:'d MMM yyyy':'fr' }}</div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">{{ article.titre }}</h4>
              <a [routerLink]="['/actualites', article.id]" 
                 class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium">
                Lire la suite →
              </a>
            </div>
          </div>
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
  `]
})
export class ActualiteDetailComponent implements OnInit {
  actualite: Actualite | null = null;
  
  articlesSimilaires: Actualite[] = [
    {
      id: '2',
      titre: 'Augmentation du salaire minimum interprofessionnel',
      resume: 'Le gouvernement annonce une revalorisation du SMIG.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      datePublication: new Date('2024-01-10'),
      auteur: 'Direction de la Communication',
      categorie: 'Réglementation',
      tags: ['salaire', 'SMIG']
    },
    {
      id: '3',
      titre: 'Programme de formation pour 10 000 jeunes',
      resume: 'Lancement d\'un vaste programme de formation professionnelle.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      datePublication: new Date('2024-01-05'),
      auteur: 'ANPE',
      categorie: 'Formation',
      tags: ['jeunes', 'formation']
    },
    {
      id: '4',
      titre: 'Forum national sur l\'emploi des jeunes',
      resume: 'Organisation du premier forum national dédié à l\'emploi des jeunes.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400',
      datePublication: new Date('2023-12-20'),
      auteur: 'Cabinet du Ministre',
      categorie: 'Événements',
      tags: ['forum', 'jeunes']
    }
  ];
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Simuler la récupération de l'actualité par ID
    this.actualite = {
      id: '1',
      titre: 'Lancement du nouveau portail numérique de l\'emploi',
      resume: 'Le Ministère du Travail dévoile sa nouvelle plateforme digitale révolutionnaire pour faciliter la recherche d\'emploi et les démarches administratives des entreprises au Bénin.',
      contenu: '',
      imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200',
      datePublication: new Date('2024-01-15'),
      auteur: 'Ministère du Travail',
      categorie: 'Digital',
      tags: ['emploi', 'numérique', 'innovation', 'plateforme', 'services']
    };
  }
}