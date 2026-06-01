import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../../shared/services/animation.service';

@Component({
  selector: 'app-ministere',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Le Ministère du Budget et de la Fonction Publique</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            Découvrez notre organisation, nos missions et notre engagement pour le développement de l'emploi au Bénin.
          </p>
        </div>
      </div>
    </div>

    <!-- Le Ministre -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="">
            <div class="relative">
              <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                   alt="Ministre du Travail" 
                   class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
              <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gov-blue-700 rounded-full flex items-center justify-center">
                <span class="text-white text-2xl">🇧🇯</span>
              </div>
            </div>
          </div>
          <div class="">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Le Ministre</h2>
            <h3 class="text-2xl font-semibold text-primary-800 dark:text-primary-400 mb-4">Adidjatou A. MATHYS</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Mariée et mère de trois enfants, Mme Adidjatou MATHYS est experte en Finance et en Comptabilité de l’Etat. Administrateur du Trésor à la retraite, elle peut se targuer d’avoir eu un parcours professionnel élogieux, fait d’une série de promotions, confirmant la reconnaissance de ses mérites. En effet, après l’obtention en 1981 de la Maitrise es-Sciences Economiques (option Finances et Fiscalité) à l’Université Nationale du Bénin, Mme Adidjatou MATHYS fut de 1982 à 1983, Assistant du Chef du Service des Affaires Financières du Ministère de l’Enseignement Supérieur et de la Recherche Scientifique. Pour répondre à la maxime selon laquelle les grands esprits ont un but, cette femme battante et confiante en ses capacités à réussir, a poursuivi ses études au CEFAP de 1982 à 1984 et a obtenu le Diplôme en Administration Centrale des Finances et Trésor. A partir de 1984, elle se retrouve à la Direction Générale du Trésor et de la Comptabilité Publique (DGTCP). C’est là qu’elle fit l’essentiel de sa carrière car elle y est restée jusqu’en 2003 et a gravi toutes les marches avant d’accéder au poste de Directrice Générale du Trésor et de la Comptabilité Publique en 1999. Avant de se voir confier cette responsabilité, Adidjatou MATHYS a été successivement, Assistant du Receveur du Centre de Recouvrement, Chef Adjoint et ensuite, Chef du Service de la Dépense, Receveur des Finances de l’Ouémé et Directrice Générale Adjointe de la DGTCP. Elle a mis ses expériences accumulées, au service de plusieurs structures, institutions tant au plan national que régional et ce, à travers sa présence dans les organes de décision. Elle fut par exemple membre du Conseil d’Administration de la BCEAO, membre du Conseil de Gérance de la Caisse Autonome d’Amortissement et du Conseil d’Administration de la Continental Bank. Elle a aussi été membre du Groupe ayant réalisé l’Audit du Ministère des Finances en 1991 ; membre du Comité de Conception des Nouvelles Procédures d’Exécution des Dépenses Publiques en 1993 ; membre du Comité National du crédit. A tout cela il faut ajouter la participation à de nombreux séminaires, tables rondes et colloques nationaux et sous régionaux. On peut citer entre autres, la participation aux travaux relatifs à la réforme des Finances Publiques dans l’UEMOA en 2012 ; la participation aux travaux relatifs à la Réforme Institutionnelle de la BCEAO en 2003. A partir de 2006, la vie professionnelle d’Adidjatou MATHYS a pris une autre tournure. Grâce à sa détermination et son engagement, elle est désormais présente dans la grande sphère de décisions sur les questions des finances et de l’économie du Bénin. Avec une compétence avérée, elle fut successivement nommée de 2006 à 2011, Directrice de Cabinet du Ministre Délégué chargé du Budget auprès du Ministre du Développement, de l’Economie et des Finances, et Directrice de Cabinet du Ministre de l’Economie et des Finances. Ayant découvert en elle des qualités et des aptitudes pour un meilleur service à la nation, le Président Boni YAYI la propulse au-devant de la scène publique en la nommant dans son gouvernement en 2012, Ministre de l’Economie et des Finances. Ce fut le sacre pour ce Chevalier de l’ordre du mérite du Bénin qui, à la tête de ce département ministériel, a tôt fait de démontrer sa grande capacité managériale et son leadership confirmé. Elle incarne le modèle des femmes parvenues à la grandeur au prix de sacrifices, de risques et de don de soi. Des années plus tard, alors qu’elle jouissait déjà d’une retraite paisible, le devoir la rappelle de nouveau. Patrice Talon, devenu Président de la République en Avril 2016, l’a rappelé à ses côtés pour la gestion des affaires de l’Etat. Le Chef de l’Etat qui ne doute point de ses compétences, lui a confié dans son premier gouvernement, la charge de Ministre du Travail, de la Fonction Publique et des Affaires Sociales. Avec ses expériences accumulées, sa capacité d’anticipation, son sens d’écoute et de discernement, le Ministre Adidjatou MATHYS à la tête de cet important département a rapidement engagé des actions pour identifier les solutions idoines en vue de résorber les nombreux problèmes des travailleurs, des agents de l’Etat mais aussi les problèmes de chômage et de sous-emploi des jeunes. Elle a aussi à gérer d’autres réalités sociales pour le bien-être des populations. Bien conscient de l’immensité du chantier relatif à la dynamisation et à la modernisation de l’Administration publique Béninoise, le Président Patrice Talon, à l’occasion du remaniement ministériel du 27 octobre 2017, a renouvelé toute sa confiance à cette femme de défis en la maintenant à la tête du très stratégique Ministère du Budget et de la Fonction Publique. Cette confiance lui a été encore renouvelée lors de la formation du premier gouvernement du deuxième quinquennat du Président Patrice Talon en mai 2021. Maître à bord du navire MTFP, le Ministre Adidjatou MATHYS avec sérénité et détermination, travaille actuellement pour combler les attentes du chef de l’Etat conformément aux orientations du deuxième Programme d’Action du Gouvernement. Dans une atmosphère de confiance et d’affirmation de son leadership, elle s’active sans répit dans la quête de la réussite de sa mission Républicaine. Une carrière professionnelle réussie donc pour le Ministre Adidjatou MATHYS !
            </p>
            <!-- <div class="space-y-4">
              <div class="flex items-center">
                <span class="w-2 h-2 bg-primary-800 dark:bg-primary-400 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Docteur en Droit Public</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-primary-800 dark:bg-primary-400 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Experte en Administration Publique</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-primary-800 dark:bg-primary-400 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Ancienne Directrice Générale de la Fonction Publique</span>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Missions -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nos Missions</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Le Ministère du Budget et de la Fonction Publique agit sur plusieurs axes stratégiques 
            pour le développement socio-économique du Bénin.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let mission of missions" class="card p-8 text-center ">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mission.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ mission.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Organigramme -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Organisation</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">Structure organisationnelle du Ministère</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <!-- Ministre -->
          <div class="text-center mb-8 ">
            <div class="inline-block bg-primary-800 dark:bg-primary-700 text-white rounded-lg p-6 shadow-lg">
              <h3 class="text-lg font-semibold">Ministre</h3>
              <p class="text-sm opacity-90">Dr. Adidjatou MATHYS</p>
            </div>
          </div>
          
          <!-- Cabinet -->
          <div class="text-center mb-12 ">
            <div class="inline-block bg-primary-700 dark:bg-primary-600 text-white rounded-lg p-4 shadow-md">
              <h4 class="font-semibold">Cabinet du Ministre</h4>
            </div>
          </div>
          
          <!-- Directions -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div *ngFor="let direction of directions" class="card p-6 ">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ direction.nom }}</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ direction.description }}</p>
              <div class="space-y-2">
                <div *ngFor="let service of direction.services" class="text-sm text-gray-500 dark:text-gray-400 pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                  {{ service }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chiffres clés -->
    <!-- <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Le Ministère en chiffres</h2>
          <p class="text-xl text-primary-100 dark:text-primary-200">Notre impact sur l'emploi et la fonction publique</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let chiffre of chiffres" class="text-center ">
            <div class="text-4xl font-bold mb-2">{{ chiffre.valeur }}</div>
            <div class="text-primary-100 dark:text-primary-200">{{ chiffre.libelle }}</div>
          </div>
        </div>
      </div>
    </section> -->
  `
})
export class MinistereComponent implements AfterViewInit {
  
  missions = [
    {
      icone: '💼',
      titre: 'Promotion de l\'Emploi',
      description: 'Développer les politiques d\'emploi et faciliter l\'insertion professionnelle des jeunes et des demandeurs d\'emploi.'
    },
    {
      icone: '⚖️',
      titre: 'Relations de Travail',
      description: 'Assurer le respect du droit du travail et promouvoir le dialogue social entre employeurs et travailleurs.'
    },
    {
      icone: '🏛️',
      titre: 'Fonction Publique',
      description: 'Moderniser l\'administration publique et améliorer la gestion des ressources humaines de l\'État.'
    },
    {
      icone: '🛡️',
      titre: 'Protection Sociale',
      description: 'Garantir la protection sociale des travailleurs et développer les systèmes de sécurité sociale.'
    },
    {
      icone: '📚',
      titre: 'Formation Professionnelle',
      description: 'Promouvoir la formation continue et l\'adaptation des compétences aux besoins du marché.'
    },
    {
      icone: '🔍',
      titre: 'Inspection du Travail',
      description: 'Contrôler l\'application de la législation du travail et assurer la sécurité sur les lieux de travail.'
    }
  ];
  
  directions = [
    {
      nom: 'Direction Générale du Travail',
      description: 'Gestion des politiques de l\'emploi et des relations professionnelles.',
      services: [
        'Service de l\'Emploi et de l\'Insertion Professionnelle',
        'Service des Relations Professionnelles',
        'Service de l\'Inspection du Travail'
      ]
    },
    {
      nom: 'Direction Générale de la Fonction Publique',
      description: 'Administration et modernisation de la fonction publique.',
      services: [
        'Service de la Gestion des Carrières',
        'Service de la Formation des Agents',
        'Service de la Modernisation Administrative'
      ]
    },
    {
      nom: 'Direction des Affaires Administratives et Financières',
      description: 'Gestion administrative et financière du ministère.',
      services: [
        'Service du Personnel',
        'Service du Budget et de la Comptabilité',
        'Service du Matériel et de la Logistique'
      ]
    },
    {
      nom: 'Direction de la Programmation et de la Prospective',
      description: 'Planification stratégique et suivi des politiques publiques.',
      services: [
        'Service de la Planification',
        'Service du Suivi-Évaluation',
        'Service de la Coopération'
      ]
    }
  ];
  
  chiffres = [
    { valeur: '156', libelle: 'Agents publics formés' },
    { valeur: '2,5M', libelle: 'Travailleurs protégés' },
    { valeur: '45K', libelle: 'Entreprises suivies' },
    { valeur: '98%', libelle: 'Taux de satisfaction' }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}