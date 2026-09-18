import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
export const PublicRounting: Routes = [
    {
      path:"",
      component:PublicLayoutComponent,
      children:[
            {
    path: '',
    loadComponent: () => import('./pages/accueil/accueil.component').then(m => m.AccueilComponent),
    data: { seo: { title: 'Accueil', description: 'Site officiel du Ministère du Budget et de la Fonction Publique du Bénin : services en ligne, concours, communiqués, actualités et textes de référence.' } }
  },
  {
    path: 'ministere',
    loadComponent: () => import('./pages/ministere/ministere.component').then(m => m.MinistereComponent),
    data: { seo: { title: 'Le Ministère', description: 'Missions, organisation et directions du Ministère du Budget et de la Fonction Publique de la République du Bénin.' } }
  },
  {
    path: 'ministere/le-ministre',
    loadComponent: () => import('./pages/ministere/le-ministre/le-ministre.component').then(m => m.LeMinistereComponent),
    data: { seo: { title: 'Le Ministre', description: 'Biographie et actions du Ministre du Budget et de la Fonction Publique de la République du Bénin.' } }
  },
  {
    path: 'ministere/le-cabinet',
    loadComponent: () => import('./pages/ministere/cabinet/cabinet.component').then(m => m.CabinetComponent),
    data: { seo: { title: 'Le Cabinet', description: 'Composition et missions du cabinet du Ministre du Budget et de la Fonction Publique.' } }
  },
  {
    path: 'ministere/notre-vision',
    loadComponent: () => import('./pages/ministere/notre-vision/notre-vision.component').then(m => m.NotreVisionComponent),
    data: { seo: { title: 'Notre vision', description: 'Bâtir une administration moderne et performante, pour un service public de qualité et un travail décent.' } }
  },
  {
    path: 'ministere/secretariat-general',
    loadComponent: () => import('./pages/ministere/secretariat-general/secretariat-general.component').then(m => m.SecretariatGeneralComponent),
    data: { seo: { title: 'Secrétariat Général', description: 'Rôle et organisation du Secrétariat Général du Ministère du Budget et de la Fonction Publique.' } }
  },
  {
    path: 'ministere/inspection-generale',
    loadComponent: () => import('./pages/ministere/inspection-generale/inspection-generale.component').then(m => m.InspectionGeneraleComponent),
    data: { seo: { title: 'Inspection Générale des Services et Emplois Publics', description: 'Missions de contrôle et d\'inspection des services et emplois publics.' } }
  },
  {
    path: 'ministere/direction-planification',
    loadComponent: () => import('./pages/ministere/direction-planification/direction-planification.component').then(m => m.DirectionPlanificationComponent),
    data: { seo: { title: 'Direction de la Planification, de l\'Administration et des Finances', description: 'Missions et organisation de la DPAF du Ministère du Budget et de la Fonction Publique.' } }
  },
  {
    path: 'ministere/direction-systemes-information',
    loadComponent: () => import('./pages/ministere/direction-systemes-information/direction-systemes-information.component').then(m => m.DirectionSystemesInformationComponent),
    data: { seo: { title: 'Direction des Systèmes d\'Information', description: 'Missions de la DSI : systèmes d\'information et transformation numérique du ministère.' } }
  },
  {
    path: 'ministere/direction-generale-travail',
    loadComponent: () => import('./pages/ministere/direction-generale-travail/direction-generale-travail.component').then(m => m.DirectionGeneraleTravailComponent),
    data: { seo: { title: 'Direction Générale du Travail', description: 'Missions de la DGT : relations professionnelles, sécurité au travail et dialogue social.' } }
  },
  {
    path: 'ministere/direction-generale-fonction-publique',
    loadComponent: () => import('./pages/ministere/direction-generale-fonction-publique/direction-generale-fonction-publique.component').then(m => m.DirectionGeneraleFonctionPubliqueComponent),
    data: { seo: { title: 'Direction Générale de la Fonction Publique', description: 'Missions de la DGFP : carrière des agents de l\'État, concours et gestion des effectifs.' } }
  },
  {
    path: 'ministere/direction-budget',
    loadComponent: () => import('./pages/ministere/direction-budget/direction-budget.component').then(m => m.DirectionBudgetComponent),
    data: { seo: { title: 'Direction Générale du Budget', description: 'Missions de la DGB : préparation, exécution et suivi du budget de l\'État.' } }
  },
  {
    path: 'ministere/direction-renforcement-capacites',
    loadComponent: () => import('./pages/ministere/direction-renforcement-capacites/direction-renforcement-capacites.component').then(m => m.DirectionRenforcementCapacitesComponent),
    data: { seo: { title: 'Direction Générale du Renforcement des Capacités et de l\'Employabilité', description: 'Missions de la DGRCE : formation, renforcement des capacités et employabilité.' } }
  },
  {
    path: 'ministere/cellule-suivi-reformes',
    loadComponent: () => import('./pages/ministere/cellule-suivi-reformes/cellule-suivi-reformes.component').then(m => m.CelluleSuiviReformesComponent),
    data: { seo: { title: 'Cellule de Suivi des Réformes', description: 'Pilotage et suivi des réformes administratives et institutionnelles du ministère.' } }
  },
  {
    path: 'ministere/directions-departementales',
    loadComponent: () => import('./pages/ministere/directions-departementales/directions-departementales.component').then(m => m.DirectionsDepartementalesComponent),
    data: { seo: { title: 'Directions Départementales', description: 'Coordonnées et missions des directions départementales du ministère au Bénin.' } }
  },
  {
    path: 'ministere/structures-sous-tutelle',
    loadComponent: () => import('./pages/ministere/structures-sous-tutelle/structures-sous-tutelle.component').then(m => m.StructuresSousTutelleComponent),
    data: { seo: { title: 'Structures sous tutelle', description: 'Organismes et structures placés sous la tutelle du Ministère du Budget et de la Fonction Publique.' } }
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    data: { seo: { title: 'Services en ligne', description: 'Effectuez vos démarches administratives en ligne : actes, visas de contrat, attestations et suivi de carrière.' } }
  },
  {
    path: 'textes-lois',
    loadComponent: () => import('./pages/textes-lois/textes-lois.component').then(m => m.TextesLoisComponent),
    data: { seo: { title: 'Textes & Lois', description: 'Lois, décrets, arrêtés et textes de référence du Ministère du Budget et de la Fonction Publique.' } }
  },
  {
    path: 'actualites',
    loadComponent: () => import('./pages/actualites/actualites.component').then(m => m.ActualitesComponent),
    data: { seo: { title: 'Actualités', description: 'Toute l\'actualité du Ministère du Budget et de la Fonction Publique de la République du Bénin.' } }
  },
  {
    path: 'actualites/:id',
    loadComponent: () => import('./pages/actualite-detail/actualite-detail.component').then(m => m.ActualiteDetailComponent),
    data: { seo: { title: 'Actualité', description: 'Actualité du Ministère du Budget et de la Fonction Publique.' } }
  },

    {
    path: 'communiques',
    loadComponent: () => import('./pages/communiques/communiques.component').then(m => m.CommuniquesComponent),
    data: { seo: { title: 'Communiqués', description: 'Communiqués officiels du Ministère du Budget et de la Fonction Publique.' } }
  },
  {
    path: 'communiques/:id',
    loadComponent: () => import('./pages/communique-detail/communique-detail.component').then(m => m.CommuniqueDetailComponent),
    data: { seo: { title: 'Communiqué', description: 'Communiqué du Ministère du Budget et de la Fonction Publique.' } }
  },

    {
    path: 'concours',
    loadComponent: () => import('./pages/concours/concours.component').then(m => m.ConcoursComponent),
    data: { seo: { title: 'Concours', description: 'Avis de concours, calendriers et résultats de la fonction publique béninoise.' } }
  },
  {
    path: 'concours/:id',
    loadComponent: () => import('./pages/concours-detail/concours-detail.component').then(m => m.ConcoursDetailComponent),
    data: { seo: { title: 'Concours', description: 'Avis de concours de la fonction publique béninoise.' } }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: { seo: { title: 'Contact', description: 'Contactez le Ministère du Budget et de la Fonction Publique : adresse, téléphone, courriel et formulaire.' } }
  },
  {
    path: 'fiches-metiers',
    loadComponent: () => import('./pages/fiches-metiers/fiches-metiers.component').then(m => m.FichesMetiersComponent),
    data: { seo: { title: 'Fiches métiers', description: 'Découvrez les métiers de la fonction publique béninoise : missions, compétences et parcours.' } }
  },
  {
    path: 'fiches-metiers/:id',
    loadComponent: () => import('./pages/fiches-metiers-detail/fiches-metiers-detail.component').then(m => m.FichesMetiersDetailComponent),
    data: { seo: { title: 'Fiche métier', description: 'Fiche métier de la fonction publique béninoise.' } }
  },
  {
    path: 'recherche',
    loadComponent: () => import('./pages/recherche/recherche.component').then(m => m.RechercheComponent),
    data: { seo: { title: 'Recherche', description: 'Recherchez une actualité, un communiqué, un concours ou un document sur le site du ministère.', noIndex: true } }
  },
      ]
    }
]