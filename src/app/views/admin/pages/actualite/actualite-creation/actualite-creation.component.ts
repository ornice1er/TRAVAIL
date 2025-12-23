import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ActualiteService } from '../../../../../core/services/actualite.service';
import { StructureService } from '../../../../../core/services/structure.service';
import { CategorieService } from '../../../../../core/services/categorie.service';
import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
const Font = Quill.import('formats/font') as any;
Font.whitelist = ['bookman', 'arial', 'times-new-roman'];
Quill.register('formats/font', Font, true);


interface MenuItem {
  id: string;
  label: string;
  icon: string;
}



@Component({
  selector: 'app-actualite-creation',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule,LoadingComponent,QuillModule],
  templateUrl: './actualite-creation.component.html',
  styleUrl: './actualite-creation.component.css'
})
export class ActualiteCreationComponent {
 activeMenu = 'actualites';
  showLocationDropdown = false;
  publishLocation = '';
  sub_description=""
  description=""
  searchQuery = '';
  loading=false
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
structures:any[]=[]
categories:any[]=[]
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

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private categorieService:CategorieService,
    private actualityService:ActualiteService, 
    private structureService:StructureService) {
     this.actualiteForm = this.fb.group({
    structure_id: [''],
    category_id: [''],
    title: [''],
    sub_description: [''],
    description: [''],
    link: [''],
    author: [''],
    has_principal_access: [''],
    photo: [null],
    big_photo: [null],
  });
  }

  

      pg:any={
    pageSize:10,
    page:1,
    total:0
  }

  ngOnInit(){
    this.getStructures()
    this.getCategories()
  }

   getCategories() {
         this.loading=true
          this.categorieService.getAll().subscribe((res:any)=>{
              this.loading=false
            this.categories=res.data
             },
             (err:any)=>{
              this.loading=false
        
            })
      }

    getStructures() {
         this.loading=true
    this.structureService.getAll(this.pg.pageSize,this.pg.page,false).subscribe((res:any)=>{
              this.loading=false
            this.structures=res.data
             },
             (err:any)=>{
              this.loading=false
        
            })
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

  onFileSelect(event: any, field: string) {
  const file = event.target.files[0];
  if (file) {
    this.actualiteForm.patchValue({ [field]: file });
  }
}


     onSubmit() {
        if (this.actualiteForm.invalid) return;

        const formData = new FormData();
        let object=this.actualiteForm.value
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            formData.append(key,element)
          }
        }
      
         this.loading=true
          this.actualityService.store(formData).subscribe((res:any)=>{
              this.loading=false
               this.router.navigate(["/admin/actualites"])

             },
             (err:any)=>{
              this.loading=false
        
            })
      }

}
