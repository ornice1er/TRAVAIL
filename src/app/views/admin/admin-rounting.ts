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

export const AdminRounting: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'tableau-de-bord', component: DashboardComponent },

      // === Actualités ===
      { path: 'actualites', component: ActualiteComponent },
      { path: 'actualites/creation', component: ActualiteCreationComponent },
      { path: 'actualites/edition/:id', component: ActualiteEditionComponent },
      { path: 'actualites/details/:id', component: ActualiteDetailsComponent },

      // === Communiqués ===
      { path: 'communiques', component: CommuniqueComponent },
      { path: 'communiques/creation', component: CommuniqueCreationComponent },
      { path: 'communiques/edition/:id', component: CommuniqueEditionComponent },
      { path: 'communiques/details/:id', component: CommuniqueDetailsComponent },

      // === Documentation ===
      { path: 'documentation', component: DocumentationComponent },
      { path: 'documentation/creation', component: DocumentationCreationComponent },
      { path: 'documentation/details/:id', component: DocumentationDetailsComponent },
      { path: 'documentation/edition/:id', component: DocumentationEditionComponent },

      // === Citation du ministre ===
      { path: 'citation-du-ministre', component: CitationDuMinistreComponent },

      // === Fiche métier ===
      { path: 'fiches-metier', component: FicheMetierComponent },
      { path: 'fiches-metier/creation', component: FichierMetierCreationComponent },
      { path: 'fiches-metier/details/:id', component: FichierMetierDetailsComponent },
      { path: 'fiches-metier/edition/:id', component: FichierMetierEditionComponent },

      // === Historique et autres ===
      { path: 'historique', component: HistoriqueComponent },
      { path: 'membres-structure', component: MembreStructureComponent },
      { path: 'mes-notifications', component: MesNotificationsComponent },

      // === Avis du ministre ===
      { path: 'avis-du-ministre', component: MotDuMinistreComponent },
      { path: 'avis-du-ministre/creation', component: MotsDuMinistreCreationComponent },
      { path: 'avis-du-ministre/details/:id', component: MotsDuMinistreDetailsComponent },
      { path: 'avis-du-ministre/edition/:id', component: MotsDuMinistreEditionComponent },

      // === Organigramme ===
      { path: 'organigramme', component: OrganigrammeComponent },
      { path: 'organigramme/creation', component: OrganigrammeCreationComponent },
      { path: 'organigramme/details/:id', component: OrganigrammeDetailsComponent },
      { path: 'organigramme/edition/:id', component: OrganigrammeEditionComponent },

      // === Posters ===
      { path: 'posters', component: PosterComponent },

      // === Redirection par défaut ===
      { path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full' },
    ],
  },
];
