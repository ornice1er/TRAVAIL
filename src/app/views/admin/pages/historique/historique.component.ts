import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface HistoriqueItem {
  id: number;
  type: string;
  action: string;
  titre: string;
  utilisateur: string;
  dateAction: string;
  statut: string;
  details: string;
}
@Component({
  selector: 'app-historique',
  imports: [CommonModule,FormsModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
 activeMenu = 'historique';
  searchQuery = '';
  filterType = 'all';
  filterPeriod = 'all';
  itemsPerPage = 10;
  currentPage = 1;


   historique: HistoriqueItem[] = [
    { id: 1, type: 'communique', action: 'Création', titre: 'Communiqué du Ministère du Travail et de la Fonction Publique', utilisateur: 'Marie DOSSOU', dateAction: '15/03/2024 14:30', statut: 'Publié', details: 'Création et publication immédiate du communiqué officiel' },
    { id: 2, type: 'actualite', action: 'Modification', titre: 'Réunion du Conseil des Ministres du 15 Mars 2024', utilisateur: 'Jean KPOHINTO', dateAction: '15/03/2024 11:45', statut: 'Publié', details: 'Mise à jour du contenu et ajout d\'images' },
    { id: 3, type: 'poster', action: 'Création', titre: 'Campagne de sensibilisation - Sécurité au travail', utilisateur: 'Sylvie AGBODJAN', dateAction: '14/03/2024 16:20', statut: 'En révision', details: 'Création du poster de sensibilisation format A3' },
    { id: 4, type: 'communique', action: 'Suppression', titre: 'Ancien communiqué de recrutement 2023', utilisateur: 'Prosper HOUNGBO', dateAction: '14/03/2024 09:15', statut: 'Supprimé', details: 'Suppression définitive après archivage' },
    { id: 5, type: 'actualite', action: 'Publication', titre: 'Lancement du programme de formation professionnelle', utilisateur: 'Bernadette ZANNOU', dateAction: '13/03/2024 15:30', statut: 'Publié', details: 'Publication après validation du ministre' },
    { id: 6, type: 'membre', action: 'Ajout', titre: 'Nouveau membre: Vincent AKPLOGAN', utilisateur: 'Marie DOSSOU', dateAction: '13/03/2024 10:45', statut: 'Actif', details: 'Ajout du nouveau chef de service communication' },
    { id: 7, type: 'actualite', action: 'Création', titre: 'Visite officielle du Ministre dans les départements', utilisateur: 'Angélique DOSSOU-YOVO', dateAction: '12/03/2024 14:20', statut: 'Brouillon', details: 'Création en mode brouillon pour révision' },
    { id: 8, type: 'communique', action: 'Modification', titre: 'Concours de recrutement des Auditeurs de Justice', utilisateur: 'Jean KPOHINTO', dateAction: '12/03/2024 08:30', statut: 'Publié', details: 'Correction des dates et modalités d\'inscription' },
    { id: 9, type: 'poster', action: 'Publication', titre: 'Journée mondiale du travail 2024', utilisateur: 'Sylvie AGBODJAN', dateAction: '11/03/2024 17:00', statut: 'Publié', details: 'Publication du poster bilingue français/fon' },
    { id: 10, type: 'actualite', action: 'Archivage', titre: 'Bilan des activités 2023', utilisateur: 'Prosper HOUNGBO', dateAction: '11/03/2024 13:15', statut: 'Archivé', details: 'Archivage automatique après 6 mois' }
  ];

  get totalPages(): number {
    return Math.ceil(this.historique.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.historique.length);
  }

  get currentHistorique(): HistoriqueItem[] {
    return this.historique.slice(this.startIndex, this.endIndex);
  }

  setActiveMenuItem(id: string) {
    this.activeMenu = id;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'actualite': return 'ri-news-line';
      case 'communique': return 'ri-file-text-line';
      case 'poster': return 'ri-image-line';
      case 'membre': return 'ri-user-line';
      case 'document': return 'ri-file-line';
      default: return 'ri-file-line';
    }
  }

  getTypeColor(type: string): string {
    switch (type) {
      case 'actualite': return 'bg-blue-100 text-blue-800';
      case 'communique': return 'bg-green-100 text-green-800';
      case 'poster': return 'bg-purple-100 text-purple-800';
      case 'membre': return 'bg-orange-100 text-orange-800';
      case 'document': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getActionColor(action: string): string {
    switch (action) {
      case 'Création': return 'bg-green-100 text-green-800';
      case 'Modification': return 'bg-blue-100 text-blue-800';
      case 'Publication': return 'bg-purple-100 text-purple-800';
      case 'Suppression': return 'bg-red-100 text-red-800';
      case 'Archivage': return 'bg-gray-100 text-gray-800';
      case 'Ajout': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'Publié': return 'bg-green-100 text-green-800';
      case 'Brouillon': return 'bg-yellow-100 text-yellow-800';
      case 'En révision': return 'bg-blue-100 text-blue-800';
      case 'Supprimé': return 'bg-red-100 text-red-800';
      case 'Archivé': return 'bg-gray-100 text-gray-800';
      case 'Actif': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
