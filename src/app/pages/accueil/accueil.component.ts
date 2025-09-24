import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AnimationService } from "../../shared/services/animation.service";

@Component({
  selector: "app-accueil",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Slider Hero Section -->
    <section class="relative h-screen overflow-hidden" role="banner" aria-label="Slider des communiqués du Ministère du Travail">
      <div class="relative h-full">
        <!-- Slides -->
        <div class="absolute inset-0 transition-transform duration-700 ease-in-out" 
             [style.transform]="'translateX(' + (-currentSlide * 100) + '%)'">
          <div class="flex h-full">
            <div *ngFor="let communique of communiques; let i = index" 
                 class="w-full h-full flex-shrink-0 relative">
              <div class="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900">
                <div class="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
              </div>
              <div class="relative h-full flex items-center">
                <div class="container-custom">
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="text-white">
                      <div class="inline-block bg-white/20 dark:bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        {{ communique.type }}
                      </div>
                      <h1 class="text-3xl lg:text-3xl font-bold mb-6 leading-tight">
                        {{ communique.titre }}
                      </h1>
                      <p class="text-lg lg:text-xl mb-8 text-white/90 font-light">
                        {{ communique.description }}
                      </p>
                      <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#" class="btn-primary bg-white text-primary-800 hover:bg-gray-100">
                          Lire le communiqué
                        </a>
                        <!-- <a routerLink="/contact" class="btn-secondary border-white text-white hover:bg-white/10">
                          Nous contacter
                        </a> -->
                      </div>
                      <!-- <div class="mt-6 text-sm text-white/80">
                        <span class="mr-4">📅 {{ communique.date }}</span>
                        <span>🏛️ {{ communique.source }}</span>
                      </div> -->
                    </div>
                    <div class="hidden lg:block">
                      <img [src]="communique.image" 
                           [alt]="communique.titre" 
                           class="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                           loading="lazy">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation arrows -->
        <button (click)="previousSlide()" 
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
                aria-label="Slide précédent">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button (click)="nextSlide()" 
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
                aria-label="Slide suivant">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        
        <!-- Dots indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          <button *ngFor="let communique of communiques; let i = index"
                  (click)="goToSlide(i)"
                  [class]="i === currentSlide ? 'bg-white' : 'bg-white/50'"
                  class="w-3 h-3 rounded-full transition-all hover:bg-white/80"
                  [attr.aria-label]="'Aller au slide ' + (i + 1)">
          </button>
        </div>
      </div>
    </section>

    <!-- Chiffres clés animés -->
    <section class="py-16 bg-primary-800 dark:bg-primary-900 text-white" aria-label="Statistiques du ministère">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Le Ministère en chiffres</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">Notre impact sur l'emploi et la fonction publique</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let stat of statistiques; let i = index" 
               class="text-center " 
               role="group"
               [attr.aria-label]="stat.libelle + ': ' + stat.valeur">
            <div class="text-4xl lg:text-5xl font-bold mb-2 text-secondary-400 dark:text-secondary-300"
                 #statElement
                 [attr.data-target]="stat.targetValue"
                 [attr.aria-label]="stat.valeur">
              {{ stat.displayValue }}
            </div>
            <div class="text-primary-100 dark:text-primary-200 text-lg">{{ stat.libelle }}</div>
            <div class="text-primary-200 dark:text-primary-300 text-sm mt-2">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Accès rapide aux services essentiels -->
    <section class="py-12 bg-white dark:bg-gray-900" aria-label="Accès rapide aux services">
      <div class="container-custom">
        <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Accès rapide
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="/actualites" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Communiqués">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">📢</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Communiqués</span>
          </a>
          
          <a href="/services" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Concours publics">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary-200 dark:group-hover:bg-secondary-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">🏛️</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Concours</span>
          </a>
          
          <a href="/services" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Démarches Administratives">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">📋</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Démarches Administratives</span>
          </a>
          
          <a href="/contact" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Nous contacter">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">❓</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Préoccupations</span>
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
          <a href="#" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Suivi des réformes administratives et institutionnelles">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">🔄</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Suivi des réformes administratives et institutionnelles<br><small class="text-xs text-gray-500">(Espace public sur la plateforme eReformes)</small></span>
          </a>
        </div>
      </div>
    </section>

    <!-- Section Communiqués -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800" aria-label="Communiqués officiels">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Communiqués
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Retrouvez tous les communiqués officiels du Ministère du Travail et de la Fonction Publique
          </p>
        </div>

        <!-- Onglets -->
        <div class="flex justify-center mb-8">
          <div class="bg-white dark:bg-gray-700 rounded-lg p-1 shadow-sm">
            <button
              (click)="activeTabCommunique = 'concours'"
              [class]="activeTabCommunique === 'concours' ? 'bg-primary-800 text-white' : 'text-gray-700 dark:text-gray-300'"
              class="px-6 py-3 rounded-md font-medium transition-all duration-200">
              Communiqués Concours
            </button>
            <button
              (click)="activeTabCommunique = 'autres'"
              [class]="activeTabCommunique === 'autres' ? 'bg-primary-800 text-white' : 'text-gray-700 dark:text-gray-300'"
              class="px-6 py-3 rounded-md font-medium transition-all duration-200">
              Autres Communiqués
            </button>
          </div>
        </div>

        <!-- Contenu des onglets -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Communiqués Concours -->
          <div *ngIf="activeTabCommunique === 'concours'" class="col-span-full">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div *ngFor="let communique of communiquesConcours" class="card p-6 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                  <span class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                    CONCOURS
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">{{ communique.date }}</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {{ communique.titre }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                  {{ communique.description }}
                </p>
                <a href="#" class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium text-sm">
                  Lire le communiqué →
                </a>
              </div>
            </div>
          </div>

          <!-- Autres Communiqués -->
          <div *ngIf="activeTabCommunique === 'autres'" class="col-span-full">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div *ngFor="let communique of autresCommuniques" class="card p-6 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                  <span class="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    {{ communique.type }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">{{ communique.date }}</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {{ communique.titre }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                  {{ communique.description }}
                </p>
                <a href="#" class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium text-sm">
                  Lire le communiqué →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <a href="/actualites" class="btn-secondary">
            Voir tous les communiqués
          </a>
        </div>
      </div>
    </section>

    <!-- Section Statistiques -->
    <!-- <section
      class="section-padding bg-primary-800 dark:bg-primary-900 text-white"
      aria-label="Statistiques du ministère"
    >
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            Le Ministère en chiffres
          </h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            Notre impact sur l'emploi et la fonction publique
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            *ngFor="let stat of statistiques"
            class="text-center "
            role="group"
            [attr.aria-label]="stat.libelle + ': ' + stat.valeur"
          >
            <div
              class="text-4xl lg:text-5xl font-bold mb-2 text-secondary-400 dark:text-secondary-300"
              #statElement
              [attr.aria-label]="stat.valeur"
            >
              {{ stat.valeur }}
            </div>
            <div class="text-primary-100 dark:text-primary-200 text-lg">
              {{ stat.libelle }}
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Services en ligne -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800" aria-label="Services en ligne disponibles">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Services en ligne
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simplifiez vos démarches administratives grâce à nos services
            numériques accessibles 24h/24.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          <div
            *ngFor="let service of servicesEnLigne"
            class="card p-6 text-center  hover:scale-105 transition-all duration-300"
            role="listitem"
          >
            <div
              class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mx-auto mb-6"
              aria-hidden="true"
            >
              <span class="text-3xl">{{ service.icone }}</span>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              {{ service.nom }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ service.description }}
            </p>
            <a [href]="service.url" class="btn-primary text-sm" [attr.aria-label]="'Accéder au service: ' + service.nom">
              Accéder au service
            </a>
          </div>
        </div>

        <div class="text-center mt-12 ">
          <a routerLink="/services" class="btn-secondary" aria-label="Voir tous nos services disponibles">
            Voir tous nos services
          </a>
        </div>
      </div>
    </section>

    <!-- Section Événements déclencheurs -->
    <section class="section-padding bg-white dark:bg-gray-900" aria-label="Événements déclencheurs">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Événements déclencheurs
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trouvez rapidement les services et informations selon votre situation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let evenement of evenementsDeClencheurs" class="card p-8 hover:shadow-lg transition-all duration-300">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-4xl">{{ evenement.icone }}</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {{ evenement.titre }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
                {{ evenement.description }}
              </p>
            </div>
            
            <div class="space-y-3">
              <div *ngFor="let service of evenement.services" class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <span class="text-sm font-medium text-gray-900 dark:text-white">{{ service.nom }}</span>
                <div class="flex items-center space-x-2">
                  <span [class]="service.type === 'FM' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' : 
                                service.type === 'eServices' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                service.type === 'Plateforme' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                                'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'"
                        class="px-2 py-1 rounded-full text-xs font-medium">
                    {{ service.type }}
                  </span>
                  <a [href]="service.url" 
                     [class]="service.disponible ? 'text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300' : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'"
                     class="text-xs font-medium"
                     [attr.aria-label]="service.disponible ? 'Accéder à ' + service.nom : service.nom + ' prochainement disponible'">
                    {{ service.disponible ? 'Accéder' : 'Bientôt' }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Actualités -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> -->
          <!-- Actualités principales -->
          <!-- <div class=""> -->
            <div
              class="flex items-center justify-between mb-8 "
            >
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                Actualités
              </h2>
              <a
                routerLink="/actualites"
                class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium"
              >
                Voir toutes les actualités →
              </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-6">
              <article
                *ngFor="let actualite of actualitesRecentes"
                class="card overflow-hidden  hover:shadow-lg transition-all duration-300"
              >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div class="md:col-span-1">
                    <img
                      [src]="actualite.imageUrl"
                      [alt]="actualite.titre"
                      class="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div class="md:col-span-2 p-6">
                    <div class="flex items-center mb-3">
                      <span
                        class="bg-primary-800 dark:bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-medium mr-3"
                      >
                        {{ actualite.categorie }}
                      </span>
                      <span class="text-sm text-gray-500 dark:text-gray-400">
                        {{
                          actualite.datePublication
                            | date : "d MMMM yyyy" : "fr"
                        }}
                      </span>
                    </div>
                    <h3
                      class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                    >
                      {{ actualite.titre }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                      {{ actualite.resume }}
                    </p>
                    <a
                      [routerLink]="['/actualites', actualite.id]"
                      class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium"
                    >
                      Lire la suite →
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- Sidebar Communiqués -->
          <!-- <div class="lg:col-span-1">
            <div class="">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Communiqués
              </h3>
              <div class="space-y-6">
                <div
                  *ngFor="let communique of communiquesSidebar"
                  class="card p-6 hover:shadow-md transition-all duration-300"
                >
                  <div class="flex items-start justify-between mb-3">
                    <span
                      class="bg-yellow-400 dark:bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {{ communique.type }}
                    </span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{
                      communique.date
                    }}</span>
                  </div>
                  <h4
                    class="text-sm font-semibold text-gray-900 dark:text-white mb-3 line-clamp-3"
                  >
                    {{ communique.titre }}
                  </h4>
                  <a
                    href="#"
                    class="text-xs text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium"
                  >
                    Lire la suite →
                  </a>
                </div>
              </div>

              <div class="mt-8">
                <a href="#" class="btn-secondary w-full text-center">
                  Voir tous les communiqués
                </a>
              </div>
            </div>
          </div> -->
        <!-- </div>
      </div> -->
    </section>

    <!-- Section Fiches métiers -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800" aria-label="Fiches métiers par structure">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Fiches Métiers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les métiers et opportunités de carrière dans nos différentes structures
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let structure of structuresMetiers" class="card p-6 hover:shadow-lg transition-all duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl">{{ structure.icone }}</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ structure.nom }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {{ structure.description }}
              </p>
            </div>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Métiers principaux :</h4>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let metier of structure.metiersPhares" 
                      class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs">
                  {{ metier }}
                </span>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ structure.nombreMetiers }} métiers
              </span>
              <a [routerLink]="structure.lienDetail" 
                 class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium text-sm">
                Découvrir →
              </a>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a routerLink="/fiches-metiers" class="btn-secondary">
            Voir toutes les fiches métiers
          </a>
        </div>
      </div>
    </section>

    <!-- Appel à l'action -->
    <section
      class="section-padding bg-gradient-to-r from-secondary-800 to-secondary-900 text-white"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            Une question ? Besoin d'aide ?
          </h2>
          <p class="text-xl mb-8 text-secondary-100 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour vous accompagner dans vos
            démarches administratives et répondre à toutes vos questions.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              routerLink="/contact"
              class="btn-primary bg-white text-secondary-800 hover:bg-gray-100"
            >
              Nous contacter
            </a>
            <a
              href="tel:+22921300000"
              class="btn-secondary border-white text-white hover:bg-white/10"
            >
              📞 +229 21 30 00 00
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Liens utiles -->
    <section
      class="section-padding bg-primary-800 dark:bg-primary-900 text-white"
    >
      <div class="container-custom">
        <div class="text-center mb-12 ">
          <div
            class="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <h2 class="text-2xl font-bold">Liens utiles</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            *ngFor="let lien of liensUtiles"
            class="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-between "
          >
            <span class="text-gray-900 dark:text-white font-medium">{{
              lien.nom
            }}</span>
            <button
              class="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
            >
              J'accède
            </button>
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [
    `
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `,
  ],
})
export class AccueilComponent implements OnInit, AfterViewInit, OnDestroy {
  currentSlide = 0;
  slideInterval: any;
  activeTabCommunique = 'concours';
  
  communiques = [
    {
      titre: "Session extraordinaire de la Commission Nationale de Concertation, de Consultation et de Négociations Collectives",
      description: "Le gouvernement et les partenaires sociaux évaluent les préparatifs pour une bonne rentrée scolaire 2025-2026",
      type: "COMMUNIQUÉ",
      date: "20 janvier 2024",
      // source: "Direction Générale de la Fonction Publique",
      image: "https://www.travail.gouv.bj/storage/actualites/big/session-extraordinaire-de-la-commission-nationale-de-concertation-de-consultation-et-de-negociations-collectives-big.JPG"
    },
    {
      titre: "Suivi de la mise en œuvre des projets du portefeuille « État de droit, démocratie, gouvernance et cohésion sociale »",
      description: "Le Bénin et le PNUD passent en revue les actions du premier semestre 2025",
      type: "COMMUNIQUÉ",
      date: "18 janvier 2024", 
      // source: "Direction Générale du Travail",
      image: "https://www.travail.gouv.bj/storage/actualites/big/suivi-de-la-mise-en-oeuvre-des-projets-du-portefeuille-etat-de-droit-democratie-gouvernance-et-cohesion-sociale-big.jpeg"
    },
    {
      titre: "Lutte contre les pires formes de travail des enfants dans la Donga",
      description: "Des enfants retirés et des auteurs poursuivis",
      type: "COMMUNIQUÉ",
      date: "15 janvier 2024",
      // source: "Secrétariat Général",
      image: "https://www.travail.gouv.bj/storage/actualites/big/lutte-contre-les-pires-formes-de-travail-des-enfants-dans-la-donga-big.jpeg"
    },
    {
      titre: "Renforcement des capacités des acteurs des Ressources humaines en matière de GRH basée sur les compétences",
      description: "Un pas vers une Administration publique performante au service de l'intérêt général",
      type: "COMMUNIQUÉ",
      date: "12 janvier 2024",
      // source: "Direction Générale du Travail",
      image: "https://www.travail.gouv.bj/storage/actualites/big/renforcement-des-capacites-des-acteurs-des-ressources-humaines-en-matiere-de-grh-basee-sur-les-competences-big.jpg"
    }
  ];
  
  communiquesConcours = [
    {
      titre: "Concours de recrutement de 500 Inspecteurs du Travail",
      description: "Ouverture des inscriptions pour le concours de recrutement d'Inspecteurs du Travail. Dossiers à déposer avant le 15 mars 2024.",
      date: "20 janvier 2024",
      type: "CONCOURS"
    },
    {
      titre: "Concours d'entrée à l'École Nationale d'Administration",
      description: "Recrutement de 200 élèves administrateurs pour la promotion 2024-2026. Inscription en ligne obligatoire.",
      date: "18 janvier 2024",
      type: "CONCOURS"
    },
    {
      titre: "Concours de recrutement de Conseillers en Emploi",
      description: "150 postes de Conseillers en Emploi à pourvoir dans les directions départementales. Niveau Bac+4 requis.",
      date: "15 janvier 2024",
      type: "CONCOURS"
    }
  ];

  autresCommuniques = [
    {
      titre: "Mise en place du nouveau système de gestion des carrières",
      description: "Le ministère annonce la mise en service d'un nouveau système informatisé pour la gestion des carrières des agents publics.",
      date: "22 janvier 2024",
      type: "INFORMATION"
    },
    {
      titre: "Suspension temporaire des services de visa de contrat",
      description: "En raison de la maintenance du système informatique, les services de visa de contrat seront suspendus du 25 au 27 janvier 2024.",
      date: "20 janvier 2024",
      type: "AVIS"
    },
    {
      titre: "Nouvelle réglementation sur le télétravail",
      description: "Publication du décret encadrant le télétravail dans l'administration publique béninoise. Entrée en vigueur le 1er février 2024.",
      date: "18 janvier 2024",
      type: "RÉGLEMENTATION"
    }
  ];

  evenementsDeClencheurs = [
    {
      titre: "JE VEUX SERVIR L'ÉTAT",
      description: "Vous souhaitez intégrer la fonction publique béninoise",
      icone: "🔍",
      services: [
        { nom: "Communiqués concours", type: "Communiqués", url: "/actualites", disponible: true },
        { nom: "Candidater pour un concours", type: "Plateforme", url: "#", disponible: false },
        { nom: "C'est quoi être fonctionnaire", type: "FM", url: "/fiches-metiers", disponible: true }
      ]
    },
    {
      titre: "JE SUIS FONCTIONNAIRE",
      description: "Vous êtes agent de l'État et cherchez des informations sur votre carrière",
      icone: "💼",
      services: [
        { nom: "Mon Espace Carrière", type: "WECHE", url: "#", disponible: false },
        { nom: "Éthique du fonctionnaire", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Formation Continue", type: "eServices", url: "/services", disponible: true },
        { nom: "Rémunération & Avantages", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Discipline et sanction", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Retraite", type: "FM", url: "/fiches-metiers", disponible: true }
      ]
    },
    {
      titre: "JE SUIS EMPLOYEUR PRIVÉ",
      description: "Vous dirigez une entreprise et avez des obligations légales",
      icone: "🏢",
      services: [
        { nom: "Déclarations Obligatoires", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Relations Sociales", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Sécurité au Travail", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Formation des Salariés", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Contentieux Social", type: "FM", url: "/fiches-metiers", disponible: true }
      ]
    },
    {
      titre: "JE SUIS EMPLOYÉ PRIVÉ",
      description: "Vous travaillez dans le secteur privé et voulez connaître vos droits",
      icone: "👨‍💼",
      services: [
        { nom: "Mes droits et obligations", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Sécurité sociale", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Résolution de conflits", type: "FM", url: "/fiches-metiers", disponible: true }
      ]
    },
    {
      titre: "JE SUIS ÉTUDIANT/JEUNE",
      description: "Vous êtes étudiant ou jeune diplômé en recherche d'opportunités",
      icone: "🎓",
      services: [
        { nom: "Stages", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Premier emploi", type: "FM", url: "/fiches-metiers", disponible: true },
        { nom: "Formation professionnelle", type: "eServices", url: "/services", disponible: true },
        { nom: "Entrepreneuriat", type: "FM", url: "/fiches-metiers", disponible: true }
      ]
    }
  ];

  structuresMetiers = [
    {
      nom: "Direction Générale du Travail",
      description: "Régulation du marché du travail et promotion de l'emploi",
      icone: "💼",
      nombreMetiers: 8,
      metiersPhares: ["Inspecteur du Travail", "Médiateur Social", "Conseiller Emploi"],
      lienDetail: "/ministere/direction-generale-travail"
    },
    {
      nom: "Direction Générale de la Fonction Publique",
      description: "Gestion et modernisation de la fonction publique",
      icone: "🏛️",
      nombreMetiers: 12,
      metiersPhares: ["Gestionnaire RH", "Conseiller Juridique", "Analyste Carrières"],
      lienDetail: "/ministere/direction-generale-fonction-publique"
    },
    {
      nom: "Direction Renforcement des Capacités",
      description: "Formation et développement des compétences",
      icone: "🎓",
      nombreMetiers: 10,
      metiersPhares: ["Ingénieur Formation", "Conseiller Employabilité", "Formateur"],
      lienDetail: "/ministere/direction-renforcement-capacites"
    },
    {
      nom: "Direction des Systèmes d'Information",
      description: "Transformation numérique et gestion IT",
      icone: "💻",
      nombreMetiers: 6,
      metiersPhares: ["Développeur", "Administrateur Systèmes", "Chef de Projet IT"],
      lienDetail: "/ministere/direction-systemes-information"
    },
    {
      nom: "Inspection Générale",
      description: "Contrôle et audit des services publics",
      icone: "🔍",
      nombreMetiers: 7,
      metiersPhares: ["Inspecteur Services", "Auditeur Interne", "Contrôleur Gestion"],
      lienDetail: "/ministere/inspection-generale"
    },
    {
      nom: "Directions Départementales",
      description: "Représentation territoriale du ministère",
      icone: "🗺️",
      nombreMetiers: 9,
      metiersPhares: ["Directeur Départemental", "Agent Territorial", "Médiateur Local"],
      lienDetail: "/ministere/directions-departementales"
    }
  ];

  statistiques = [
    { 
      valeur: "156K", 
      displayValue: "0",
      targetValue: 156000,
      libelle: "Agents publics formés",
      description: "Depuis 2016"
    },
    { 
      valeur: "2.5M", 
      displayValue: "0",
      targetValue: 2500000,
      libelle: "Travailleurs protégés",
      description: "Couverture sociale"
    },
    { 
      valeur: "45K", 
      displayValue: "0",
      targetValue: 45000,
      libelle: "Entreprises suivies",
      description: "Secteur privé"
    },
    { 
      valeur: "12", 
      displayValue: "0",
      targetValue: 12,
      libelle: "Concours en cours",
      description: "Recrutements 2024"
    },
  ];

  servicesEnLigne = [
    {
      nom: "Mes actes en ligne",
      description: "Accédez à vos documents administratifs en quelques clics.",
      icone: "📄",
      url: "#",
    },
    {
      nom: "Visa de contrat",
      description: "Demandez le visa de contrat pour vos employés.",
      icone: "✅",
      url: "#",
    },
    {
      nom: "Attestation CNSS",
      description: "Obtenez votre attestation d'immatriculation CNSS.",
      icone: "🏛️",
      url: "#",
    },
    {
      nom: "Permis de travail",
      description: "Demandez un permis de travail pour les étrangers.",
      icone: "🌍",
      url: "#",
    },
  ];

  actualitesRecentes = [
    {
      id: "1",
      titre: "Lancement du nouveau portail numérique de l'emploi",
      resume:
        "Le Ministère du Travail dévoile sa nouvelle plateforme digitale révolutionnaire pour faciliter la recherche d'emploi.",
      imageUrl:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      datePublication: new Date("2024-01-15"),
      categorie: "Digital",
    },
    {
      id: "2",
      titre: "Augmentation du salaire minimum interprofessionnel",
      resume:
        "Le gouvernement annonce une revalorisation du SMIG à partir du 1er mars 2024.",
      imageUrl:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      datePublication: new Date("2024-01-10"),
      categorie: "Réglementation",
    },
    {
      id: "3",
      titre: "Programme de formation pour 10 000 jeunes",
      resume:
        "Lancement d'un vaste programme de formation professionnelle destiné aux jeunes diplômés.",
      imageUrl:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
      datePublication: new Date("2024-01-05"),
      categorie: "Formation",
    },
  ];

  communiquesSidebar = [
    {
      type: "COMMUNIQUE",
      date: "08.01.2024",
      titre: "Mise en place du nouveau système de gestion des carrières",
    },
    {
      type: "COMMUNIQUE", 
      date: "05.01.2024",
      titre: "Lancement du programme d'insertion des jeunes diplômés",
    },
    {
      type: "COMMUNIQUE",
      date: "03.01.2024", 
      titre: "Réforme du système de notation des agents publics",
    },
    {
      type: "COMMUNIQUE",
      date: "28.12.2023",
      titre: "Bilan des activités 2023 du Ministère du Travail",
    }
  ];

  liensUtiles = [
    { nom: "Présidence de la République" },
    { nom: "Organisations Internationales du Travail" },
    { nom: "Agence des Services et Systèmes d'Information" },
    {
      nom: "Fonds National de Promotion de l'Entreprise et de l'Emploi des Jeunes",
    },
    { nom: "Portail National des Services" },
    { nom: "Agri-Carrière" },
  ];

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.startSlideShow();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
      this.animateCounters();
    }, 100);
  }
  
  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
  
  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 8000); // Change slide every 8 seconds pour laisser le temps de lire
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.communiques.length;
  }
  
  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.communiques.length - 1 : this.currentSlide - 1;
  }
  
  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private animateCounters() {
    const statElements = document.querySelectorAll('[data-target]');
    statElements.forEach((element, index) => {
      const stat = this.statistiques[index];
      if (stat) {
        this.animateCounter(element as HTMLElement, stat, index);
      }
    });
  }
  
  private animateCounter(element: HTMLElement, stat: any, index: number) {
    const targetValue = stat.targetValue;
    const duration = 2000;
    const startTime = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easedProgress = this.easeOutQuart(progress);
      const currentValue = Math.floor(targetValue * easedProgress);
      
      // Format the number based on the original format
      let displayValue = '';
      if (stat.valeur.includes('K')) {
        displayValue = (currentValue / 1000).toFixed(0) + 'K';
      } else if (stat.valeur.includes('M')) {
        displayValue = (currentValue / 1000000).toFixed(1) + 'M';
      } else {
        displayValue = currentValue.toLocaleString();
      }
      
      element.textContent = displayValue;
      stat.displayValue = displayValue;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }
  
  private easeOutQuart(t: number): number {
    return 1 - (--t) * t * t * t;
  }
}