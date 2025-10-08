import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Media {
  nom: string;
  fichier: string;
  action: string;
}

@Component({
  selector: 'app-communique-details',
  imports: [CommonModule],
  templateUrl: './communique-details.component.html',
  styleUrl: './communique-details.component.css'
})
export class CommuniqueDetailsComponent {
  activeMenu: string = 'communiques';
  searchQuery: string = '';

    medias: Media[] = []; // Aucune donnée disponible pour le moment

  setActiveMenu(id: string) {
    this.activeMenu = id;
  }
}
