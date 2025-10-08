import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-documentation-creation',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './documentation-creation.component.html',
  styleUrl: './documentation-creation.component.css'
})
export class DocumentationCreationComponent {
 activeMenu = 'documentation';
  form: FormGroup;
  selectedFile: File | null = null;

  showTypeDropdown = false;
  showEtatDropdown = false;
  showLocationDropdown = false;


  typeOptions = ['Sélectionner...', 'Décret', 'Arrêté', 'Circulaire', 'Note de service', 'Rapport', 'Manuel', 'Guide', 'Procédure'];
  etatOptions = ['Sélectionner...', 'Brouillon', 'En révision', 'Validé', 'Publié', 'Archivé'];
  publishOptions = ['Sélectionner...', 'Page d\'accueil', 'Section documentation', 'Espace public', 'Accès restreint'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      etat: ['', Validators.required],
      publishLocation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Création de la documentation:', {
        ...this.form.value,
        selectedFile: this.selectedFile
      });
    }
  }

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  setType(value: string) {
    this.form.get('type')?.setValue(value);
    this.showTypeDropdown = false;
  }

  setEtat(value: string) {
    this.form.get('etat')?.setValue(value);
    this.showEtatDropdown = false;
  }

  setPublishLocation(value: string) {
    this.form.get('publishLocation')?.setValue(value);
    this.showLocationDropdown = false;
  }

  setActive(menuId: string) {
    this.activeMenu = menuId;
  }
}
