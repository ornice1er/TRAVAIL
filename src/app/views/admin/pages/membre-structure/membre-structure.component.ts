import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



interface Membre {
  id: number;
  nom: string;
  prenoms: string;
  fonction: string;
  direction: string;
  telephone: string;
  email: string;
  statut: string;
}

@Component({
  selector: 'app-membre-structure',
  imports: [CommonModule,FormsModule],
  templateUrl: './membre-structure.component.html',
  styleUrl: './membre-structure.component.css'
})
export class MembreStructureComponent {
  activeMenu = 'membres-structure';
  searchQuery = '';
  itemsPerPage = 10;
  currentPage = 1;
  selectedItems: number[] = [];
  Math=Math


  membres: Membre[] = [
    { id: 1, nom: 'ADJOVI', prenoms: 'Modeste Kerekou', fonction: 'Ministre du Travail et de la Fonction Publique', direction: 'Cabinet Ministériel', telephone: '+229 21 30 04 11', email: 'ministre@travail.bj', statut: 'Actif' },
    { id: 2, nom: 'DOSSOU', prenoms: 'Marie-Claire Adjovi', fonction: 'Secrétaire Général', direction: 'Secrétariat Général', telephone: '+229 21 30 04 12', email: 'sg@travail.bj', statut: 'Actif' },
    { id: 3, nom: 'KPOHINTO', prenoms: 'Jean-Baptiste Soglo', fonction: 'Directeur des Ressources Humaines', direction: 'Direction des Ressources Humaines', telephone: '+229 21 30 04 13', email: 'drh@travail.bj', statut: 'Actif' },
    { id: 4, nom: 'AGBODJAN', prenoms: 'Sylvie Akplogan', fonction: 'Directrice de la Formation Professionnelle', direction: 'Direction de la Formation Professionnelle', telephone: '+229 21 30 04 14', email: 'dfp@travail.bj', statut: 'Actif' },
    { id: 5, nom: 'HOUNGBO', prenoms: 'Prosper Dansou', fonction: 'Directeur de l\'Inspection du Travail', direction: 'Direction de l\'Inspection du Travail', telephone: '+229 21 30 04 15', email: 'dit@travail.bj', statut: 'Actif' },
    { id: 6, nom: 'ZANNOU', prenoms: 'Bernadette Kossou', fonction: 'Directrice de la Modernisation Administrative', direction: 'Direction de la Modernisation Administrative', telephone: '+229 21 30 04 16', email: 'dma@travail.bj', statut: 'Actif' },
    { id: 7, nom: 'AKPLOGAN', prenoms: 'Vincent Houessou', fonction: 'Chef de Service Communication', direction: 'Service Communication', telephone: '+229 21 30 04 17', email: 'communication@travail.bj', statut: 'Actif' },
    { id: 8, nom: 'DOSSOU-YOVO', prenoms: 'Angélique Tognon', fonction: 'Responsable des Affaires Juridiques', direction: 'Service Juridique', telephone: '+229 21 30 04 18', email: 'juridique@travail.bj', statut: 'Actif' }
  ];

  get totalPages(): number {
    return Math.ceil(this.membres.length / this.itemsPerPage);
  }

  get currentMembres(): Membre[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.membres.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.membres.length);
  }

  handleSelectItem(id: number): void {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    } else {
      this.selectedItems.push(id);
    }
  }

  handleSelectAll(): void {
    if (this.selectedItems.length === this.currentMembres.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.currentMembres.map(item => item.id);
    }
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  setItemsPerPage(count: number): void {
    this.itemsPerPage = count;
    this.currentPage = 1;
  }

  setActive(menuId: string): void {
    this.activeMenu = menuId;
  }
}
