import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


interface MenuItem {
  id: string;
  label: string;
  icon: string;
}



@Component({
  selector: 'app-actualite-creation',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './actualite-creation.component.html',
  styleUrl: './actualite-creation.component.css'
})
export class ActualiteCreationComponent {
 activeMenu = 'actualites';
  showLocationDropdown = false;
  publishLocation = '';
  searchQuery = '';

  publishOptions = [
    'Sélectionner...',
    'Page d\'accueil',
    'Section actualités', 
    'Espace presse',
    'Archives'
  ];

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

  actualiteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.actualiteForm = this.fb.group({
      structure: [{ value: 'Ministère du travail et de la fonction publique', disabled: true }, Validators.required],
      category: ['comptes-rendus', Validators.required],
      title: ['', Validators.required],
      resume: ['', Validators.required],
      description: ['', Validators.required],
      lienFlickr: [''],
      auteur: ['']
    });
  }

  setActiveMenu(id: string) {
    this.activeMenu = id;
  }

  toggleLocationDropdown() {
    this.showLocationDropdown = !this.showLocationDropdown;
  }

  selectPublishLocation(option: string) {
    this.publishLocation = option;
    this.showLocationDropdown = false;
  }

  insertFormatting(format: string) {
    console.log('Format appliqué:', format);
  }

  onSubmit() {
    if (this.actualiteForm.valid) {
      console.log('Création de l’actualité:', {
        ...this.actualiteForm.getRawValue(),
        publishLocation: this.publishLocation
      });
    }
  }

}
