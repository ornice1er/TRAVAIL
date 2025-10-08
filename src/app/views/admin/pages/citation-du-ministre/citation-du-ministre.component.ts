import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

interface Citation {
  id: number;
  citation: string;
  contexte: string;
  dateCreation: string;
  statut: string;
  categorie: string;
}



@Component({
  selector: 'app-citation-du-ministre',
  imports: [CommonModule],
  templateUrl: './citation-du-ministre.component.html',
  styleUrl: './citation-du-ministre.component.css'
})
export class CitationDuMinistreComponent {
  activeMenu: string = 'citation-du-ministre';
  searchQuery: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  selectedItems: number[] = [];



  citations: Citation[] = [
    {
      id: 1,
      citation: 'Le travail est la source de toute dignité et de tout progrès humain.',
      contexte: 'Discours d\'ouverture - Conférence nationale sur l\'emploi',
      dateCreation: '15/03/2024',
      statut: 'Publié',
      categorie: 'Emploi'
    },
    {
      id: 2,
      citation: 'Une fonction publique moderne est le pilier d\'un État efficace au service du citoyen.',
      contexte: 'Cérémonie de remise de diplômes - École Nationale d\'Administration',
      dateCreation: '12/03/2024',
      statut: 'Publié',
      categorie: 'Fonction Publique'
    },
    {
      id: 3,
      citation: 'La formation professionnelle est l\'investissement le plus rentable pour l\'avenir de notre jeunesse.',
      contexte: 'Inauguration du Centre de Formation Professionnelle de Cotonou',
      dateCreation: '10/03/2024',
      statut: 'Brouillon',
      categorie: 'Formation'
    },
    {
      id: 4,
      citation: 'Chaque travailleur mérite respect, protection et conditions de travail décentes.',
      contexte: 'Journée mondiale de la sécurité et de la santé au travail',
      dateCreation: '08/03/2024',
      statut: 'Publié',
      categorie: 'Sécurité au travail'
    },
    {
      id: 5,
      citation: 'L\'égalité des chances dans l\'accès à l\'emploi est un droit fondamental.',
      contexte: 'Forum national sur l\'insertion professionnelle des jeunes',
      dateCreation: '05/03/2024',
      statut: 'Publié',
      categorie: 'Insertion professionnelle'
    },
    {
      id: 6,
      citation: 'La modernisation de notre administration passe par la valorisation de nos ressources humaines.',
      contexte: 'Séminaire sur la réforme administrative',
      dateCreation: '03/03/2024',
      statut: 'En révision',
      categorie: 'Modernisation'
    }
  ];

  get totalPages(): number {
    return Math.ceil(this.citations.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.citations.length);
  }

  get currentCitations(): Citation[] {
    return this.citations.slice(this.startIndex, this.endIndex);
  }

  handleSelectItem(id: number): void {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    } else {
      this.selectedItems.push(id);
    }
  }

  handleSelectAll(): void {
    if (this.selectedItems.length === this.currentCitations.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.currentCitations.map(item => item.id);
    }
  }

  getStatusColor(statut: string): string {
    switch (statut) {
      case 'Publié': return 'tw-bg-green-100 tw-text-green-800';
      case 'Brouillon': return 'tw-bg-yellow-100 tw-text-yellow-800';
      case 'En révision': return 'tw-bg-blue-100 tw-text-blue-800';
      default: return 'tw-bg-gray-100 tw-text-gray-800';
    }
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}
