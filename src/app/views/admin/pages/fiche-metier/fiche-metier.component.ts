import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



interface FicheMetier {
  id: number;
  titre: string;
  secteur: string;
  niveau: string;
  statut: string;
  dateCreation: string;
  auteur: string;
}

@Component({
  selector: 'app-fiche-metier',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './fiche-metier.component.html',
  styleUrl: './fiche-metier.component.css'
})
export class FicheMetierComponent {
    activeMenu: string = 'fiche-metier';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  selectedItems: number[] = [];
  searchQuery: string = '';
  Math=Math

  fichesMetier: FicheMetier[] = [
    { id: 1, titre: 'Inspecteur du Travail', secteur: 'Inspection', niveau: 'Cadre A', statut: 'Publié', dateCreation: '15/03/2024', auteur: 'Direction des Ressources Humaines' },
    { id: 2, titre: 'Contrôleur du Travail', secteur: 'Contrôle', niveau: 'Cadre B', statut: 'En révision', dateCreation: '12/03/2024', auteur: 'Direction du Travail' },
    { id: 3, titre: 'Conseiller en Emploi', secteur: 'Emploi', niveau: 'Cadre A', statut: 'Publié', dateCreation: '10/03/2024', auteur: 'Direction de l\'Emploi' },
    { id: 4, titre: 'Gestionnaire des Ressources Humaines', secteur: 'Administration', niveau: 'Cadre A', statut: 'Publié', dateCreation: '08/03/2024', auteur: 'Direction des Ressources Humaines' },
    { id: 5, titre: 'Technicien en Sécurité au Travail', secteur: 'Sécurité', niveau: 'Cadre C', statut: 'Brouillon', dateCreation: '05/03/2024', auteur: 'Direction de la Sécurité' },
    { id: 6, titre: 'Médiateur Social', secteur: 'Affaires Sociales', niveau: 'Cadre B', statut: 'Validé', dateCreation: '02/03/2024', auteur: 'Direction des Affaires Sociales' },
    { id: 7, titre: 'Analyste des Politiques d\'Emploi', secteur: 'Politique', niveau: 'Cadre A', statut: 'En révision', dateCreation: '28/02/2024', auteur: 'Cabinet du Ministre' },
    { id: 8, titre: 'Formateur Professionnel', secteur: 'Formation', niveau: 'Cadre B', statut: 'Publié', dateCreation: '25/02/2024', auteur: 'Direction de la Formation' }
  ];

  constructor(private router: Router) {}

  getStatusColor(statut: string) {
    switch(statut) {
      case 'Publié': return 'bg-green-100 text-green-800';
      case 'En révision': return 'bg-yellow-100 text-yellow-800';
      case 'Brouillon': return 'bg-gray-100 text-gray-800';
      case 'Validé': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredFiches.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return this.startIndex + this.itemsPerPage;
  }

  get currentFiches(): FicheMetier[] {
    return this.filteredFiches.slice(this.startIndex, this.endIndex);
  }

  get filteredFiches(): FicheMetier[] {
    if (!this.searchQuery) return this.fichesMetier;
    const query = this.searchQuery.toLowerCase();
    return this.fichesMetier.filter(fiche =>
      fiche.titre.toLowerCase().includes(query) ||
      fiche.secteur.toLowerCase().includes(query) ||
      fiche.niveau.toLowerCase().includes(query) ||
      fiche.auteur.toLowerCase().includes(query)
    );
  }



  handleSelectAll(event: any) {
        let checked=event?.target?.checked

    this.selectedItems = checked ? this.currentFiches.map(f => f.id) : [];
  }

  handleSelectItem(id: number, event: any) {

    let checked=event?.target?.checked
    if (checked) {
      if (!this.selectedItems.includes(id)) this.selectedItems.push(id);
    } else {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    }
  }

  goToPage(page: number) {
    if(page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

}
