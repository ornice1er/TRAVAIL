import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/accueil/accueil.component').then(m => m.AccueilComponent)
  },
  {
    path: 'ministere',
    loadComponent: () => import('./pages/ministere/ministere.component').then(m => m.MinistereComponent)
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
    path: '**',
    redirectTo: ''
  }
];