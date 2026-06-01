import { Component, AfterViewInit, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationService } from "../../../../../shared/services/animation.service";
import { PublicService } from "../../../../../core/services/public.service";
import { ConfigService } from "../../../../../core/utils/config-service";

@Component({
  selector: "app-direction-budget",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Direction Générale du Budget
          </h1>
          <p
            class="text-lg sm:text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto"
          >
            L'organe chargé de la stratégie des finances publiques et du pilotage
            des investissements publics de l'État.
          </p>
        </div>
      </div>
    </div>

    <!-- Mission & Attribution avec photo du responsable -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <!-- Responsable -->
          <div>
            <div class="relative">
              <img
                [src]="getLink('structures/respos', structure?.photo_responsable)"
                alt="{{ structure?.name_responsable }} - {{ structure?.fonction }}"
                class="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                onerror="this.style.display='none'"
              />
            </div>
            <div class="mt-6 text-center">
              <h3
                class="text-xl font-bold text-primary-800 dark:text-primary-400 mb-2"
              >
                {{ structure?.name_responsable }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ structure?.fonction }}
              </p>
            </div>
          </div>

          <!-- Mission & Attributions -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Mission &amp; Attributions
            </h2>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Mission
            </h3>
            <div
              class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed rich-content"
              [innerHTML]="aof?.aof?.mission || structure?.vision"
            ></div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Attributions
            </h3>
            <div
              class="text-gray-700 dark:text-gray-300 mb-4 rich-content"
              [innerHTML]="aof?.aof?.attribution || structure?.responsable_text"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Directions & Services -->
    <section
      class="section-padding bg-gray-50 dark:bg-gray-800"
      *ngIf="directions?.length"
    >
      <div class="container-custom">
        <div class="text-center mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Directions &amp; Services
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Les directions opérationnelles de la Direction Générale du Budget
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let direction of directions"
            class="card p-6 flex items-start gap-4"
          >
            <div
              class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"
            >
              <span class="text-sm font-bold text-primary-700 dark:text-primary-400">
                {{ direction?.office }}
              </span>
            </div>
            <p class="text-gray-800 dark:text-gray-200 font-medium leading-snug">
              {{ direction?.name }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto">
          <div class="card p-6 sm:p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact
            </h3>
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{ structure?.phone || "+229 21 30 09 07" }}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{ structure?.email || "contact@budgetbenin.bj" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class DirectionBudgetComponent implements OnInit, AfterViewInit {
  structure: any;
  aof: any;
  directions: any[] = [];

  constructor(
    private animationService: AnimationService,
    private publicService: PublicService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.publicService.getDGB().subscribe((res: any) => {
      this.structure = res.data?.structure;
      this.aof = res.data?.aof;
      this.directions = res.data?.structure?.teams2 ?? [];
    });
  }

  getLink(dir: any, photo: any) {
    return `${ConfigService.toFile("storage")}/${dir}/${photo}`;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}
