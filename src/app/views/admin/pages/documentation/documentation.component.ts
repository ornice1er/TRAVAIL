import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DocumentItem {
  id: number;
  titre: string;
  type: string;
  statut: string;
  dateCreation: string;
  auteur: string;
}

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface User {
  nom: string;
  prenom: string;
  poste: string;
  statut: string;
  avatar: string;
}
@Component({
  selector: 'app-documentation',
  imports: [CommonModule,FormsModule,],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
activeMenu: string = 'documentation';
  searchQuery: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  selectedItems: number[] = [];
  showNotifications: boolean = false;
  showUserDropdown: boolean = false;
Math=Math
  documents: DocumentItem[] = [
    { id: 1, titre: 'Loi-2008-07-code-procédure portant code de procédure civile, commerciale, sociale, administrative et des comptes.', type: 'Loi', statut: 'Publié', dateCreation: '15/03/2024', auteur: 'Direction Juridique' },
    { id: 2, titre: 'CCNIDGT - Conseil Consultatif National', type: 'Guide', statut: 'En révision', dateCreation: '12/03/2024', auteur: 'Direction Générale du Travail' },
    { id: 3, titre: 'LOI N° 2020-35 DU 06 JANVIER 2021 modifiant le code du numérique', type: 'Loi', statut: 'Publié', dateCreation: '10/03/2024', auteur: 'Secrétariat Général' },
    { id: 4, titre: 'LOI No 2017-20 DU 20 AVRIL 2018 portant code du numérique en République du Bénin', type: 'Loi', statut: 'Publié', dateCreation: '08/03/2024', auteur: 'Direction Juridique' },
    { id: 5, titre: 'Code du travail en République du Bénin', type: 'Code', statut: 'Publié', dateCreation: '05/03/2024', auteur: 'Direction du Travail' },
    { id: 6, titre: 'Le Code Social et Jurisprudence en République du Bénin', type: 'Code', statut: 'Publié', dateCreation: '02/03/2024', auteur: 'Direction des Affaires Sociales' },
    { id: 7, titre: 'Manuel des procédures administratives', type: 'Manuel', statut: 'Brouillon', dateCreation: '28/02/2024', auteur: 'Direction Administrative' },
    { id: 8, titre: 'Guide de sécurité au travail', type: 'Guide', statut: 'Validé', dateCreation: '25/02/2024', auteur: 'Inspection du Travail' }
  ];

  notifications: NotificationItem[] = [
    { id: 1, title: 'Nouveau document ajouté', message: 'Le document "Guide des procédures administratives" a été publié', time: '5 min', read: false },
    { id: 2, title: 'Document mis à jour', message: 'Le manuel de formation a été révisé et republié', time: '1h', read: false },
    { id: 3, title: 'Validation requise', message: 'Le document "Rapport annuel 2024" attend votre validation', time: '2h', read: true }
  ];

  utilisateurConnecte: User = {
    nom: 'KOUASSI',
    prenom: 'Jean-Baptiste',
    poste: 'Directeur de Cabinet',
    statut: 'En ligne',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20African%20government%20official%20portrait%20in%20formal%20business%20attire&width=200&height=200&seq=user-avatar-001&orientation=squarish'
  };

  getStatusColor(statut: string): string {
    switch (statut) {
      case 'Publié': return 'bg-green-100 text-green-800';
      case 'En révision': return 'bg-yellow-100 text-yellow-800';
      case 'Brouillon': return 'bg-gray-100 text-gray-800';
      case 'Validé': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  get totalPages(): number {
    return Math.ceil(this.documents.length / this.itemsPerPage);
  }

  get currentDocuments(): DocumentItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.documents.slice(startIndex, startIndex + this.itemsPerPage);
  }

  handleSelectAll(event: any) {
        let checked=event.target.checked

    if (checked) {
      this.selectedItems = this.currentDocuments.map(d => d.id);
    } else {
      this.selectedItems = [];
    }
  }

  handleSelectItem(id: number, event: any) {
    let checked=event.target.checked
    if (checked) {
      if (!this.selectedItems.includes(id)) this.selectedItems.push(id);
    } else {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    }
  }

  setActiveMenu(id: string) {
    this.activeMenu = id;
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}
