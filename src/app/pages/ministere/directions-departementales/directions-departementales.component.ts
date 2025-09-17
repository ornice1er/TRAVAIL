import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-directions-departementales',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Directions Départementales</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            Le réseau territorial du Ministère du Travail et de la Fonction Publique sur l'ensemble du territoire béninois.
          </p>
        </div>
      </div>
    </div>

    <!-- Direction en chiffres -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Le Réseau Territorial en chiffres</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">
            L'impact de l'action des Directions Départementales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let chiffre of chiffres" class="text-center ">
            <div class="w-20 h-20 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ chiffre.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-white mb-2">{{ chiffre.valeur }}</div>
            <h3 class="text-lg font-semibold text-primary-100 dark:text-primary-200 mb-2">{{ chiffre.titre }}</h3>
            <p class="text-primary-200 dark:text-primary-300 text-sm">{{ chiffre.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Attribution -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Directions Départementales" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
          
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Attribution</h2>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Les Directions Départementales du Travail et de la Fonction Publique constituent le réseau 
              territorial du ministère, assurant la mise en œuvre des politiques publiques au niveau local 
              et le rapprochement des services de l'administration des citoyens.
            </p>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Attributions</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Elles sont chargées :</p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de représenter le ministère au niveau départemental</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de décliner et mettre en œuvre les politiques nationales au niveau territorial</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'offrir des services de proximité aux citoyens et aux entreprises</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>d'assurer le contrôle de l'application de la législation du travail</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de collecter et transmettre les données statistiques locales</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>de développer des initiatives locales de promotion de l'emploi</span>
              </li>
            </ul>
            
            <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 mt-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Coordination Nationale</h3>
              <p class="text-primary-800 dark:text-primary-400 font-medium">Direction de la Coordination Territoriale</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Présentation des directeurs techniques -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Directeurs Départementaux</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les responsables des 12 directions départementales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let departement of departements" class="card p-4 text-center ">
            <div class="w-16 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-3 overflow-hidden">
              <div class="w-full h-full bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <span class="text-xl text-primary-600 dark:text-primary-400">🏛️</span>
              </div>
            </div>
            <h3 class="text-sm font-bold text-primary-800 dark:text-primary-400 mb-1">{{ departement.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-xs mb-2">{{ departement.chefLieu }}</p>
            <div class="space-y-1 text-xs text-gray-500 dark:text-gray-400">
              <div>{{ departement.population }} hab.</div>
              <div>{{ departement.communes }} communes</div>
              <div>{{ departement.agents }} agents</div>
            </div>
            <p class="text-xs text-primary-700 dark:text-primary-400 font-medium mt-2">
              {{ departement.directeur }}
            </p>
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
            Les métiers et compétences des Directions Départementales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let metier of fichesMetiers" class="card p-6 ">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ metier.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ metier.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center">{{ metier.description }}</p>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Compétences requises :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let competence of metier.competences" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ competence }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Missions principales :</h4>
                <ul class="space-y-1">
                  <li *ngFor="let mission of metier.missions" class="flex items-start">
                    <span class="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300 text-xs">{{ mission }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="pt-3 border-t border-gray-200 dark:border-gray-600">
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500 dark:text-gray-400">Niveau requis</span>
                  <span class="font-medium text-primary-700 dark:text-primary-400">{{ metier.niveauRequis }}</span>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span class="text-gray-500 dark:text-gray-400">Expérience</span>
                  <span class="font-medium text-primary-700 dark:text-primary-400">{{ metier.experience }}</span>
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
            Contactez directement les services des Directions Départementales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let contact of contactsSpecifiques" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ contact.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ contact.service }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ contact.description }}</p>
            
            <div class="space-y-3">
              <div class="flex items-center justify-center space-x-3">
                <span class="text-primary-600 dark:text-primary-400">📞</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.telephone }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-primary-600 dark:text-primary-400">✉️</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.email }}</span>
              </div>
              <div class="flex items-center justify-center space-x-3">
                <span class="text-primary-600 dark:text-primary-400">⏰</span>
                <span class="text-gray-700 dark:text-gray-300 text-sm">{{ contact.horaires }}</span>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p class="text-xs text-primary-700 dark:text-primary-400 font-medium">
                {{ contact.specialite }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Contact général -->
        <div class="max-w-2xl mx-auto mt-16 ">
          <div class="card p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trouver votre Direction Départementale</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Contactez la direction départementale de votre région pour bénéficier de nos services.
            </p>
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Standard National</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 70 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">🌐</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Annuaire en ligne</p>
                  <p class="text-gray-600 dark:text-gray-300">www.travail.gouv.bj/annuaire</p>
                </div>
              </div>
              <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p class="text-sm text-primary-700 dark:text-primary-400">
                  <strong>Horaires :</strong> Du lundi au vendredi de 7h30 à 15h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionsDepartementalesComponent implements AfterViewInit {
  
  chiffres = [
    {
      icone: '🏢',
      valeur: '12',
      titre: 'Directions Départementales',
      description: 'Couverture de tout le territoire national'
    },
    {
      icone: '👥',
      valeur: '580',
      titre: 'Agents Territoriaux',
      description: 'Personnel des directions départementales'
    },
    {
      icone: '🏛️',
      valeur: '77',
      titre: 'Communes Couvertes',
      description: 'Toutes les communes du Bénin'
    },
    {
      icone: '📋',
      valeur: '45K',
      titre: 'Dossiers Traités',
      description: 'Dossiers administratifs par an'
    }
  ];
  
  departements = [
    {
      nom: 'Alibori',
      chefLieu: 'Kandi',
      population: '867,463',
      communes: '6',
      agents: '45',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Atacora',
      chefLieu: 'Natitingou',
      population: '772,262',
      communes: '9',
      agents: '52',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Atlantique',
      chefLieu: 'Allada',
      population: '1,398,229',
      communes: '8',
      agents: '68',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Borgou',
      chefLieu: 'Parakou',
      population: '1,214,249',
      communes: '8',
      agents: '62',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Collines',
      chefLieu: 'Savalou',
      population: '716,558',
      communes: '6',
      agents: '38',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Couffo',
      chefLieu: 'Aplahoué',
      population: '741,895',
      communes: '6',
      agents: '35',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Donga',
      chefLieu: 'Djougou',
      population: '543,130',
      communes: '4',
      agents: '28',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Littoral',
      chefLieu: 'Cotonou',
      population: '679,012',
      communes: '1',
      agents: '85',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Mono',
      chefLieu: 'Lokossa',
      population: '497,243',
      communes: '6',
      agents: '32',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Ouémé',
      chefLieu: 'Porto-Novo',
      population: '1,096,850',
      communes: '9',
      agents: '58',
      directeur: 'M. [Nom]'
    },
    {
      nom: 'Plateau',
      chefLieu: 'Pobè',
      population: '624,146',
      communes: '5',
      agents: '35',
      directeur: 'Mme [Nom]'
    },
    {
      nom: 'Zou',
      chefLieu: 'Abomey',
      population: '851,623',
      communes: '9',
      agents: '48',
      directeur: 'M. [Nom]'
    }
  ];
  
  fichesMetiers = [
    {
      icone: '🏛️',
      titre: 'Directeur Départemental',
      description: 'Direction et coordination des activités départementales.',
      competences: [
        'Management public',
        'Coordination territoriale',
        'Relations institutionnelles',
        'Gestion d\'équipe'
      ],
      missions: [
        'Direction de la structure',
        'Coordination des services',
        'Relations avec les autorités',
        'Représentation du ministère'
      ],
      niveauRequis: 'Bac+5',
      experience: '10 ans minimum'
    },
    {
      icone: '🔍',
      titre: 'Inspecteur Départemental',
      description: 'Contrôle de l\'application de la législation du travail.',
      competences: [
        'Droit du travail',
        'Techniques d\'inspection',
        'Médiation',
        'Rédaction de rapports'
      ],
      missions: [
        'Inspection des entreprises',
        'Contrôle de conformité',
        'Médiation des conflits',
        'Application des sanctions'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '💼',
      titre: 'Conseiller Emploi Territorial',
      description: 'Promotion de l\'emploi au niveau départemental.',
      competences: [
        'Politiques d\'emploi',
        'Développement local',
        'Partenariats locaux',
        'Animation territoriale'
      ],
      missions: [
        'Promotion de l\'emploi local',
        'Partenariats entreprises',
        'Programmes d\'insertion',
        'Statistiques locales'
      ],
      niveauRequis: 'Bac+4',
      experience: '3 ans minimum'
    },
    {
      icone: '📋',
      titre: 'Agent Administratif',
      description: 'Gestion des formalités et services administratifs.',
      competences: [
        'Procédures administratives',
        'Accueil du public',
        'Bureautique',
        'Réglementation'
      ],
      missions: [
        'Accueil des usagers',
        'Traitement des dossiers',
        'Délivrance d\'actes',
        'Information du public'
      ],
      niveauRequis: 'Bac+2',
      experience: '1 an minimum'
    },
    {
      icone: '📊',
      titre: 'Chargé de Statistiques',
      description: 'Collecte et traitement des données locales.',
      competences: [
        'Statistiques',
        'Collecte de données',
        'Analyse quantitative',
        'Reporting'
      ],
      missions: [
        'Collecte de données',
        'Traitement statistique',
        'Production de rapports',
        'Transmission au central'
      ],
      niveauRequis: 'Bac+3',
      experience: '2 ans minimum'
    },
    {
      icone: '🤝',
      titre: 'Médiateur Social Local',
      description: 'Médiation des conflits de travail au niveau local.',
      competences: [
        'Techniques de médiation',
        'Droit social',
        'Communication',
        'Négociation'
      ],
      missions: [
        'Médiation des conflits',
        'Facilitation du dialogue',
        'Prévention des tensions',
        'Suivi des accords'
      ],
      niveauRequis: 'Bac+3',
      experience: '3 ans minimum'
    }
  ];
  
  contactsSpecifiques = [
    {
      icone: '🔍',
      service: 'Service Inspection Territoriale',
      description: 'Contrôle des entreprises au niveau départemental.',
      telephone: '+229 21 30 70 01',
      email: 'inspection.territoriale@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Inspection du travail'
    },
    {
      icone: '💼',
      service: 'Service Emploi Local',
      description: 'Promotion de l\'emploi et insertion professionnelle.',
      telephone: '+229 21 30 70 02',
      email: 'emploi.local@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Emploi et insertion'
    },
    {
      icone: '📋',
      service: 'Service Formalités',
      description: 'Traitement des formalités administratives.',
      telephone: '+229 21 30 70 03',
      email: 'formalites@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-15h30',
      specialite: 'Formalités administratives'
    },
    {
      icone: '🤝',
      service: 'Service Médiation',
      description: 'Médiation des conflits de travail locaux.',
      telephone: '+229 21 30 70 04',
      email: 'mediation.locale@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-17h',
      specialite: 'Médiation sociale'
    },
    {
      icone: '📊',
      service: 'Service Statistiques',
      description: 'Collecte et traitement des données locales.',
      telephone: '+229 21 30 70 05',
      email: 'stats.locales@travail.gouv.bj',
      horaires: 'Lun-Ven 8h-16h',
      specialite: 'Statistiques locales'
    },
    {
      icone: '📞',
      service: 'Accueil et Orientation',
      description: 'Information et orientation des usagers.',
      telephone: '+229 21 30 70 00',
      email: 'accueil.territorial@travail.gouv.bj',
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