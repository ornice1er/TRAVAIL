import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';
import { Document } from '../../shared/models/actualite.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textes-lois',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-accent-700 to-accent-800 dark:from-accent-800 dark:to-accent-900 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Textes & Lois</h1>
          <p class="text-xl text-accent-100 dark:text-accent-200 max-w-3xl mx-auto">
            Consultez l'ensemble des textes juridiques, lois, décrets et arrêtés régissant le monde du travail au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Filtres -->
    <section class="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <!-- Filtres par type -->
          <div class="flex flex-wrap justify-center gap-4">
            <button
              *ngFor="let type of typesDocuments"
              (click)="filtrerDocuments(type.slug)"
              [class]="typeActif === type.slug ? 'btn-primary' : 'btn-secondary'"
              class="px-6 py-2 rounded-full text-sm font-medium transition-all">
              {{ type.nom }}
            </button>
          </div>
          <!-- Barre de recherche -->
          <div class="relative w-full md:w-auto">
            <input
              type="text"
              [(ngModel)]="termeRecherche"
              (ngModelChange)="appliquerFiltres()"
              placeholder="Rechercher par titre ou description..."
              class="form-input w-full md:w-72 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
            <svg class="w-5 h-5 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Documents -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="space-y-6">
          <div *ngFor="let document of documentsFiltres; trackBy: trackByDocumentId" 
               class="card p-6  hover:shadow-lg transition-all duration-300">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-3">
                  <span [class]="getTypeClass(document.type)" 
                        class="px-3 py-1 rounded-full text-xs font-medium mr-3">
                    {{ getTypeLabel(document.type) }}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ document.datePublication | date:'d MMMM yyyy':'fr' }}
                  </span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ document.titre }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ document.description }}</p>
                <div class="flex items-center space-x-4">
                  <a [href]="document.url" 
                     target="_blank"
                     class="text-accent-700 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 font-medium inline-flex items-center">
                    📄 Télécharger le PDF
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </a>
                  <button class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium inline-flex items-center">
                    🔗 Partager
                  </button>
                </div>
              </div>
              <div class="ml-6 text-center">
                <div class="w-16 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">📋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="flex justify-center mt-12 ">
          <div class="flex space-x-2">
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Précédent
            </button>
            <button class="px-4 py-2 bg-accent-700 dark:bg-accent-600 text-white rounded-lg">1</button>
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">2</button>
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">3</button>
            <button class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Aide juridique -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Besoin d'aide juridique ?</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Nos conseillers juridiques sont à votre disposition pour vous aider à comprendre 
              et appliquer la législation du travail.
            </p>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-4">
                  <span class="text-accent-700 dark:text-accent-400">📞</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Consultation téléphonique</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 12 34</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-4">
                  <span class="text-accent-700 dark:text-accent-400">✉️</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Consultation par email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'juridique@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-4">
                  <span class="text-accent-700 dark:text-accent-400">🏢</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Rendez-vous physique</p>
                  <p class="text-gray-600 dark:text-gray-300">Du lundi au vendredi, 8h-17h</p>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Consultation juridique" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>
  `
})
export class TextesLoisComponent implements AfterViewInit {
  
  typeActif = 'tous';
  termeRecherche = '';
  
  typesDocuments = [
    { nom: 'Tous', slug: 'tous' },
    { nom: 'Lois', slug: 'loi' },
    { nom: 'Décrets', slug: 'decret' },
    { nom: 'Arrêtés', slug: 'arrete' },
    { nom: 'Circulaires', slug: 'circulaire' }
  ];
  
  documents: Document[] = [
    {
      id: '1',
      titre: 'Code du Travail de la République du Bénin',
      description: 'Texte fondamental régissant les relations de travail, les droits et obligations des employeurs et travailleurs.',
      url: '#',
      type: 'loi',
      datePublication: new Date('2023-12-15')
    },
    {
      id: '2',
      titre: 'Décret portant application du Code du Travail',
      description: 'Modalités d\'application des dispositions du Code du Travail, procédures et sanctions.',
      url: '#',
      type: 'decret',
      datePublication: new Date('2023-11-20')
    },
    {
      id: '3',
      titre: 'Arrêté fixant le salaire minimum interprofessionnel garanti',
      description: 'Fixation du montant du SMIG applicable sur l\'ensemble du territoire national.',
      url: '#',
      type: 'arrete',
      datePublication: new Date('2024-01-01')
    },
    {
      id: '4',
      titre: 'Loi portant statut général de la fonction publique',
      description: 'Statut des fonctionnaires et agents contractuels de l\'État, droits et devoirs.',
      url: '#',
      type: 'loi',
      datePublication: new Date('2023-10-10')
    },
    {
      id: '5',
      titre: 'Circulaire relative aux congés payés',
      description: 'Instructions sur l\'application des dispositions relatives aux congés payés des travailleurs.',
      url: '#',
      type: 'circulaire',
      datePublication: new Date('2023-12-01')
    },
    {
      id: '6',
      titre: 'Décret sur la sécurité et santé au travail',
      description: 'Règlementation sur les mesures de prévention des risques professionnels.',
      url: '#',
      type: 'decret',
      datePublication: new Date('2023-09-15')
    }
  ];
  
  documentsFiltres = [...this.documents];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
  
  filtrerDocuments(type: string) {
    this.typeActif = type;
    this.appliquerFiltres();
  }

  appliquerFiltres() {
    let documents = [...this.documents];

    // Filtrage par type
    if (this.typeActif !== 'tous') {
      documents = documents.filter(doc => doc.type === this.typeActif);
    }

    // Filtrage par terme de recherche
    const terme = this.termeRecherche.toLowerCase().trim();
    if (terme) {
      documents = documents.filter(doc =>
        doc.titre.toLowerCase().includes(terme) ||
        doc.description.toLowerCase().includes(terme)
      );
    }

    this.documentsFiltres = documents;
  }
  
  getTypeClass(type: string): string {
    const classes = {
      'loi': 'bg-blue-100 text-blue-800',
      'decret': 'bg-green-100 text-green-800',
      'arrete': 'bg-yellow-100 text-yellow-800',
      'circulaire': 'bg-purple-100 text-purple-800'
    };
    return classes[type as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }
  
  getTypeLabel(type: string): string {
    const labels = {
      'loi': 'Loi',
      'decret': 'Décret',
      'arrete': 'Arrêté',
      'circulaire': 'Circulaire'
    };
    return labels[type as keyof typeof labels] || type;
  }
  
  trackByDocumentId(index: number, document: Document): string {
    return document.id;
  }
}