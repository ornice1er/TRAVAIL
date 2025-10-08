import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

interface Actualite {
  id: number;
  title: string;
  category: string;
  auteur: string;
  dateCreation: string;
  statut: string;
}

@Component({
  selector: 'app-actualite',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent {
 activeMenu = 'actualites';
  searchQuery = '';
  itemsPerPage = 10;
  currentPage = 1;
  selectedItems: number[] = [];
    Math:any=Math
  menuItems: MenuItem[] = [
    { id: 'tableau-de-bord', label: 'Tableau de bord', icon: 'ri-dashboard-line' },
    { id: 'communiques', label: 'Communiqués', icon: 'ri-file-text-line' },
    { id: 'actualites', label: 'Actualités', icon: 'ri-news-line' },
    { id: 'posters', label: 'Posters', icon: 'ri-image-line' },
    { id: 'membres-structure', label: 'Membres Structure', icon: 'ri-team-line' },
    { id: 'documentation', label: 'Documentation', icon: 'ri-book-line' },
    { id: 'organigramme', label: 'Organigramme', icon: 'ri-organization-chart' },
    { id: 'mots-du-ministre', label: 'Mots du ministre', icon: 'ri-government-line' },
    { id: 'citation-du-ministre', label: 'Citation du ministre', icon: 'ri-chat-quote-line' },
    { id: 'mes-notifications', label: 'Mes Notifications', icon: 'ri-notification-line' },
    { id: 'historique', label: 'Historique', icon: 'ri-history-line' }
  ];

  actualites: Actualite[] = [
    { id: 1, title: 'Réunion du Conseil des Ministres du 15 Mars 2024', category: 'comptes-rendus', auteur: 'Direction de la Communication', dateCreation: '15/03/2024', statut: 'Publié' },
    { id: 2, title: 'Lancement du programme de formation professionnelle', category: 'annonces', auteur: 'Service Formation', dateCreation: '12/03/2024', statut: 'Publié' },
    { id: 3, title: 'Visite officielle du Ministre dans les départements', category: 'événements', auteur: 'Cabinet du Ministre', dateCreation: '10/03/2024', statut: 'Brouillon' },
    { id: 4, title: 'Nouvelle réglementation sur les conditions de travail', category: 'réglementations', auteur: 'Direction Juridique', dateCreation: '08/03/2024', statut: 'Publié' },
    { id: 5, title: 'Campagne de sensibilisation sur la sécurité au travail', category: 'campagnes', auteur: 'Direction de la Prévention', dateCreation: '05/03/2024', statut: 'Publié' },
    { id: 6, title: 'Résultats du concours de recrutement 2024', category: 'résultats', auteur: 'Direction des Ressources Humaines', dateCreation: '03/03/2024', statut: 'Publié' },
    { id: 7, title: 'Atelier sur la modernisation de l\'administration', category: 'formations', auteur: 'Direction de la Modernisation', dateCreation: '01/03/2024', statut: 'Programmé' },
    { id: 8, title: 'Bilan des activités du premier trimestre 2024', category: 'bilans', auteur: 'Secrétariat Général', dateCreation: '28/02/2024', statut: 'En révision' }
  ];

  get totalPages(): number {
    return Math.ceil(this.actualites.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.actualites.length);
  }

  get currentActualites(): Actualite[] {
    return this.actualites.slice(this.startIndex, this.endIndex);
  }

  handleSelectItem(id: number) {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    } else {
      this.selectedItems.push(id);
    }
  }

  handleSelectAll() {
    if (this.selectedItems.length === this.currentActualites.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.currentActualites.map(item => item.id);
    }
  }

  getStatusColor(statut: string) {
    switch (statut) {
      case 'Publié': return 'bg-green-100 text-green-800';
      case 'Brouillon': return 'bg-yellow-100 text-yellow-800';
      case 'En révision': return 'bg-blue-100 text-blue-800';
      case 'Programmé': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
