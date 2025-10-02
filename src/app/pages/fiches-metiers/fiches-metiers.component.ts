import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AnimationService } from "../../shared/services/animation.service";
import { FormsModule } from "@angular/forms";
import {
  metiers,
  structures,
  thematiques,
} from "../../shared/models/datas";

@Component({
  selector: "app-fiches-metiers",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Fiches Métiers</h1>
          <p
            class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto"
          >
            Découvrez tous les métiers et opportunités de carrière dans les
            structures du Ministère du Travail et de la Fonction Publique
          </p>
        </div>
      </div>
    </div>

    <!-- Filtres -->
    <section
      class="py-8 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex flex-col gap-4 w-full">
            <!-- Filtres par thématique -->
            <div class="flex items-center gap-4">
              <span class="text-sm font-semibold">Thématiques:</span>
              <div class="flex flex-wrap gap-2">
                <button
                  (click)="filtrerParThematique('toutes')"
                  [class]="thematiqueActive === 'toutes' ? 'bg-primary-800 text-white' : 'bg-white hover:bg-gray-200 text-gray-700'"
                  class="px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm"
                >
                  Toutes
                </button>
                <button
                  *ngFor="let thematique of thematiques"
                  (click)="filtrerParThematique(thematique.id)"
                  [class]="thematiqueActive === thematique.id ? 'bg-primary-800 text-white' : 'bg-white hover:bg-gray-200 text-gray-700'"
                  class="px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm"
                >
                  {{ thematique.libelle }}
                </button>
              </div>
            </div>

            <!-- Filtres par structure -->
            <div class="flex items-center gap-4">
              <span class="text-sm font-semibold">Structures:</span>
              <div class="flex flex-wrap gap-2">
                <button
                  (click)="filtrerParStructure('toutes')"
                  [class]="structureActive === 'toutes' ? 'bg-primary-800 text-white' : 'bg-white hover:bg-gray-200 text-gray-700'"
                  class="px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm"
                >
                  Toutes
                </button>
                <button
                  *ngFor="let structure of structures"
                  (click)="filtrerParStructure(structure.id)"
                  [class]="structureActive === structure.id ? 'bg-primary-800 text-white' : 'bg-white hover:bg-gray-200 text-gray-700'"
                  class="px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm"
                >
                  {{ structure.sigle }}
                </button>
              </div>
            </div>
          </div>

          <!-- Barre de recherche -->
          <div class="relative w-full md:w-auto flex-shrink-0">
            <input
              type="text"
              [(ngModel)]="termeRecherche"
              (ngModelChange)="appliquerFiltres()"
              placeholder="Rechercher un métier..."
              class="form-input w-full md:w-72 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <svg
              class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Liste des fiches métiers -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let metier of metiersFilters; trackBy: trackByMetierId"
            class="card p-6 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center"
              >
                <span class="text-2xl">{{ metier.icone }}</span>
              </div>
              <span
                class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                {{ metier.structure }}
              </span>
            </div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ metier.titre }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              {{ metier.description }}
            </p>

            <div class="space-y-3 mb-6">
              <div>
                <h4
                  class="font-semibold text-gray-900 dark:text-white text-sm mb-2"
                >
                  Compétences requises :
                </h4>
                <div class="flex flex-wrap gap-1">
                  <span
                    *ngFor="let competence of metier.competences.slice(0, 3)"
                    class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs"
                  >
                    {{ competence }}
                  </span>
                  <span
                    *ngIf="metier.competences.length > 3"
                    class="text-xs text-gray-500 dark:text-gray-400"
                  >
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

            <div
              class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <!-- <button
                class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors opacity-50 cursor-not-allowed"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                Télécharger
              </button> -->
              <button
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 opacity-50 cursor-not-allowed"
              >
                Détails
              </button>
            </div>
          </div>
        </div>

        <!-- Message si aucun résultat -->
        <div *ngIf="metiersFilters.length === 0" class="text-center py-16">
          <div
            class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🔍</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Aucun métier trouvé
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Essayez de modifier vos critères de recherche.
          </p>
        </div>
      </div>
    </section>

    <!-- Informations complémentaires -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-6">Rejoignez-nous</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Le Ministère du Travail et de la Fonction Publique offre de
            nombreuses opportunités de carrière pour contribuer au développement
            du Bénin.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              routerLink="/actualites"
              class="btn-primary bg-white text-primary-800 hover:bg-gray-100"
            >
              Voir les concours
            </a>
            <a
              routerLink="/contact"
              class="btn-secondary border-white text-white hover:bg-white/10"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FichesMetiersComponent implements AfterViewInit {
  structureActive: any = "toutes";
  thematiqueActive: any = "toutes";
  termeRecherche = "";

  thematiques = thematiques;
  structures = structures;
  metiers = metiers;

  metiersFilters = [...this.metiers];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }

  filtrerParStructure(structureId: any) {
    this.structureActive = structureId;
    this.appliquerFiltres();
  }

  filtrerParThematique(thematiqueId: any) {
    this.thematiqueActive = thematiqueId;
    this.appliquerFiltres();
  }

  appliquerFiltres() {
    let metiersResultat = [...this.metiers];

    // Filtrage par thématique
    if (this.thematiqueActive !== "toutes") {
      metiersResultat = metiersResultat.filter(
        (m) => m.thematiqueId === this.thematiqueActive
      );
    }

    // Filtrage par structure
    if (this.structureActive !== "toutes") {
      metiersResultat = metiersResultat.filter(
        (m) => m.structureId === this.structureActive
      );
    }

    // Filtrage par terme de recherche
    const terme = this.termeRecherche.toLowerCase().trim();
    if (terme) {
      metiersResultat = metiersResultat.filter(
        (m) =>
          m.titre.toLowerCase().includes(terme) ||
          m.description.toLowerCase().includes(terme) ||
          m.competences.some((c) => c.toLowerCase().includes(terme))
      );
    }

    this.metiersFilters = metiersResultat;
  }

  trackByMetierId(index: number, metier: any): string {
    return metier.id;
  }
}