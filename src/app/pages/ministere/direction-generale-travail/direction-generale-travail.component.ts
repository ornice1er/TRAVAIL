import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-direction-generale-travail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction Générale du Travail</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            L'organe central de régulation du marché du travail et de promotion de l'emploi au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">La Direction du Travail en chiffres</h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            L'impact de l'action de la Direction Générale du Travail
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let chiffre of chiffres" class="text-center ">
            <div class="w-20 h-20 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ chiffre.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">{{ chiffre.valeur }}</div>
            <h3 class="text-lg font-semibold text-secondary-100 dark:text-secondary-200 mb-2">{{ chiffre.titre }}</h3>
            <p class="text-secondary-200 dark:text-secondary-300 text-sm">{{ chiffre.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Attribution avec photo du responsable -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="">
            <div class="space-y-8">
              <!-- Directeur Général -->
              <div class="text-center">
                <div class="relative inline-block">
                  <img src="https://www.travail.gouv.bj/storage/structures/respos/1708505247dahoui-edgard.jpg"
                       alt="DAIDOU Edgard - Directeur Général du Travail"
                       class="rounded-2xl shadow-lg w-full max-w-sm mx-auto">
                  <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary-700 rounded-full flex items-center justify-center">
                    <span class="text-white text-2xl">🇧🇯</span>
                  </div>
                </div>
                <div class="mt-6">
                  <h3 class="text-xl font-bold text-secondary-800 dark:text-secondary-400 mb-2">DAIDOU Edgard</h3>
                  <p class="text-gray-600 dark:text-gray-300">Directeur Général du Travail</p>
                </div>
              </div>

              <!-- Directeur Général Adjoint -->
              <div class="text-center">
                <div class="relative inline-block">
                  <img src="https://www.travail.gouv.bj/storage/teams/1680503358hedokingbe-paul-n.jpg"
                       alt="BEDJOKINDE Paul N. - Directeur Général Adjoint du Travail"
                       class="rounded-2xl shadow-lg w-full max-w-sm mx-auto">
                </div>
                <div class="mt-6">
                  <h3 class="text-xl font-bold text-secondary-800 dark:text-secondary-400 mb-2">BEDJOKINDE Paul N.</h3>
                  <p class="text-gray-600 dark:text-gray-300">Directeur Général Adjoint du Travail</p>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Attribution</h2>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              La Direction Générale du Travail assure la mise en œuvre de la politique de l'État en matière de travail.
            </p>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Attributions</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">À ce titre, elle est chargée :</p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de concevoir, de mettre en œuvre, de suivre et d'évaluer la politique nationale du travail</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de concevoir et d'élaborer les avant-projets de textes législatifs, réglementaires et conventionnels en matière de travail, de main-d'œuvre et de sécurité sociale</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de promouvoir les relations de travail dans les entreprises publiques et privées</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de promouvoir le dialogue social en milieu de travail</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de promouvoir la sécurité sociale dans tous les secteurs d'activités</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de promouvoir la lutte contre le travail des enfants</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de collecter et de publier conformément à la réglementation en vigueur, les statistiques sur le travail</span>
              </li>
            </ul>

            <!-- Boutons de téléchargement -->
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#" class="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Lire l'arrêté
              </a>
              <a href="#" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Présentation des directeurs techniques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Directeurs Techniques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'équipe technique de la Direction Générale du Travail
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let directeur of directeursTechniques" class="card p-6 text-center ">
            <div class="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 overflow-hidden">
              <img [src]="directeur.photo"
                   [alt]="directeur.nom"
                   class="w-full h-full object-cover"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
              <div class="w-full h-full bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center" style="display: none;">
                <span class="text-2xl text-secondary-600 dark:text-secondary-400">👤</span>
              </div>
            </div>
            <h3 class="text-sm font-bold text-secondary-800 dark:text-secondary-400 mb-2">{{ directeur.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-xs mb-3">{{ directeur.fonction }}</p>
            <!-- <div class="space-y-2">
              <div *ngFor="let responsabilite of directeur.responsabilites" class="text-xs text-gray-500 dark:text-gray-400">
                • {{ responsabilite }}
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Fiches métiers -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Fiches Métiers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les métiers et compétences de la Direction Générale du Travail
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of fichesMetiers" class="card p-6 ">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ metier.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center">{{ metier.description }}</p>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Compétences requises :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let competence of metier.competences" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ competence }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Missions principales :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let mission of metier.missions" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ mission }}</span>
                  </li>
                </ul>
              </div>

              <div class="pt-3 border-t border-gray-200 dark:border-gray-600">
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500 dark:text-gray-400">Niveau requis</span>
                  <span class="font-medium text-secondary-700 dark:text-secondary-400">{{ metier.niveauRequis }}</span>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span class="text-gray-500 dark:text-gray-400">Expérience</span>
                  <span class="font-medium text-secondary-700 dark:text-secondary-400">{{ metier.experience }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacts spécifiques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacts Spécifiques</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Contactez directement les services spécialisés de la Direction Générale du Travail
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let contact of contactsSpecifiques" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ contact.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ contact.service }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ contact.description }}</p>

            <div class="space-y-3">
              <div class="flex items-center justify-center space-x-3">
                <span class="text-secondary-600 dark:text-secondary-400">📞</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.telephone }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-secondary-600 dark:text-secondary-400">✉️</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.email }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-secondary-600 dark:text-secondary-400">⏰</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.horaires }}</span>
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p class="text-xs text-secondary-700 dark:text-secondary-400 font-medium">
                {{ contact.specialite }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact général -->
        <div class="max-w-2xl mx-auto mt-16 ">
          <div class="card p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Général</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Pour toute information concernant le travail et l'emploi.
            </p>
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 30 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'dgt@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-4">
                <p class="text-sm text-secondary-700 dark:text-secondary-400">
                  <strong>Permanence :</strong> Service d'urgence disponible 24h/24 pour les accidents du travail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionGeneraleTravailComponent implements AfterViewInit {

  chiffres = [
    {
      icone: '🏢',
      valeur: '15K+',
      titre: 'Entreprises Contrôlées',
      description: 'Entreprises sous surveillance annuelle'
    },
    {
      icone: '👥',
      valeur: '2.5M',
      titre: 'Travailleurs Protégés',
      description: 'Bénéficiaires de la protection sociale'
    },
    {
      icone: '📋',
      valeur: '8,500',
      titre: 'Dossiers Traités',
      description: 'Dossiers administratifs par an'
    },
    {
      icone: '⚖️',
      valeur: '85%',
      titre: 'Médiations Réussies',
      description: 'Taux de résolution des conflits'
    }
  ];

  directeursTechniques = [
    {
      nom: 'AROUNA Ramanou',
      fonction: 'Chef Département des Normes et de la Statistique au Travail',
      photo: 'https://www.travail.gouv.bj/storage/teams/1733741844arouna-ramanou.jpg',
    },
    {
      nom: 'OUENDO Wilfrid K. Serge',
      fonction: 'Chef Département des Relations Professionnelles et du Dialogue Social',
      photo: 'https://www.travail.gouv.bj/storage/teams/1677698329ouendo-wilfrid-k-serge.JPG',
    },
    {
      nom: 'Dr BEDIE TOÏHEN Lucile',
      fonction: 'Chef Département de la Sécurité Sociale, de la Mutualité et de la Santé au Travail',
      photo: 'https://www.travail.gouv.bj/storage/teams/1678289870dr-bedie-toihen-lucile.jpg',

    }
  ];

  fichesMetiers = [
    {
      icone: '🔍',
      titre: 'Inspecteur du Travail',
      description: 'Contrôle de l\'application de la législation du travail.',
      competences: [
        'Droit du travail',
        'Techniques d\'inspection',
        'Médiation sociale',
        'Rédaction de rapports'
      ],
      missions: [
        'Inspection des entreprises',
        'Contrôle des conditions de travail',
        'Médiation des conflits',
        'Application des sanctions'
      ],
      niveauRequis: 'Bac+5',
      experience: '3 ans minimum'
    },
    {
      icone: '⚖️',
      titre: 'Médiateur Social',
      description: 'Résolution des conflits collectifs de travail.',
      competences: [
        'Techniques de médiation',
        'Droit social',
        'Communication',
        'Négociation'
      ],
      missions: [
        'Médiation des conflits',
        'Facilitation du dialogue',
        'Négociation collective',
        'Prévention des grèves'
      ],
      niveauRequis: 'Bac+4',
      experience: '5 ans minimum'
    },
    {
      icone: '📊',
      titre: 'Statisticien du Travail',
      description: 'Production et analyse des statistiques de l\'emploi.',
      competences: [
        'Statistiques',
        'Analyse de données',
        'Enquêtes',
        'Reporting'
      ],
      missions: [
        'Collecte de données',
        'Analyse statistique',
        'Production de rapports',
        'Observatoire de l\'emploi'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '🛡️',
      titre: 'Conseiller Sécurité au Travail',
      description: 'Prévention des risques professionnels et sécurité.',
      competences: [
        'Hygiène et sécurité',
        'Prévention des risques',
        'Réglementation SST',
        'Formation sécurité'
      ],
      missions: [
        'Évaluation des risques',
        'Conseil en prévention',
        'Formation sécurité',
        'Audit sécurité'
      ],
      niveauRequis: 'Bac+4',
      experience: '4 ans minimum'
    },
    {
      icone: '💼',
      titre: 'Conseiller Emploi',
      description: 'Promotion de l\'emploi et insertion professionnelle.',
      competences: [
        'Politiques d\'emploi',
        'Insertion professionnelle',
        'Marché du travail',
        'Accompagnement'
      ],
      missions: [
        'Développement de l\'emploi',
        'Insertion des jeunes',
        'Partenariats entreprises',
        'Programmes d\'emploi'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '🏥',
      titre: 'Spécialiste Sécurité Sociale',
      description: 'Gestion et promotion de la sécurité sociale.',
      competences: [
        'Sécurité sociale',
        'Protection sociale',
        'Réglementation CNSS',
        'Gestion des prestations'
      ],
      missions: [
        'Promotion de la sécurité sociale',
        'Contrôle des cotisations',
        'Conseil aux entreprises',
        'Suivi des prestations'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    }
  ];

  contactsSpecifiques = [
    {
      icone: '🔍',
      service: 'Service Inspection du Travail',
      description: 'Contrôle de l\'application de la législation du travail.',
      telephone: '+229 21 30 30 01',
      email: 'inspection.travail@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Inspection et contrôle'
    },
    {
      icone: '⚖️',
      service: 'Service Relations Professionnelles',
      description: 'Médiation des conflits et dialogue social.',
      telephone: '+229 21 30 30 02',
      email: 'relations.pro@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Médiation et dialogue social'
    },
    {
      icone: '💼',
      service: 'Service Promotion de l\'Emploi',
      description: 'Développement des politiques d\'emploi.',
      telephone: '+229 21 30 30 03',
      email: 'emploi.dgt@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Politiques d\'emploi'
    },
    {
      icone: '🛡️',
      service: 'Service Sécurité Sociale',
      description: 'Promotion et contrôle de la sécurité sociale.',
      telephone: '+229 21 30 30 04',
      email: 'securite.sociale@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Sécurité sociale'
    },
    {
      icone: '🚨',
      service: 'Urgences Accidents du Travail',
      description: 'Traitement des urgences et accidents professionnels.',
      telephone: '+229 21 30 30 99',
      email: 'urgence.travail@travail.gouv.bj',
      horaires: '24h/24 - 7j/7',
      specialite: 'Urgences professionnelles'
    },
    {
      icone: '📞',
      service: 'Accueil et Information',
      description: 'Information générale sur le droit du travail.',
      telephone: '+229 21 30 30 00',
      email: 'info.dgt@travail.gouv.bj',
      horaires: 'Lun-Ven 7h30-17h',
      specialite: 'Information générale'
    }
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}