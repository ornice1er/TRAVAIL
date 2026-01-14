import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TestService } from '../../../../../core/services/test.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../../core/utils/local-stoarge-service';
import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { CommuniqueService } from '../../../../../core/services/communique.service';
const Font = Quill.import('formats/font') as any;
Font.whitelist = ['bookman', 'arial', 'times-new-roman'];
Quill.register('formats/font', Font, true);

@Component({
  selector: 'app-test-creation',
  imports: [CommonModule,FormsModule,RouterModule,NgSelectModule,QuillModule,LoadingComponent],
  templateUrl: './test-creation.component.html',
  styleUrl: './test-creation.component.css'
})
export class TestCreationComponent {
activeMenu = 'concours';
  searchQuery = '';
  title = '';
   category = '';
  content = '';
     has_principal_access :any;
  publishLocation = '';
  showLocationDropdown = false;
loading=false
   publishOptions = [
    'Page d\'accueil',
    'Section actualités', 
    'Espace presse',
    'Archives'
  ];

  communiquesSelected:any[]=[];
communiques:any[]=[];


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
  constructor(
    private testService:TestService,
    private lsService:LocalStorageService,
    private router:Router,
    private toastr:ToastrService,
    private communiqueService:CommuniqueService
  ){

  }


  ngOnInit(){
    this.getAll()
  }


    getAll() {
      this.communiqueService.getAll(10,1).subscribe((res:any)=>{
          this.communiques=res.data.data
         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  handleSubmit() {
    this.loading=true
      this.testService.store({
        title:this.title,
        description:this.content,
        category:this.category,
        has_principal_access:this.has_principal_access,
        communiques:this.communiquesSelected
      }).subscribe((res:any)=>{
          this.loading=false
               this.router.navigate(['/admin/tests'])
    
          this.toastr.success('Connexion réussie', 'Connexion');
         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Concours');
    
        })
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
