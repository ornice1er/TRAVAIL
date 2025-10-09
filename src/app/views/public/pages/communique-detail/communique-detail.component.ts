import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Actualite } from '../../../../shared/models/actualite.model';

@Component({
  selector: "app-communique-detail",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-32 pb-16 bg-white dark:bg-gray-900" *ngIf="actualite">
      <div class="container-custom">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <a
            routerLink="/actualites"
            class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 inline-flex items-center"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux actualités
          </a>
        </nav>

        <!-- Article -->
        <article class="max-w-4xl mx-auto">
          <!-- En-tête -->
          <header class="mb-8">
            <div class="flex items-center mb-4">
              <span
                class="bg-primary-800 dark:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium mr-4"
              >
                {{ actualite.categorie }}
              </span>
              <span class="text-gray-500 dark:text-gray-400">{{
                actualite.datePublication | date : "d MMMM yyyy" : "fr"
              }}</span>
            </div>
            <h1
              class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              {{ actualite.titre }}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ actualite.resume }}
            </p>
          </header>

          <!-- Image -->
          <div class="mb-8">
            <img
              [src]="actualite.imageUrl"
              [alt]="actualite.titre"
              class="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- Contenu -->
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Le Ministère du Travail et de la Fonction Publique de la
              République du Bénin franchit une étape majeure dans sa
              transformation numérique avec le lancement officiel de son nouveau
              portail en ligne dédié à l'emploi et aux services administratifs.
            </p>

            <h2>Une plateforme révolutionnaire</h2>
            <p>
              Cette nouvelle plateforme digitale représente un investissement
              stratégique de plus de 2 milliards de FCFA dans la modernisation
              des services publics. Elle permettra aux citoyens béninois
              d'accéder facilement à une gamme complète de services en ligne,
              24h/24 et 7j/7.
            </p>

            <h3>Fonctionnalités principales</h3>
            <ul>
              <li>
                Recherche d'emploi personnalisée avec matching intelligent
              </li>
              <li>Dépôt de CV et gestion de profil professionnel</li>
              <li>Suivi des candidatures en temps réel</li>
              <li>Services administratifs dématérialisés</li>
              <li>Formation continue et certification professionnelle</li>
            </ul>

            <h2>Impact attendu</h2>
            <p>
              Selon les projections du Ministère, cette plateforme devrait
              permettre de réduire le délai moyen de recherche d'emploi de 30%
              et d'améliorer significativement l'efficacité des processus
              administratifs. Plus de 500 000 utilisateurs sont attendus dans
              les 12 premiers mois.
            </p>

            <blockquote>
              "Cette initiative s'inscrit parfaitement dans la vision du
              gouvernement de faire du Bénin un hub numérique en Afrique de
              l'Ouest. Nous mettons la technologie au service de nos citoyens
              pour leur faciliter l'accès à l'emploi."
              <cite>- Dr. Adidjatou MATHYS, Ministre du Travail</cite>
            </blockquote>
          </div>

          <!-- Tags -->
          <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white mb-4"
            >
              Mots-clés :
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                *ngFor="let tag of actualite.tags"
                class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Partage -->
          <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white mb-4"
            >
              Partager cet article :
            </h4>
            <div class="flex space-x-4">
              <button
                class="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
                <span>Twitter</span>
              </button>
              <button
                class="flex items-center space-x-2 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  />
                </svg>
                <span>Facebook</span>
              </button>
              <button
                class="flex items-center space-x-2 text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.9v6.2h.02z"
                  />
                </svg>
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Articles similaires -->
    <section
      class="section-padding bg-gray-50 dark:bg-gray-800"
      *ngIf="actualite"
    >
      <div class="container-custom">
        <h3
          class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Articles similaires
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            *ngFor="let article of articlesSimilaires"
            class="card overflow-hidden"
          >
            <div class="h-48 overflow-hidden">
              <img
                [src]="article.imageUrl"
                [alt]="article.titre"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {{ article.datePublication | date : "d MMM yyyy" : "fr" }}
              </div>
              <h4
                class="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2"
              >
                {{ article.titre }}
              </h4>
              <a
                [routerLink]="['/actualites', article.id]"
                class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium"
              >
                Lire la suite →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `,
  ],
})
export class CommuniqueDetailComponent {
actualite: Actualite | null = null;
  actualiteId!: number;
articlesSimilaires: Actualite[]=[];
  articles: Actualite[] = [
    {
      id: 2,
      titre:
        "Message du Ministre du Travail et de la Fonction Publique à l'occasion de la commémoration de la fête internationale du travail.",
      resume:
        "Message de Madame Adidjatou A. MATHYS, Ministre du Travail et de la Fonction Publique à L’occasion de la commémoration de da fête internationale du travail.",
      contenu: `Message de Madame Adidjatou A. MATHYS, Ministre du Travail et de la Fonction Publique

à
L’occasion de la commémoration de da fête internationale du travail

Cotonou, le 1er mai 2022


•    Béninoises et Béninois ;
•    Mesdames et Messieurs les employeurs ;
•    Chers travailleurs du Bénin ;
•    Mesdames et Messieurs,

Notre pays le Bénin, à l’instar des autres pays du monde entier, commémore ce jour, dimanche 1er mai 2022, la fête internationale du travail. A cette occasion, je souhaite à tous les travailleurs de notre pays, une bonne fête.
Il convient de rappeler, que la fête internationale du travail est commémorée le 1er mai de chaque année, en reconnaissance des sacrifices consentis par les travailleurs au cours d’une période historique donnée où la dignité, le respect des droits individuels et collectifs étaient revendiqués. Elle s’inscrit également dans la quête de la justice et de l’équité sociale dans le monde.

Je voudrais saisir l’opportunité qui m’est offerte, pour témoigner la reconnaissance du Gouvernement à l’endroit de tous les travailleurs, hommes et femmes, qui par leur intelligence et leur travail, participent au développement et à la prospérité de notre cher et beau pays le Bénin.
Je voudrais aussi exprimer ma compassion et ma sympathie aux parents et proches de tous les travailleurs tombés sur les chantiers de développement de la nation. Je leur réitère tout le soutien du  Gouvernement. 
Quant aux travailleurs vivant avec une maladie, une blessure ou une séquelle engendrée par le travail, je leur souhaite beaucoup de courage et une amélioration satisfaisante de leur état de santé.

Mesdames et Messieurs,
Au-delà de sa dimension historique et festive, la fête internationale du travail doit être une opportunité offerte à tous les acteurs du monde du travail d’examiner les progrès réalisés au sein de leur unité de production et de réfléchir sur les défis qui s’imposent à eux. 
La célébration de la fête du travail dans notre pays cette année, intervient au lendemain des négociations collectives   entre le Gouvernement, le patronnat et les confédérations syndicales de travailleurs représentatives, relatives à la revalorisation des salaires des agents de l’Etat et du Salaire Minimum Interprofessionnel Garanti (SMIG). 

Comme vous l’avez remarqué, le Chef de l’Etat le Président Patrice TALON a personnellement conduit les échanges le 26 avril 2022, en raison de l’importance qu’il accorde à la question.
Pour ce qui concerne le SMIG, les négociations ont abouti à la fixation d’un montant de 52.000 FCFA correspondant à une augmentation de 30% de son quantum actuel qui est de 40.000 F CFA. Et à cela, il faut ajouter l’obligation pour les employeurs, dès que l’assurance-maladie obligatoire sera intégralement mise en œuvre, de prendre en charge, le paiement de la prime de leurs employés payés au SMIG, comme d’ailleurs pour le reste de leur personnel.
Bien évidemment, le Gouvernement aurait voulu, au même titre que les travailleurs, d’une augmentation plus substantielle du SMIG. Mais dans les circonstances actuelles, marquées par les effets de la pandémie de la COVID-19 et surtout par les conséquences de la guerre en Ukraine sur l’économie mondiale, il faut bien admettre que ce niveau de relèvement du SMIG est déjà une bonne avancée. Les employeurs, ainsi qu’ils l’ont rappelé et chacun de nous en est conscient, sont préoccupés par l’incertitude que fait planer cette guerre sur les perspectives économiques. Il leur fallait donc, tout en comprenant les aspirations des travailleurs, faire preuve de prudence en vue d’assurer la viabilité des entreprises afin que celles-ci continuent d’employer du personnel et d’en recruter.
Quant à la revalorisation des salaires des agents de l’État, le Gouvernement, après avoir convenu d’un mécanisme d’augmentation avec les partenaires sociaux, entend poursuivre les négociations avec ceux-ci, en vue de parvenir à la revalorisation effective desdits salaires avant la fin de l’année 2022.
D’ores et déjà, le principe d’une augmentation globale des revenus des ayants droit de l’Etat a été retenu. Sa mise en œuvre permettra non seulement de relever le niveau des salaires des agents de l’Etat, mais aussi des pensions des retraités, que le Gouvernement n’entend pas laisser pour compte.
Pour ce qui concerne les travailleurs, il sera procédé à une augmentation différenciée selon les niveaux de rémunération. Cette démarche vise, dans une logique de justice sociale, à améliorer beaucoup plus les bas salaires.
Chers compatriotes,
Mesdames et Messieurs,
Le Gouvernement qui a pris l’initiative de cette revalorisation en décembre 2021, aurait bien voulu la mettre en œuvre dès les premiers mois de l’année 2022. Mais avec la crise économique mondiale aggravée par les conséquences néfastes de la guerre en Ukraine, le sens de responsabilité appelle à la prudence afin d’éviter un saut dans l’inconnu d’autant plus que le budget de l’État, nous le savons tous, est essentiellement fiscal et qu’avec la situation actuelle, les recettes connaissent une baisse. Or  dans le même temps, le Gouvernement a dû prendre différentes  mesures sociales pour contrer un tant soit peu, les conséquences de la cherté de la vie sur le pouvoir d’achat des populations d’une part et de l’autre, mis en place une batterie de mesures de soutien financier au secteur agricole afin d’assurer la réussite de la campagne agricole 2022-2023 et garantir la sécurité alimentaire à notre pays. Toutes ces mesures ont coûté et continuent de coûter  plusieurs milliards de francs CFA à la caisse de l’Etat. 
Tout en rassurant donc les travailleurs de ce que le Gouvernement tient à l’effectivité de la revalorisation des salaires au cours de cette année, je voudrais en appeler à leur sens de responsabilité dans l’intérêt supérieur de la nation.
Mesdames et Messieurs,
Dans sa démarche constante de recherche d’amélioration des conditions de travail, le Gouvernement poursuivra ses efforts dans la perspective de satisfaire les revendications collectives des travailleurs en général et celles ayant une incidence financière en particulier tant qu’elles seront soutenables par les moyens dont dispose l’Etat.
A cet égard, je rassure de la volonté du Gouvernement de faire du dialogue social permanent inclusif l’outil d’un partenariat utile et responsable pour asseoir et maintenir un bon climat des affaires indispensable au développement et à l’amélioration de la qualité et des conditions de vie des travailleurs.
Je puis vous assurer aussi que mon département ministériel ne ménagera aucun effort pour la promotion et la consolidation de ce dialogue.
Pour clore mes propos, je voudrais compter sur la compréhension et l’engagement des partenaires sociaux pour l’édification d’un Bénin où règnent la paix et la justice sociale.
C’est sur ces mots d’exhortation que je souhaite encore une fois, au nom du Gouvernement, une bonne fête du travail à tous les travailleurs de notre pays.

Vive le Bénin !
Je vous remercie.`,
      imageUrl:
        "https://www.travail.gouv.bj/storage/actualites/big/message-du-ministre-du-travail-et-de-la-fonction-publique-a-loccasion-de-la-commemoration-de-la-fete-internationale-du-travail-big.png",
      datePublication: new Date("2025-09-09 18:44:48"),
      auteur: "Direction de la Communication",
      categorie: "Messages",
      slug: "discours",
      tags: ["salaire", "SMIG", "travailleurs"],
    },
    {
      id: 3,
      titre: "PRESENTATION DU PROJET DE BUDGET GESTION 2022 DU MINISTERE DU TRAVAIL ET DE LA FONCTION PUBLIQUE A LA COMMISSION BUDGETAIRE DE L’ASSEMBLEE NATIONALE",
      resume:
        "PRESENTATION DU PROJET DE BUDGET GESTION 2022 DU MINISTERE DU TRAVAIL ET DE LA FONCTION PUBLIQUE A LA COMMISSION BUDGETAIRE DE L’ASSEMBLEE NATIONALE",
      contenu: `Le Ministre du Travail et de la Fonction Publique était le lundi 15 novembre 2021, face aux membres de la Commission Budgétaire de l’Assemblée Nationale. L’objectif pour le Ministre Adidjatou MATHYS était de présenter le projet de budget gestion 2022 de son département ministériel.

Les crédits alloués au MTFP s’élèvent à 7 milliards 188 millions 882 mille 450 francs CFA. Équilibré en emplois et en ressources, ce budget est réparti suivant deux grandes rubriques à savoir les dépenses ordinaires pour un montant de 6 milliards 723 millions 882 mille 450 FCFA et les dépenses en capital pour un montant de 465 millions de FCFA.

Le budget exercice 2022 du MTFP a connu une réduction de 0,54% par rapport à celui de 2021 passant ainsi de 7 227 792 899 FCFA à 7 188 882 450 FCFA.

Selon le Ministre Adidjatou MATHYS, ce Budget s’inscrit dans la dynamique de l’utilisation rationnelle des fonds publics. Il vise la réalisation des objectifs d’une croissance économique accélérée et de lutte contre la pauvreté en général et la construction d’une Administration de développement en particulier. Ce Projet de Budget a été élaboré conformément aux directives contenues dans la lettre de cadrage budgétaire du Ministère de l’Économie et des Finances définissant les conditions d’élaboration du projet de Budget Général de l’État, gestion 2022.

Le portefeuille actif du Ministère pour le triennal 2022-2024 comporte trois projets qui cadrent avec les choix de la politique économique et sociale du Gouvernement, exercice 2022 et renforcent les domaines d’intervention de la modernisation de l’administration publique, la réforme administrative et institutionnelle et celui du renforcement des Capacités Institutionnelles. Il s’agit du :

- Programme de Renforcement des Capacités du MTFP (PRC-MTFP) qui vise la construction et l’équipement des directions départementales du MTFP ;

- Projet d‘Appui à la Réforme et à la Modernisation de l’Administration Publique (PARMAP) qui vise la modernisation de l’administration publique béninoise. Il est cofinancé par le PNUD à hauteur de 165 millions avec une contrepartie nationale de 26 millions de FCFA.

- Projet d’Appui à la Modernisation de la Gestion des Ressources Humaines de l’Etat (PAMGRHE). C’est un nouveau projet qui, s’il est admis dans le PAG2, visera à moderniser la gestion des ressources humaines de l’Etat et à mettre en place à terme le SIGRHP en vue d’assurer la maitrise de la masse salariale. Il est financé sur le budget national à au moins 100 millions de FCFA en 2022.

Il faut préciser que conformément au décret nº 2021-562 du 03 novembre 2021 portant Attributions, Organisation et Fonctionnement (AOF), le Ministère du Travail et de la Fonction Publique a pour mission la définition, l’élaboration et le suivi-évaluation de la politique de l’État en matière de travail et de fonction publique ainsi que le suivi des réformes administratives et institutionnelles, conformément aux lois et règlements en vigueur.`,
      imageUrl:
        "https://www.travail.gouv.bj/storage/actualites/big/presentation-du-projet-de-budget-gestion-2022-du-ministere-du-travail-et-de-la-fonction-publique-a-la-commission-budgetaire-de-lassemblee-nationale-big.jpg",
      datePublication: new Date("2021-12-15 15:05:16"),
      auteur: "ANPE",
      categorie: "Reportages",
      slug: "interviews",
      tags: ["jeunes", "formation", "emploi"],
    },
    {
      id: 4,
      titre: "Concours de recrutement de 172 fonctionnaires de l'État au profit au profit du MEF",
      resume:
        "Reprise de la composition dans le corps des Ingénieurs de la Statistique et celui des Ingénieurs des Services Techniques des Travaux Publics option BTP, pour le samedi 15 novembre 2025",
      contenu: "Reprise de la composition dans le corps des Ingénieurs de la Statistique et celui des Ingénieurs des Services Techniques des Travaux Publics option BTP, pour le samedi 15 novembre 2025",
      imageUrl:
        "https://www.travail.gouv.bj/assets/images/tour2.jpeg",
      datePublication: new Date("2023-12-20"),
      auteur: "Cabinet du Ministre",
      categorie: "Communiqués",
      slug: "communiques",
      tags: ["forum", "jeunes", "emploi", "entreprises"],
    },
    {
      id: 5,
      titre: "Session extraordinaire de la Commission Nationale de Concertation, de Consultation et de Négociations Collectives",
      resume:
        "Le gouvernement et les partenaires sociaux évaluent les préparatifs pour une bonne rentrée scolaire 2025-2026",
      contenu: `Une session extraordinaire de la Commission Nationale de Concertation, de Consultation et de Négociations Collectives s’est tenue ce mardi 09 septembre 2025 à la salle des fêtes des tours administratives. Objectif : faire le point sur la rentrée scolaire et universitaire à venir, dans un climat de dialogue entre gouvernement et syndicats. Présidée par le Ministre d’État chargé du Développement et de la Coordination de l’Action Gouvernementale, Abdoulaye BIO TCHANÉ, la cérémonie officielle d’ouverture de cette session s’est déroulée en présence d’une forte délégation ministérielle et de nombreux acteurs du secteur éducatif.

Cette session a permis aux représentants syndicaux de soumettre leurs doléances et revendications aux autorités gouvernementales, dans une logique de concertation constructive. Il s’agissait notamment d’interpeller l’exécutif sur les conditions de travail des enseignants, la gestion des carrières, l’équité dans la répartition des ressources, et la nécessité d’un dialogue social plus structuré et permanent.

Bilan positif, mais vigilance maintenue
Dans son allocution, le Ministre d'État Abdoulaye BIO TCHANÉ a salué les efforts déployés collectivement au cours des dernières années, qui ont permis une nette amélioration des résultats aux examens nationaux : CEP : 89,81 % en 2025 contre 89,67 % en 2024 ; BEPC : 77,25 % contre 73,74 % ; Baccalauréat : 73,02 %, en forte progression par rapport aux 56,91 % enregistrés l’an passé.
Ces résultats, a-t-il souligné, sont le fruit des réformes engagées, du professionnalisme des enseignants et du dialogue constant avec les partenaires sociaux.

Maintenir le cap des réformes
Toutefois, le ministre d’État a reconnu que des défis majeurs demeurent : amélioration des conditions de vie et de travail des enseignants, adaptation des curricula, répartition équitable des infrastructures, inclusion numérique, et réduction des inégalités d’accès à l’éducation.
Le gouvernement, selon lui, reste engagé dans la réalisation de l’Objectif de Développement Durable n°4 qui est de garantir une éducation inclusive, équitable et de qualité. Il entend poursuivre les réformes, en comptant sur les ressources nationales comme les cantines scolaires et la formation technique, tout en renforçant la collaboration avec les partenaires au développement.

Le gouvernement était représenté par plusieurs membres de premier plan, notamment :
Adidjatou MATHYS (MTFP), Yvon DETCHENOU, (GS-MJL),  Salimane KARIMOU (MEMP), Véronique TOGNIFODE (MESTFP), Éléonore YAYI LADEKAN (MESRS), Rodrigue CHAOU, Directeur Général du Budget, représentant le Ministre de l’Économie et des Finances.

Syndicats et patronat à la table des échanges
Du côté des partenaires sociaux, on notait la présence des principales centrales syndicales du pays, notamment : la Confédération Syndicale des Travailleurs du Bénin (CSTB) ; la Confédération des Organisations Syndicales Indépendantes du Bénin (COSI-Bénin) ; la Confédération des Syndicats Autonomes du Bénin (CSA-Bénin).
Les représentants du Conseil National du Patronat du Bénin (CNP-Bénin) et de la Confédération Nationale des Employeurs du Bénin (CONEB) ont également pris part aux travaux, marquant ainsi la diversité et l'inclusivité des parties prenantes impliquées dans la gouvernance du système éducatif.

En termes de diligences, le Gouvernement a mis à disposition, une avance de trésorerie de plus d'un milliard cinq cents millions de FCFA. Les primes de rentrée pour les enseignants et les prestations des AME seront réglées dans la période du 20 au 25 septembre. Les avances de trésorerie pour les besoins de fonctionnement au 1er trimestre des établissements sont également disponibles.

Un appel à l’unité et à la responsabilité
En conclusion, le Ministre d’État a renouvelé la reconnaissance du gouvernement à l’endroit des partenaires sociaux, des enseignants, des parents d’élèves et des apprenants. Citant Kofi Annan, il a appelé à faire de l’éducation un pilier de paix, de justice sociale et de prospérité partagée.`,
      imageUrl:
        "https://www.travail.gouv.bj/storage/actualites/big/session-extraordinaire-de-la-commission-nationale-de-concertation-de-consultation-et-de-negociations-collectives-big.JPG",
      datePublication: new Date("2025-09-09 18:44:48"),
      auteur: "Direction Générale du Travail",
    categorie: "Comptes rendus",
    slug: "comptes-rendus",
      tags: ["télétravail", "réglementation", "flexibilité"],
    },
    {
      id: 6,
      titre: "Audience au Cabinet du MTFP",
      resume:
        "Le Directeur Général du CRADAT reçu en audience par le Ministre Adidjatou MATHYS",
      contenu: `Suite à la formation organisée par le Centre Régional d’Administration du Travail au profit des Inspecteurs du travail, des médecins du travail et des partenaires sociaux du 21 au 25 juillet 2025 à Cotonou, le Directeur Général du CRADAT, Arsène Armand HIEN est allé rendre compte dans la soirée du jeudi 24 juillet 2025, au Ministre Adidjatou MATHYS de son déroulement. Ladite formation a porté sur le thème : « Inspection du travail à l’ère de l’intelligence artificielle ». Elle s’inscrit dans le cadre de la mise en œuvre du programme d’activités 2025 : volet formation foraine dans les Etats membres de l’institution africaine. Le DG CRADAT se dit satisfait de la tenue de cette formation au Bénin et de la participation active des bénéficiaires. 
Les deux personnalités ont aussi abordé des points relatifs au fonctionnement et à la dynamisation du CRADAT.`,
      imageUrl:
        "https://www.travail.gouv.bj/storage/actualites/big/audience-au-cabinet-du-mtfp-big.jpeg",
      datePublication: new Date("2023-12-10"),
      auteur: "Direction Générale de la Fonction Publique",
      categorie: "Comptes rendus",
      slug: "comptes-rendus",
      tags: ["digitalisation", "fonction publique", "efficacité"],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.actualiteId = +params["id"];
      this.actualite = this.articles.find(
        (a) => a.id === this.actualiteId
      ) as Actualite;

      this.articlesSimilaires = this.articles.filter(a=> a.id !== this.actualiteId).slice(0,3);
    });
    // Simuler la récupération de l'actualité par ID
//     this.actualite = {
//       id: 1,
//       titre:
//         "Ouverture des travaux de la 2ᵉ session ordinaire du Comité Directeur National de lutte contre le travail des enfants",
//       resume:
//         "La deuxième session ordinaire du Comité Directeur National (CDN) de lutte contre le travail des enfants s’est ouverte ce mardi 23 septembre 2025 à la salle des fêtes des Tours Administratives à Cotonou. La cérémonie d’ouverture a connu, entre autres, la présence de la représentante du Conseil National du Patronat du Bénin (CNP-Bénin), de la représentante de la CONEB, du président de l’OBISACOTE, de la représentante du représentant résident de l’UNICEF, des membres du cabinet du ministre du Travail et de la Fonction Publique, des directeurs centraux, généraux et techniques, ainsi que des représentants des ministères, des confédérations syndicales et des ONG impliquées dans la chaîne de protection de l’enfant.",
//       contenu: `Au nombre des intervenants, le Directeur Général du Travail, Edgard Dahoui, a souhaité la bienvenue aux participants. À sa suite, le président de l’OBISACOTE a relevé un point essentiel de l’ordre du jour : l’enrichissement et la prévalidation du rapport décennal 2014-2024 en matière de lutte contre le travail des enfants. Ce rapport revêt trois missions essentielles au-delà des objectifs. « La première mission est une mission rétrospective. La 2e mission est de faire le bilan et la 3e mission est une mission prospective. Le rapport permettra in fine de booster la lutte contre le travail des enfants et c’est pour cela que notre détermination au sein du CDN est capitale pour que nous puissions arriver à cette fin », a-t-il indiqué.

// Prenant la parole au nom du Conseil National du Patronat, Marlyse Hounon a rappelé l’engagement des entreprises et leur rôle dans la scolarisation des enfants vulnérables : « L’entreprise ne peut prospérer sur les ruines de l’enfance », a-t-elle souligné, tout en évoquant la préparation de la conférence mondiale 2026 sur le travail des enfants et l’importance de la réédition de la campagne « Tolérance zéro au travail des enfants ».

// À en croire Eléonore Soglohoun, représentante du représentant résident de l’UNICEF au Bénin, « Plus de 7 500 enfants en situation de travail ont été identifiés à travers des missions d’inspection intersectorielles menées par les directions départementales du travail et la Brigade des mœurs de 2024 à 2025. » Ces interventions ont permis, a-t-elle poursuivi, « le retrait effectif de plus de 1 500 enfants exposés aux pires formes de travail », d’où la nécessité, selon elle, de renforcer les actions pour atteindre la cible 8.7 de l’OIT.

// Dans son mot d’ouverture des travaux de la session, Victorin Honvoh, directeur de cabinet représentant la ministre Adidjatou Mathys, a rappelé les objectifs : enrichissement du rapport décennal, mise en œuvre des recommandations et élaboration du Plan de Travail Annuel 2026. « Les enfants sont notre avenir et nous avons de grandes responsabilités à assumer envers eux », a-t-il insisté.

// La session se poursuit jusqu’au 25 septembre 2025, offrant une plateforme de dialogue et de décisions concrètes pour la protection des enfants au Bénin.`,
//       imageUrl:
//         "https://www.travail.gouv.bj/storage/actualites/big/ouverture-des-travaux-de-la-2-session-ordinaire-du-comite-directeur-national-de-lutte-contre-le-travail-des-enfants-big.jpeg",
//       datePublication: new Date("2025-09-24 14:04:52"),
//       auteur: "Ministère du Travail",
//       categorie: "Comptes rendus",
//       slug: "comptes-rendus",
//       tags: ["emploi", "numérique", "innovation"],
//     };
  }

}
