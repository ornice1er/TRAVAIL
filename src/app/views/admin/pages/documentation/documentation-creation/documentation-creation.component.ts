import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentationService } from '../../../../../core/services/documentation.service';
import { LocalStorageService } from '../../../../../core/utils/local-stoarge-service';
const Font = Quill.import('formats/font') as any;
Font.whitelist = ['bookman', 'arial', 'times-new-roman'];
Quill.register('formats/font', Font, true);

@Component({
  selector: 'app-documentation-creation',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule,LoadingComponent,QuillModule],
  templateUrl: './documentation-creation.component.html',
  styleUrl: './documentation-creation.component.css'
})
export class DocumentationCreationComponent {
 activeMenu = 'documentation';
  docForm: FormGroup;
  selectedFile: File | null = null;

  showTypeDropdown = false;
  showEtatDropdown = false;
  showLocationDropdown = false;
loading=false
modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ font: Font.whitelist }],  // Ajoute le menu déroulant des polices
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'blockquote', 'code-block'],
    ['clean']
  ]
};


  typeOptions = ['Sélectionner...', 'Décret', 'Arrêté', 'Circulaire', 'Note de service', 'Rapport', 'Manuel', 'Guide', 'Procédure'];
  etatOptions = ['Sélectionner...', 'Brouillon', 'En révision', 'Validé', 'Publié', 'Archivé'];
  publishOptions = ['Sélectionner...', 'Page d\'accueil', 'Section documentation', 'Espace public', 'Accès restreint'];

  constructor(
     private docService:DocumentationService,
    private lsService:LocalStorageService,
    private router:Router,
    private toastr:ToastrService,
    private fb: FormBuilder) {
    this.docForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      has_principal_access: ['', Validators.required],
      filename: [null, Validators.required],

    });
  }

  onSubmit() {
     if (this.docForm.invalid) return;

        const formData = new FormData();
        let object=this.docForm.value
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            formData.append(key,element)
          }
        }
      
         this.loading=true
          this.docService.store(formData).subscribe((res:any)=>{
              this.loading=false
               this.router.navigate(["/admin/documentation"])

             },
             (err:any)=>{
              this.loading=false
        
            })
  }

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.selectedFile = file;
    }
  }

    onFileSelect(event: any, field: string) {
  const file = event.target.files[0];
  if (file) {
    this.docForm.patchValue({ [field]: file });
  }
}


  setType(value: string) {
    this.docForm.get('type')?.setValue(value);
    this.showTypeDropdown = false;
  }

  setEtat(value: string) {
    this.docForm.get('etat')?.setValue(value);
    this.showEtatDropdown = false;
  }

  setPublishLocation(value: string) {
    this.docForm.get('publishLocation')?.setValue(value);
    this.showLocationDropdown = false;
  }

  setActive(menuId: string) {
    this.activeMenu = menuId;
  }
}
