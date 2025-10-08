import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-communique-creation',
  imports: [CommonModule,FormsModule],
  templateUrl: './communique-creation.component.html',
  styleUrl: './communique-creation.component.css'
})
export class CommuniqueCreationComponent {
activeMenu = 'communiques';
  searchQuery = '';
  title = '';
  content = '';
  publishLocation = '';
  showLocationDropdown = false;

   publishOptions = [
    'Page d\'accueil',
    'Section actualités', 
    'Espace presse',
    'Archives'
  ];

  handleSubmit() {
    console.log('Création du communiqué:', { title: this.title, content: this.content, publishLocation: this.publishLocation });
  }

  insertFormatting(format: string) {
    console.log('Format appliqué:', format);
  }

  selectMenu(menuId: string) {
    this.activeMenu = menuId;
  }

  toggleDropdown() {
    this.showLocationDropdown = !this.showLocationDropdown;
  }

  selectPublishLocation(option: string) {
    this.publishLocation = option;
    this.showLocationDropdown = false;
  }
}
