import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
export const PublicRounting: Routes = [
    {
      path:"",
      component:PublicLayoutComponent,
      children:[
            {
    path: '',
    loadComponent: () => import('./pages/accueil/accueil.component').then(m => m.AccueilComponent)
  },
  {
    path: 'ministere',
    loadComponent: () => import('./pages/ministere/ministere.component').then(m => m.MinistereComponent)
  },
  {
    path: 'ministere/le-ministre',
    loadComponent: () => import('./pages/ministere/le-ministre/le-ministre.component').then(m => m.LeMinistereComponent)
  },
  {
    path: 'ministere/notre-vision',
    loadComponent: () => import('./pages/ministere/notre-vision/notre-vision.component').then(m => m.NotreVisionComponent)
  },
  {
    path: 'ministere/secretariat-general',
    loadComponent: () => import('./pages/ministere/secretariat-general/secretariat-general.component').then(m => m.SecretariatGeneralComponent)
  },
  {
    path: 'ministere/inspection-generale',
    loadComponent: () => import('./pages/ministere/inspection-generale/inspection-generale.component').then(m => m.InspectionGeneraleComponent)
  },
  {
    path: 'ministere/direction-planification',
    loadComponent: () => import('./pages/ministere/direction-planification/direction-planification.component').then(m => m.DirectionPlanificationComponent)
  },
  {
    path: 'ministere/direction-systemes-information',
    loadComponent: () => import('./pages/ministere/direction-systemes-information/direction-systemes-information.component').then(m => m.DirectionSystemesInformationComponent)
  },
  {
    path: 'ministere/direction-generale-travail',
    loadComponent: () => import('./pages/ministere/direction-generale-travail/direction-generale-travail.component').then(m => m.DirectionGeneraleTravailComponent)
  },
  {
    path: 'ministere/direction-generale-fonction-publique',
    loadComponent: () => import('./pages/ministere/direction-generale-fonction-publique/direction-generale-fonction-publique.component').then(m => m.DirectionGeneraleFonctionPubliqueComponent)
  },
  {
    path: 'ministere/direction-renforcement-capacites',
    loadComponent: () => import('./pages/ministere/direction-renforcement-capacites/direction-renforcement-capacites.component').then(m => m.DirectionRenforcementCapacitesComponent)
  },
  {
    path: 'ministere/cellule-suivi-reformes',
    loadComponent: () => import('./pages/ministere/cellule-suivi-reformes/cellule-suivi-reformes.component').then(m => m.CelluleSuiviReformesComponent)
  },
  {
    path: 'ministere/directions-departementales',
    loadComponent: () => import('./pages/ministere/directions-departementales/directions-departementales.component').then(m => m.DirectionsDepartementalesComponent)
  },
  {
    path: 'ministere/structures-sous-tutelle',
    loadComponent: () => import('./pages/ministere/structures-sous-tutelle/structures-sous-tutelle.component').then(m => m.StructuresSousTutelleComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'textes-lois',
    loadComponent: () => import('./pages/textes-lois/textes-lois.component').then(m => m.TextesLoisComponent)
  },
  {
    path: 'actualites',
    loadComponent: () => import('./pages/actualites/actualites.component').then(m => m.ActualitesComponent)
  },
  {
    path: 'actualites/:id',
    loadComponent: () => import('./pages/actualite-detail/actualite-detail.component').then(m => m.ActualiteDetailComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'fiches-metiers',
    loadComponent: () => import('./pages/fiches-metiers/fiches-metiers.component').then(m => m.FichesMetiersComponent)
  },
  {
    path: 'fiches-metiers/:id',
    loadComponent: () => import('./pages/fiches-metiers-detail/fiches-metiers-detail.component').then(m => m.FichesMetiersDetailComponent)
  },
      ]
    }
]