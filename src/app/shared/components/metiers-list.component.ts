import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-metiers-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div *ngFor="let metier of metiers" class="card p-6 hover:shadow-lg transition-all duration-300">
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
            <span class="text-2xl">{{ metier.icone }}</span>
          </div>
          <span class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
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
            <h4 class="font-semibold text-gray-900 dark:text-white text-sm mb-2">
              Compétences requises :
            </h4>
            <div class="flex flex-wrap gap-1">
              <span *ngFor="let competence of metier.competences.slice(0, 3)" class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs">
                {{ competence }}
              </span>
              <span *ngIf="metier.competences.length > 3" class="text-xs text-gray-500 dark:text-gray-400">
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
          <a [routerLink]="['/fiches-metiers', metier.id]" class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
            Détails
          </a>
        </div>
      </div>
    </div>
    <div *ngIf="metiers.length === 0" class="text-center py-16">
        <div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">ℹ️</span>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Aucun métier à afficher
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
            Il n'y a pas de fiches de métiers correspondant à cette structure pour le moment.
        </p>
    </div>
  `,
})
export class MetiersListComponent {
  @Input() metiers: any[] = [];
}