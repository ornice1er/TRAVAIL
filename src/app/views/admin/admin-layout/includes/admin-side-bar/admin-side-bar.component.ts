import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-side-bar',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css'
})
export class AdminSideBarComponent {
  searchQuery: string = '';
 @Input() isSidebarOpen = false;

  menuItems = [
    { id: 'admin/tableau-de-bord', label: 'Tableau de bord', icon: 'ri-dashboard-line' },
    { id: 'admin/communiques', label: 'Communiqués', icon: 'ri-file-text-line' },
    { id: 'admin/actualites', label: 'Actualités', icon: 'ri-news-line' },
    { id: 'admin/posters', label: 'Posters', icon: 'ri-image-line' },
    { id: 'admin/membres-structure', label: 'Membres Structure', icon: 'ri-team-line' },
    // { id: 'admin/recrutements', label: 'Recrutements', icon: 'ri-user-add-line' },
    { id: 'admin/documentation', label: 'Documentation', icon: 'ri-book-line' },
//    { id: 'admin/organigramme', label: 'Organigramme', icon: 'ri-organization-chart' },
//    { id: 'admin/avis-du-ministre', label: 'Avis du ministre', icon: 'ri-government-line' },
//    { id: 'admin/citation-du-ministre', label: 'Citation du ministre', icon: 'ri-chat-quote-line' },
    { id: 'admin/mes-notifications', label: 'Mes Notifications', icon: 'ri-notification-line' },
    { id: 'admin/historique', label: 'Historique', icon: 'ri-history-line' }
  ];
 toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
