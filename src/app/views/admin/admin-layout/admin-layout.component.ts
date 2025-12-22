import { Component } from '@angular/core';
import { AdminFooterComponent } from './includes/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './includes/admin-header/admin-header.component';
import { AdminSideBarComponent } from './includes/admin-side-bar/admin-side-bar.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageHeaderService } from '../../../core/services/page-header.service';

@Component({
  selector: 'app-admin-layout',
  standalone:true,
  imports: [CommonModule,AdminHeaderComponent,AdminSideBarComponent,RouterOutlet,RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
 isSidebarOpenMobile = false;
 menuItems = [
    { id: 'admin/tableau-de-bord', label: 'Tableau de bord', icon: 'ri-dashboard-line' },
    { id: 'admin/communiques', label: 'Communiqués', icon: 'ri-file-text-line' },
    { id: 'admin/actualites', label: 'Actualités', icon: 'ri-news-line' },
    { id: 'admin/posters', label: 'Posters', icon: 'ri-image-line' },
    { id: 'admin/membres-structure', label: 'Membres Structure', icon: 'ri-team-line' },
    // { id: 'admin/recrutements', label: 'Recrutements', icon: 'ri-user-add-line' },
    { id: 'admin/documentation', label: 'Documentation', icon: 'ri-book-line' },
    { id: 'admin/organigramme', label: 'Organigramme', icon: 'ri-organization-chart' },
    { id: 'admin/avis-du-ministre', label: 'Avis du ministre', icon: 'ri-government-line' },
    { id: 'admin/citation-du-ministre', label: 'Citation du ministre', icon: 'ri-chat-quote-line' },
    { id: 'admin/mes-notifications', label: 'Mes Notifications', icon: 'ri-notification-line' },
    { id: 'admin/historique', label: 'Historique', icon: 'ri-history-line' }
  ];

    constructor(
    public headerService: PageHeaderService){

  }

}
