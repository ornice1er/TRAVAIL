import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

// === Import des pages ===
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ActualiteComponent } from './pages/actualite/actualite.component';
import { ActualiteCreationComponent } from './pages/actualite/actualite-creation/actualite-creation.component';
import { ActualiteEditionComponent } from './pages/actualite/actualite-edition/actualite-edition.component';
import { ActualiteDetailsComponent } from './pages/actualite/actualite-details/actualite-details.component';

import { CommuniqueComponent } from './pages/communique/communique.component';
import { CommuniqueCreationComponent } from './pages/communique/communique-creation/communique-creation.component';
import { CommuniqueEditionComponent } from './pages/communique/communique-edition/communique-edition.component';
import { CommuniqueDetailsComponent } from './pages/communique/communique-details/communique-details.component';

import { DocumentationComponent } from './pages/documentation/documentation.component';
import { DocumentationCreationComponent } from './pages/documentation/documentation-creation/documentation-creation.component';
import { DocumentationDetailsComponent } from './pages/documentation/documentation-details/documentation-details.component';
import { DocumentationEditionComponent } from './pages/documentation/documentation-edition/documentation-edition.component';

import { CitationDuMinistreComponent } from './pages/citation-du-ministre/citation-du-ministre.component';

import { FicheMetierComponent } from './pages/fiche-metier/fiche-metier.component';
import { FichierMetierCreationComponent } from './pages/fiche-metier/fichier-metier-creation/fichier-metier-creation.component';
import { FichierMetierDetailsComponent } from './pages/fiche-metier/fichier-metier-details/fichier-metier-details.component';
import { FichierMetierEditionComponent } from './pages/fiche-metier/fichier-metier-edition/fichier-metier-edition.component';

import { HistoriqueComponent } from './pages/historique/historique.component';
import { MembreStructureComponent } from './pages/membre-structure/membre-structure.component';
import { MesNotificationsComponent } from './pages/mes-notifications/mes-notifications.component';

import { MotDuMinistreComponent } from './pages/mot-du-ministre/mot-du-ministre.component';
import { MotsDuMinistreCreationComponent } from './pages/mot-du-ministre/mots-du-ministre-creation/mots-du-ministre-creation.component';
import { MotsDuMinistreDetailsComponent } from './pages/mot-du-ministre/mots-du-ministre-details/mots-du-ministre-details.component';
import { MotsDuMinistreEditionComponent } from './pages/mot-du-ministre/mots-du-ministre-edition/mots-du-ministre-edition.component';

import { OrganigrammeComponent } from './pages/organigramme/organigramme.component';
import { OrganigrammeCreationComponent } from './pages/organigramme/organigramme-creation/organigramme-creation.component';
import { OrganigrammeDetailsComponent } from './pages/organigramme/organigramme-details/organigramme-details.component';
import { OrganigrammeEditionComponent } from './pages/organigramme/organigramme-edition/organigramme-edition.component';

import { PosterComponent } from './pages/poster/poster.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { TestComponent } from './pages/test/test.component';
import { TestCreationComponent } from './pages/test/test-creation/test-creation.component';
import { TestEditionComponent } from './pages/test/test-edition/test-edition.component';
import { TestDetailsComponent } from './pages/test/test-details/test-details.component';

export const AdminRounting: Routes = [
  {
    path: 'admin',
    canActivate:[AuthGuard],
    component: AdminLayoutComponent,
    children: [
      { 
        path: 'tableau-de-bord', 
        component: DashboardComponent,
        data: {
            title: 'TABLEAU DE BORD',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Tableau de bord' }
            ]
          }
      },

      // === Actualités ===
      { path: 'actualites', 
        component: ActualiteComponent,
        data: {
            title: 'Liste des actualités',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des actualités' }
            ]
          }
      },
      { path: 'actualites/creation', 
        component: ActualiteCreationComponent,
        data: {
            title: 'Création d\'une actualité',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Actualités', url: '/admin/actualites' },
              { label: 'Création' }
            ]
          }
      },
      { path: 'actualites/edition/:id', 
        component: ActualiteEditionComponent,
       data: {
            title: 'Modification d\'une actualité',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Actualités', url: '/admin/actualites' },
              { label: 'Modification' }
            ]
          }
      
      },
      { 
        path: 'actualites/details/:id', 
        component: ActualiteDetailsComponent,
       data: {
            title: 'Détails d\'une actualité',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Actualités', url: '/admin/actualites' },
              { label: 'Déétails' }
            ]
          }
      
      },

      // === Communiqués ===
      { 
        path: 'communiques', 
        component: CommuniqueComponent,
          data: {
            title: 'Liste des communiqués',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des communiqués'}
            ]
          }
      
      },
      { path: 'communiques/creation', 
        component: CommuniqueCreationComponent,
          data: {
            title: 'Création d\'un communiqué',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Communiqués', url: '/admin/communiques' },
              { label: 'Création' }
            ]
          }
      
      },
      { path: 'communiques/edition/:id', 
        component: CommuniqueEditionComponent ,
       data: {
            title: 'Modification d\'un communiqué',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Communiqués', url: '/admin/communiques' },
              { label: 'Modification' }
            ]
          }
      
      },
      { 
        path: 'communiques/details/:id', 
        component: CommuniqueDetailsComponent,
       data: {
            title: 'Détails d\'un communiqué',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Communiqués', url: '/admin/communiques' },
              { label: 'Détails' }
            ]
          }
      
      },



        // === Test ===
      { 
        path: 'tests', 
        component: TestComponent,
          data: {
            title: 'Liste des concours',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des concours'}
            ]
          }
      
      },
      { path: 'tests/creation', 
        component: TestCreationComponent,
          data: {
            title: 'Création d\'un concours',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Concours', url: '/admin/tests' },
              { label: 'Création' }
            ]
          }
      
      },
      { path: 'tests/edition/:id', 
        component: TestEditionComponent ,
       data: {
            title: 'Modification d\'un concours',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Concours', url: '/admin/tests' },
              { label: 'Modification' }
            ]
          }
      
      },
      { 
        path: 'tests/details/:id', 
        component: TestDetailsComponent,
       data: {
            title: 'Détails d\'un concours',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Communiqués', url: '/admin/tests' },
              { label: 'Détails' }
            ]
          }
      
      },

      // === Documentation ===
      { 
        path: 'documentation', 
        component: DocumentationComponent,
        data: {
              title: 'Liste des documentations',
              breadcrumb: [
                { label: 'Accueil', url: '/admin/tableau-de-bord' },
                { label: 'liste des documentations'}]
            }
      
      },
      { path: 'documentation/creation', component: DocumentationCreationComponent ,

         data: {
            title: 'Création documentation',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Documentations', url: '/admin/documentation' },
              { label: 'Création' }
            ]
          }
      },
      { path: 'documentation/details/:id', component: DocumentationDetailsComponent,
          data: {
            title: 'Détails documentation',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Documentations', url: '/admin/documentation' },
              { label: 'Détails' }
            ]
          }

       },
      { path: 'documentation/edition/:id', component: DocumentationEditionComponent,
         data: {
            title: 'Modification documentation',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Documentations', url: '/admin/documentation' },
              { label: 'Modification' }
            ]
          }
        
       },

      // === Citation du ministre ===
      { path: 'citation-du-ministre', component: CitationDuMinistreComponent,

         data: {
            title: 'Gestion des citations',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des citations'}
            ]
          }

       },

      // === Fiche métier ===
      { path: 'fiches-metier', component: FicheMetierComponent,

        data: {
            title: 'Liste des fiches metiers',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des fiches metiers'}
            ]
          }
       },
      { path: 'fiches-metier/creation', component: FichierMetierCreationComponent,
        data: {
            title: 'Création de fiche métier',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Fiches métier', url: '/admin/fiches-metier' },
              { label: 'Création' }
            ]
          }
       },
      { path: 'fiches-metier/details/:id', component: FichierMetierDetailsComponent,

         data: {
            title: 'Détails de fiche métier',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Fiches métier', url: '/admin/fiches-metier' },
              { label: 'Détails' }
            ]
          }
       },
      { path: 'fiches-metier/edition/:id', component: FichierMetierEditionComponent,

        data: {
            title: 'Modification de fiche métier',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Fiches métier', url: '/admin/fiches-metier' },
              { label: 'Modification' }
            ]
          }

       },

      // === Historique et autres ===
      { path: 'historique', component: HistoriqueComponent,
         data: {
            title: 'Gestion de l\'historique',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Historiques'}
            ]
          }
       },
      { path: 'membres-structure', component: MembreStructureComponent,
         data: {
            title: 'Gestion des membres structures',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des membres structures'}
            ]
          }
       },
      { path: 'mes-notifications', component: MesNotificationsComponent,
         data: {
            title: 'Gestion des notifications',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des notifications'}
            ]
          }

      },

      // === Avis du ministre ===
      { path: 'avis-du-ministre', component: MotDuMinistreComponent,
         data: {
            title: 'Liste des avis ministres',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des avis ministres'}
            ]
          }
       },
      { path: 'avis-du-ministre/creation', component: MotsDuMinistreCreationComponent,
        data: {
            title: 'Modification d\'un avis ministre',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Avis ministre', url: '/admin/avis-du-ministre' },
              { label: 'Création' }
            ]
          }
      },
      { path: 'avis-du-ministre/details/:id', component: MotsDuMinistreDetailsComponent,
         data: {
            title: 'Détails d\'un avis ministre',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Avis ministre', url: '/admin/avis-du-ministre' },
              { label: 'Détails' }
            ]
          }

       },
      { path: 'avis-du-ministre/edition/:id', component: MotsDuMinistreEditionComponent,

        data: {
            title: 'Modification d\'un avis ministre',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Avis ministre', url: '/admin/avis-du-ministre' },
              { label: 'Modification' }
            ]
          }
       },

      // === Organigramme ===
      { path: 'organigramme', component: OrganigrammeComponent,
        data: {
            title: 'Liste des organigrammes',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des organigrammes'}
            ]
          }
       },
      { path: 'organigramme/creation', component: OrganigrammeCreationComponent,
         data: {
            title: 'Modification d\'un avis ministre',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Organigramme', url: '/admin/organigramme' },
              { label: 'Création' }
            ]
          }
       },
      { path: 'organigramme/details/:id', component: OrganigrammeDetailsComponent,
        data: {
            title: 'Détails d\'un avis ministre',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Organigramme', url: '/admin/organigramme' },
              { label: 'Détails' }
            ]
          }

       },
      { path: 'organigramme/edition/:id', component: OrganigrammeEditionComponent,

           data: {
            title: 'Modification d\'un avis ministre',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Organigramme', url: '/admin/organigramme' },
              { label: 'Modification' }
            ]
          }

       },

      // === Posters ===
      { path: 'posters', component: PosterComponent,
         data: {
            title: 'Gestion des postes',
            breadcrumb: [
              { label: 'Accueil', url: '/admin/tableau-de-bord' },
              { label: 'Liste des postes'}
            ]
          }

       },

      // === Redirection par défaut ===
      { path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full' },
    ],
  },
];
