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
                        <a routerLink="/contact" class="btn-secondary border-white text-white hover:bg-white/10">
                          Nous contacter
                        </a>
                      </div>
                      <div class="mt-6 text-sm text-white/80">
                        <span class="mr-4">📅 {{ communique.date }}</span>
                        <span>🏛️ {{ communique.source }}</span>
                      </div>
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
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Le Ministère en chiffres</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">Notre impact sur l'emploi et la fonction publique</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let stat of statistiques; let i = index" 
               class="text-center animate-on-scroll" 
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
          <a href="/services" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Offres d'emploi">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">💼</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Offres d'emploi</span>
          </a>
          
          <a href="/services" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Concours publics">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary-200 dark:group-hover:bg-secondary-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">🏛️</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Concours</span>
          </a>
          
          <a href="/services" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Démarches administratives">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-200 dark:group-hover:bg-accent-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">📋</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Démarches</span>
          </a>
          
          <a href="/contact" class="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" aria-label="Nous contacter">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors">
              <span class="text-2xl" aria-hidden="true">📞</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white text-center">Contact</span>
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
        <div class="text-center mb-16 animate-on-scroll">
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
            class="text-center animate-on-scroll"
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
        <div class="text-center mb-16 animate-on-scroll">
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
            class="card p-6 text-center animate-on-scroll hover:scale-105 transition-all duration-300"
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

        <div class="text-center mt-12 animate-on-scroll">
          <a routerLink="/services" class="btn-secondary" aria-label="Voir tous nos services disponibles">
            Voir tous nos services
          </a>
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
              class="flex items-center justify-between mb-8 animate-on-scroll"
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
                class="card overflow-hidden animate-on-scroll hover:shadow-lg transition-all duration-300"
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
            <div class="animate-on-scroll">
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

    <!-- Appel à l'action -->
    <section
      class="section-padding bg-gradient-to-r from-secondary-800 to-secondary-900 text-white"
    >
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
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
        <div class="text-center mb-12 animate-on-scroll">
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
            class="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-between animate-on-scroll"
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

    <!-- Newsletter -->
    <section class="bg-primary-900 dark:bg-gray-900 text-white py-12">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h3 class="text-lg font-bold mb-6">
            Abonnez-vous à notre newsletter :
          </h3>
          <div class="max-w-md mx-auto">
            <div class="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                class="flex-1 px-4 py-3 rounded-l-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none"
              />
              <button
                class="bg-yellow-400 dark:bg-yellow-500 text-black px-6 py-3 rounded-r-lg font-medium hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors"
              >
                S'abonner
              </button>
            </div>
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
  
  communiques = [
    {
      titre: "Avis de recrutement de 500 agents contractuels de l'Etat au profit du Ministère de l'Enseignement Supérieur",
      description: "Le Ministère du Travail et de la Fonction Publique informe le public de l'ouverture d'un concours de recrutement de 500 agents contractuels. Les candidatures sont ouvertes du 25 janvier au 15 février 2024.",
      type: "COMMUNIQUÉ",
      date: "20 janvier 2024",
      source: "Direction Générale de la Fonction Publique",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      titre: "Communiqué relatif à la 2ème édition du concours d'entrée en première année du cycle de formation des Inspecteurs du Travail",
      description: "Ouverture des inscriptions pour la formation des Inspecteurs du Travail. 50 places disponibles pour cette formation d'excellence de 24 mois.",
      type: "COMMUNIQUÉ",
      date: "18 janvier 2024", 
      source: "Direction Générale du Travail",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      titre: "Avis de recrutement de 200 agents contractuels pour les services déconcentrés",
      description: "Recrutement d'agents contractuels pour renforcer les directions départementales. Postes ouverts dans les 12 départements du Bénin.",
      type: "COMMUNIQUÉ",
      date: "15 janvier 2024",
      source: "Secrétariat Général",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      titre: "Publication des résultats du concours de recrutement des Contrôleurs du Travail",
      description: "Les résultats du concours de recrutement des Contrôleurs du Travail sont disponibles. 150 candidats admis sur 2000 candidatures.",
      type: "COMMUNIQUÉ",
      date: "12 janvier 2024",
      source: "Direction Générale du Travail", 
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      titre: "Ouverture des inscriptions pour la formation professionnelle continue",
      description: "Lancement du programme de formation continue 2024. Plus de 5000 places disponibles dans 15 filières prioritaires.",
      type: "COMMUNIQUÉ", 
      date: "10 janvier 2024",
      source: "Direction Renforcement des Capacités",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
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
