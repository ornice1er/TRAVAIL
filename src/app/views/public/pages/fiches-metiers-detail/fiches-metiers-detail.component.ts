import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AnimationService } from '../../../../shared/services/animation.service';
import { metiers } from '../../../../shared/models/datas';

@Component({
  selector: 'app-fiches-metiers-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="metier">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
        <div class="container-custom">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">{{ metier.titre }}</h1>
            <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">{{ metier.structure }}</p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <section class="section-padding bg-white dark:bg-gray-900">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left Column -->
            <div class="lg:col-span-2">
              <div class="card p-6">
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Description du métier</h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">{{ metier.description }}</p>

                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Missions principales</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  <li *ngFor="let mission of metier.missions">{{ mission }}</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Compétences requises</h3>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let competence of metier.competences" class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {{ competence }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="lg:col-span-1">
              <div class="card p-6 sticky top-24">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Informations clés</h3>
                <div class="space-y-4">
                  <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Niveau Requis</span>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ metier.niveauRequis }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Expérience</span>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ metier.experience }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Structure</span>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ metier.structure }}</p>
                  </div>
                </div>
                <div class="mt-6">
                  <a [routerLink]="['/fiches-metiers']" class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
                    &larr; Retour à la liste
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Loading or Not Found -->
    <div *ngIf="!metier" class="text-center py-16">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Métier non trouvé</h3>
        <p class="text-gray-600 dark:text-gray-300">Le métier que vous cherchez n'existe pas ou a été déplacé.</p>
    </div>
  `,
})
export class FichesMetiersDetailComponent implements OnInit, AfterViewInit {
  metier: any;

  constructor(
    private route: ActivatedRoute,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    const metierId = this.route.snapshot.paramMap.get('id');
    this.metier = metiers.find(m => m.id === metierId);
  }

  ngAfterViewInit() {
    this.animationService.initScrollAnimations();
  }
}