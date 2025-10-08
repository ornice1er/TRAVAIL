import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Communique {
  id: number;
  title: string;
  accessPrincipal: string;
  motif: string;
}

@Component({
  selector: 'app-communique',
  imports: [CommonModule,FormsModule],
  templateUrl: './communique.component.html',
  styleUrl: './communique.component.css'
})
export class CommuniqueComponent {
 activeMenu = 'communiques';
  searchQuery = '';
  itemsPerPage = 10;
  currentPage = 1;
  selectedItems: number[] = [];
  Math=Math


  communiques: Communique[] = [
    { id: 1, title: 'Communiqué du Ministère du Travail et de la Fonction Publique', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 2, title: 'Concours de recrutement des Auditeurs de Justice', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 3, title: 'Concours du 08 août 2020 au profit du Ministère de l\'Agriculture, de l\'Élevage et de la Pêche', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 4, title: 'Concours de recrutement de soixante (60) élèves-professeurs certifiés au profit du Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 5, title: 'Information relative aux concours dans la fonction publique', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 6, title: 'Communiqué de report de la date de clôture de réception des dossiers de candidature au concours de recrutement des soixante (60) élèves-professeurs certifiés au profit du MESTFP', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 7, title: 'Résultats du concours du 08 août 2020 au profit du Ministère de l\'Agriculture, de l\'Élevage et de la Pêche', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 8, title: 'Communiqué relatif à l\'administration de l\'épreuve de natation aux candidats admissibles au concours de recrutement de soixante (62) agents contractuels au profit du MAEP', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 9, title: 'Concours de recrutement de soixante (60) élèves-professeurs certifiés au profit du Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle - consultation des listes d\'inscription et de rejet', accessPrincipal: 'oui', motif: 'Non défini' },
    { id: 10, title: 'Résultats définitifs du concours de recrutement de soixante (62) agents contractuels au profit du MAEP', accessPrincipal: 'oui', motif: 'Non défini' }
  ];

  get totalPages(): number {
    return Math.ceil(this.communiques.length / this.itemsPerPage);
  }

  get currentCommuniques(): Communique[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.communiques.length);
    return this.communiques.slice(startIndex, endIndex);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.communiques.length);
  }

  handleSelectItem(id: number) {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    } else {
      this.selectedItems = [...this.selectedItems, id];
    }
  }

  handleSelectAll() {
    if (this.selectedItems.length === this.currentCommuniques.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.currentCommuniques.map(item => item.id);
    }
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  setActive(id: string) {
    this.activeMenu = id;
  }
}
