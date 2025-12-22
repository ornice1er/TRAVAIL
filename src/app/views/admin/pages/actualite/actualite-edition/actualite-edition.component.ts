import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ActualiteService } from '../../../../../core/services/actualite.service';
import { CategorieService } from '../../../../../core/services/categorie.service';
import { StructureService } from '../../../../../core/services/structure.service';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from '../../../../../core/utils/config-service';
import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
const Font = Quill.import('formats/font') as any;
Font.whitelist = ['bookman', 'arial', 'times-new-roman'];
Quill.register('formats/font', Font, true);

@Component({
  selector: 'app-actualite-edition',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule,LoadingComponent,QuillModule],
  templateUrl: './actualite-edition.component.html',
  styleUrl: './actualite-edition.component.css'
})
export class ActualiteEditionComponent {
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

  menuItems: any[] = [
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
actualiteId:any
actualite:any
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
    private route:ActivatedRoute,
    private toastr:ToastrService,
    private structureServuce:StructureService) {
     this.actualiteForm = this.fb.group({
    structure_id: [''],
    category_id: [''],
    title: [''],
    sub_description: [''],
    description: [''],
    link: [''],
    author: [''],
    has_principal_access: [''],
    photo: [],
    big_photo: [],
  });
  }


  ngOnInit(){
    this.getStructures()
    this.getCategories()
    this.actualiteId=this.route.snapshot.paramMap.get('id')
    this.get()
  }

    get() {
    this.loading=true
      this.actualityService.get(this.actualiteId).subscribe((res:any)=>{
          this.loading=false    
          this.actualite=res.data
          this.actualiteForm.patchValue({
            structure_id: res.data.media?.structure_id,
            category_id: res.data.category_id,
            title: res.data.title,
            sub_description: res.data.sub_description,
            description: res.data.description,
            link: res.data.link,
            author: res.data.author,
            has_principal_access: res.data.media?.has_principal_access,
          });
                    this.toastr.success('Connexion réussie', 'Connexion');
         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
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
          this.structureServuce.getAll().subscribe((res:any)=>{
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
          const formData = new FormData();

  // Champs simples
  Object.keys(this.actualiteForm.value).forEach(key => {
    if (key !== 'photo' && key !== 'big_photo') {
      formData.append(key, this.actualiteForm.value[key]);
    }
  });

  // Photo principale uniquement si modifiée
  if (this.actualiteForm.value.photo instanceof File) {
    formData.append('photo', this.actualiteForm.value.photo);
  }

  // Miniature uniquement si modifiée
  if (this.actualiteForm.value.big_photo instanceof File) {
    formData.append('big_photo', this.actualiteForm.value.big_photo);
  }
      

         this.loading=true
          this.actualityService.update(this.actualite?.media?.id,formData).subscribe((res:any)=>{
              this.loading=false
               this.router.navigate(["/admin/actualites"])

             },
             (err:any)=>{
              this.loading=false
        
            })
      }

   getLink(dir:any,photo:any){
            return`${ConfigService.toFile("storage")}/${dir}/${photo}`
          }
      
}
