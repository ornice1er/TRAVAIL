import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

interface Media {
  nom: string;
  fichier: string;
  action: string;
}



@Component({
  selector: 'app-actualite-details',
  imports: [CommonModule],
  templateUrl: './actualite-details.component.html',
  styleUrl: './actualite-details.component.css'
})
export class ActualiteDetailsComponent {
 activeMenu: string = 'actualites';
  searchQuery: string = '';

  medias: Media[] = [];

  setActiveMenu(id: string) {
    this.activeMenu = id;
  }

  getLink(item: MenuItem): string {
    switch(item.id) {
      case 'tableau-de-bord': return '/dashboard';
      case 'communiques': return '/communiques-list';
      case 'actualites': return '/actualites';
      default: return `/${item.id}`;
    }
  }
}
