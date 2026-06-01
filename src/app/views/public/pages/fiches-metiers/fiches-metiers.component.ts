import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AnimationService } from "../../../../shared/services/animation.service";
import { FormsModule } from "@angular/forms";
import {
  metiers,
  structures,
  thematiques,
} from "../../../../shared/models/datas";
import { MetiersListComponent } from "../../../../shared/components/metiers-list.component";

@Component({
  selector: "app-fiches-metiers",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MetiersListComponent],
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
            structures du Ministère du Budget et de la Fonction Publique
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
        <app-metiers-list [metiers]="metiersFilters"></app-metiers-list>
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

    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-6">Rejoignez-nous</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Le Ministère du Budget et de la Fonction Publique offre de
            nombreuses opportunités de carrière pour contribuer au développement
            du Bénin.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              routerLink="/communiques"
              [queryParams]="{ nature: 'Concours' }"
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
}