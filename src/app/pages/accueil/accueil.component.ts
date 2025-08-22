import { Component, OnInit, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AnimationService } from "../../shared/services/animation.service";

@Component({
  selector: "app-accueil",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 dark:from-primary-900 dark:via-primary-800 dark:to-primary-950 text-white overflow-hidden"
      role="banner"
      aria-label="Bannière principale du Ministère du Travail"
    >
      <div class="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      <div class="relative section-padding">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-on-scroll">
              <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight" id="main-title">
                Ministère du Travail et de la Fonction Publique
              </h1>
              <p
                class="text-xl lg:text-2xl mb-8 text-blue-100 dark:text-blue-200 font-light"
                role="text"
              >
                Œuvrer pour l'emploi, améliorer les conditions de travail et
                moderniser l'administration publique béninoise.
              </p>
              
              <!-- Barre de recherche proéminente -->
              <div class="mb-8">
                <div class="relative max-w-md">
                  <input
                    type="search"
                    placeholder="Rechercher un service, une information..."
                    class="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    aria-label="Recherche sur le site"
                  />
                  <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <a routerLink="/services" class="btn-primary text-center" aria-label="Accéder à nos services en ligne">
                  Nos Services
                </a>
                <a
                  routerLink="/contact"
                  class="btn-secondary text-center"
                  aria-label="Nous contacter"
                >
                  Nous Contacter
                </a>
              </div>
            </div>
            <div class="animate-on-scroll lg:animate-slide-in-right">
              <div class="relative">
                <img
                  src="https://www.travail.gouv.bj/assets/images/tour2.jpeg"
                  alt="Ministère du Travail"
                  class="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-primary-900/50 dark:from-primary-950/70 to-transparent rounded-2xl"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
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
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Actualités principales -->
          <div class="lg:col-span-2">
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

            <div class="space-y-8">
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
          <div class="lg:col-span-1">
            <div class="animate-on-scroll">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Communiqués
              </h3>
              <div class="space-y-6">
                <div
                  *ngFor="let communique of communiques"
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
          </div>
        </div>
      </div>
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
export class AccueilComponent implements OnInit, AfterViewInit {
  statistiques = [
    { valeur: "156K", libelle: "Agents publics formés" },
    { valeur: "2.5M", libelle: "Travailleurs protégés" },
    { valeur: "45K", libelle: "Entreprises suivies" },
    { valeur: "98%", libelle: "Taux de satisfaction" },
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

  communiques = [
    {
      type: "COMMUNIQUE",
      date: "20.01.2024",
      titre:
        "Avis de recrutement de 500 agents contractuels de l'Etat au profit du Ministère de l'Enseignement Supérieur",
    },
    {
      type: "COMMUNIQUE",
      date: "18.01.2024",
      titre:
        "Communiqué relatif à la 2ème édition du concours d'entrée en première année du cycle de formation des Inspecteurs du Travail",
    },
    {
      type: "COMMUNIQUE",
      date: "15.01.2024",
      titre:
        "Avis de recrutement de 200 agents contractuels pour les services déconcentrés",
    },
    {
      type: "COMMUNIQUE",
      date: "12.01.2024",
      titre:
        "Publication des résultats du concours de recrutement des Contrôleurs du Travail",
    },
    // {
    //   type: 'COMMUNIQUE',
    //   date: '10.01.2024',
    //   titre: 'Ouverture des inscriptions pour la formation professionnelle continue'
    // }
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

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
      this.animateCounters();
    }, 100);
  }

  private animateCounters() {
    // Animation des compteurs de statistiques
    const statElements = document.querySelectorAll("[data-stat]");
    statElements.forEach((element, index) => {
      const targetValue = parseInt(
        this.statistiques[index]?.valeur.replace(/[^\d]/g, "") || "0"
      );
      if (targetValue > 0) {
        this.animationService.animateCountUp(
          element as HTMLElement,
          targetValue
        );
      }
    });
  }
}
