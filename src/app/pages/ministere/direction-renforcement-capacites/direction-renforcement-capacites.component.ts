import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-direction-renforcement-capacites',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Direction Générale du Renforcement des Capacités et de l'Employabilité</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            L'organe central de développement des compétences et d'amélioration de l'employabilité au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Présentation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <div class="space-y-8">
              <!-- Directeur Général -->
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                       alt="AVALLA Omer W. Charles - Directeur Général" 
                       class="w-32 h-40 object-cover rounded-lg shadow-md">
                  <div class="text-center mt-2">
                    <p class="text-sm font-semibold text-gray-900 dark:text-white">AVALLA Omer W. Charles</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Directeur Général</p>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission</h2>
                  <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Conformément aux dispositions de l'article 10 du décret n° 2021-562 du 03 novembre 2021 portant 
                    attributions, organisation et fonctionnement du Ministère du Travail et de la Fonction Publique, la 
                    direction générale du renforcement des capacités et de l'employabilité assure la mise en œuvre de la 
                    politique de l'État en matière de formation et de valorisation des ressources humaines.
                  </p>
                </div>
              </div>
              
              <!-- Directeur Général Adjoint -->
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                       alt="OHOSSA Saturnin Djiki - Directeur Général Adjoint" 
                       class="w-32 h-40 object-cover rounded-lg shadow-md">
                  <div class="text-center mt-2">
                    <p class="text-sm font-semibold text-gray-900 dark:text-white">OHOSSA Saturnin Djiki</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Directeur Général Adjoint</p>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Attributions</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">À ce titre, elle est chargée, en liaison avec les structures techniques des autres ministères et institutions de l'État :</p>
                  <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>de promouvoir l'employabilité et le développement de l'expertise des agents de l'État et de la main d'œuvre</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>d'assurer la réglementation et le contrôle du contrat d'apprentissage dans les corps de métiers, en collaboration avec les ministères compétents</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>d'accompagner les structures et organismes de formation professionnelle continue des agents de l'État et du secteur privé</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>d'agréer les centres de formation continue qualifiants des agents de l'État et du secteur privé</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>de contrôler l'application de la réglementation relative au fonctionnement des centres agréés de formation continue et du contenu de leurs programmes de formation en collaboration avec le ministère en charge de la formation technique et professionnelle</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>d'assurer le développement des ressources humaines et la programmation de la formation, notamment du personnel civil de l'État</span>
                    </li>
                    <li class="flex items-start">
                      <span class="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>de centraliser la documentation relative à la formation professionnelle continue des agents de l'État</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Directrice spécialisée -->
            <div class="mt-12 text-center animate-on-scroll">
              <div class="inline-block">
                <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                     alt="GOUIDA Noëlchée Marylène Rékiath" 
                     class="w-40 h-48 object-cover rounded-lg shadow-md mx-auto mb-4">
                <h3 class="text-lg font-bold text-secondary-800 dark:text-secondary-400 mb-2">GOUIDA Noëlchée Marylène Rékiath</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Directrice de la Formation Continue, des Bourses Pratiques, de la Planification TI et de Validation des Plans de Formation</p>
              </div>
            </div>
            
            <!-- Boutons PDF -->
            <div class="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
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
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Direction Renforcement Capacités" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>
            <div class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Directeur Général DGRCE</h3>
              <p class="text-secondary-800 dark:text-secondary-400 font-medium">M. [Nom du Directeur Général]</p>
            </div>
          </div>
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Direction Renforcement Capacités" 
                 class="rounded-2xl shadow-lg w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Missions -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Missions Principales</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les domaines d'intervention de la DGRCE
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mission of missions" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mission.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes de Formation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Programmes de Formation</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Offre de formation adaptée aux besoins du marché
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let programme of programmes" class="card p-8 animate-on-scroll">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-3xl">{{ programme.icone }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ programme.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ programme.description }}</p>
                <div class="space-y-3">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400">Durée</span>
                    <span class="font-medium text-secondary-700 dark:text-secondary-400">{{ programme.duree }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400">Bénéficiaires/an</span>
                    <span class="font-medium text-secondary-700 dark:text-secondary-400">{{ programme.beneficiaires }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400">Taux d'insertion</span>
                    <span class="font-medium text-green-600 dark:text-green-400">{{ programme.insertion }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Secteurs de Formation -->
    <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Secteurs de Formation</h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            Domaines prioritaires de développement des compétences
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let secteur of secteurs" class="text-center animate-on-scroll">
            <div class="w-20 h-20 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ secteur.icone }}</span>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ secteur.nom }}</h3>
            <p class="text-secondary-100 dark:text-secondary-200 text-sm mb-4">{{ secteur.description }}</p>
            <div class="text-2xl font-bold text-secondary-300 dark:text-secondary-400">{{ secteur.formations }}</div>
            <div class="text-xs text-secondary-200 dark:text-secondary-300">formations disponibles</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partenariats -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Partenariats Stratégiques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Collaboration avec les acteurs clés du développement
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let partenaire of partenaires" class="card p-6 text-center animate-on-scroll">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ partenaire.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ partenaire.type }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ partenaire.description }}</p>
            <div class="text-sm text-primary-700 dark:text-primary-400 font-medium">
              {{ partenaire.nombre }} partenaires actifs
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Centres de Formation -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Réseau de Formation</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Infrastructure de formation sur l'ensemble du territoire
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let centre of centres" class="card p-6 animate-on-scroll">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-2xl">{{ centre.icone }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ centre.nom }}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">{{ centre.localisation }}</p>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-500 dark:text-gray-400">Capacité</span>
                    <span class="font-medium">{{ centre.capacite }} places</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-500 dark:text-gray-400">Spécialités</span>
                    <span class="font-medium">{{ centre.specialites }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Résultats et Impact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Résultats et Impact</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            L'impact de nos programmes de renforcement des capacités
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let resultat of resultats" class="text-center animate-on-scroll">
            <div class="w-20 h-20 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ resultat.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-secondary-700 dark:text-secondary-400 mb-2">{{ resultat.valeur }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ resultat.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ resultat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contacter la DGRCE</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Intéressé par nos programmes de formation ? Contactez-nous pour plus d'informations.
          </p>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 21 30 50 00</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'dgrce@travail.gouv.bj'}}</p>
                </div>
              </div>
              <div class="bg-secondary-50 dark:bg-secondary-900/20 rounded-lg p-4">
                <p class="text-sm text-secondary-700 dark:text-secondary-400">
                  <strong>Inscriptions ouvertes :</strong> Consultez notre calendrier de formation en ligne
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DirectionRenforcementCapacitesComponent implements AfterViewInit {
  
  missions = [
    {
      icone: '🎓',
      titre: 'Formation Professionnelle',
      description: 'Développement de programmes de formation adaptés aux besoins du marché.'
    },
    {
      icone: '💼',
      titre: 'Amélioration de l\'Employabilité',
      description: 'Renforcement des compétences pour faciliter l\'insertion professionnelle.'
    },
    {
      icone: '🔄',
      titre: 'Reconversion Professionnelle',
      description: 'Accompagnement des travailleurs dans leur reconversion.'
    },
    {
      icone: '🤝',
      titre: 'Partenariats Entreprises',
      description: 'Collaboration avec le secteur privé pour l\'adéquation formation-emploi.'
    },
    {
      icone: '📊',
      titre: 'Études de Marché',
      description: 'Analyse des besoins en compétences et évolution des métiers.'
    },
    {
      icone: '🏆',
      titre: 'Certification des Compétences',
      description: 'Validation et certification des acquis professionnels.'
    }
  ];
  
  programmes = [
    {
      icone: '👨‍💻',
      nom: 'Formation Numérique Accélérée',
      description: 'Programme intensif de formation aux métiers du numérique.',
      duree: '6 mois',
      beneficiaires: '2,000',
      insertion: '85%'
    },
    {
      icone: '🏭',
      nom: 'Apprentissage Industriel',
      description: 'Formation en alternance dans les secteurs industriels.',
      duree: '18 mois',
      beneficiaires: '1,500',
      insertion: '90%'
    },
    {
      icone: '🌱',
      nom: 'Agro-Entrepreneuriat',
      description: 'Formation à l\'entrepreneuriat agricole et agro-alimentaire.',
      duree: '12 mois',
      beneficiaires: '3,000',
      insertion: '75%'
    },
    {
      icone: '👩‍💼',
      nom: 'Leadership Féminin',
      description: 'Programme de renforcement des capacités des femmes leaders.',
      duree: '9 mois',
      beneficiaires: '800',
      insertion: '80%'
    },
    {
      icone: '🔧',
      nom: 'Métiers de l\'Artisanat',
      description: 'Formation aux métiers traditionnels et modernes de l\'artisanat.',
      duree: '15 mois',
      beneficiaires: '2,500',
      insertion: '78%'
    },
    {
      icone: '🏥',
      nom: 'Santé et Services Sociaux',
      description: 'Formation aux métiers de la santé et des services à la personne.',
      duree: '24 mois',
      beneficiaires: '1,200',
      insertion: '95%'
    }
  ];
  
  secteurs = [
    {
      icone: '💻',
      nom: 'Numérique',
      description: 'Technologies de l\'information et communication',
      formations: '25'
    },
    {
      icone: '🏭',
      nom: 'Industrie',
      description: 'Manufacturing et production industrielle',
      formations: '18'
    },
    {
      icone: '🌾',
      nom: 'Agriculture',
      description: 'Agro-business et transformation agricole',
      formations: '22'
    },
    {
      icone: '🏗️',
      nom: 'BTP',
      description: 'Bâtiment et travaux publics',
      formations: '15'
    },
    {
      icone: '🏥',
      nom: 'Santé',
      description: 'Services de santé et soins',
      formations: '12'
    },
    {
      icone: '🎨',
      nom: 'Artisanat',
      description: 'Métiers d\'art et artisanat traditionnel',
      formations: '20'
    },
    {
      icone: '🚗',
      nom: 'Transport',
      description: 'Logistique et transport',
      formations: '10'
    },
    {
      icone: '🏪',
      nom: 'Commerce',
      description: 'Commerce et services',
      formations: '16'
    }
  ];
  
  partenaires = [
    {
      icone: '🏢',
      type: 'Entreprises Privées',
      description: 'Partenariats avec les entreprises pour la formation en alternance.',
      nombre: '150+'
    },
    {
      icone: '🌍',
      type: 'Organisations Internationales',
      description: 'Coopération avec les bailleurs de fonds internationaux.',
      nombre: '25'
    },
    {
      icone: '🎓',
      type: 'Institutions de Formation',
      description: 'Collaboration avec les centres de formation technique.',
      nombre: '80'
    },
    {
      icone: '🤝',
      type: 'ONGs et Associations',
      description: 'Partenariats avec la société civile pour l\'inclusion.',
      nombre: '45'
    },
    {
      icone: '🏛️',
      type: 'Collectivités Locales',
      description: 'Coopération avec les communes pour le développement local.',
      nombre: '77'
    },
    {
      icone: '🔬',
      type: 'Centres de Recherche',
      description: 'Collaboration pour l\'innovation et la recherche appliquée.',
      nombre: '12'
    }
  ];
  
  centres = [
    {
      icone: '🏢',
      nom: 'Centre National de Formation',
      localisation: 'Cotonou',
      capacite: '1,000',
      specialites: '15'
    },
    {
      icone: '🏭',
      nom: 'Centre Technique Industriel',
      localisation: 'Parakou',
      capacite: '800',
      specialites: '12'
    },
    {
      icone: '🌾',
      nom: 'Centre Agro-Pastoral',
      localisation: 'Natitingou',
      capacite: '600',
      specialites: '10'
    },
    {
      icone: '💻',
      nom: 'Centre Numérique',
      localisation: 'Porto-Novo',
      capacite: '500',
      specialites: '8'
    },
    {
      icone: '🎨',
      nom: 'Centre d\'Artisanat',
      localisation: 'Abomey',
      capacite: '400',
      specialites: '12'
    },
    {
      icone: '🏥',
      nom: 'Centre Médico-Social',
      localisation: 'Bohicon',
      capacite: '300',
      specialites: '6'
    }
  ];
  
  resultats = [
    {
      icone: '🎓',
      valeur: '50K+',
      titre: 'Personnes Formées',
      description: 'Bénéficiaires de nos programmes depuis 2016'
    },
    {
      icone: '💼',
      valeur: '82%',
      titre: 'Taux d\'Insertion',
      description: 'Taux moyen d\'insertion professionnelle'
    },
    {
      icone: '🏢',
      valeur: '1,200+',
      titre: 'Entreprises Créées',
      description: 'Nouvelles entreprises créées par nos diplômés'
    },
    {
      icone: '💰',
      valeur: '35%',
      titre: 'Augmentation Revenus',
      description: 'Amélioration moyenne des revenus post-formation'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}