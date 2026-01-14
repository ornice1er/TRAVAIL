import { Component } from '@angular/core';
import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../../core/utils/local-stoarge-service';
import { TestService } from '../../../../../core/services/test.service';
import { CommuniqueService } from '../../../../../core/services/communique.service';
const Font = Quill.import('formats/font') as any;
Font.whitelist = ['bookman', 'arial', 'times-new-roman'];
Quill.register('formats/font', Font, true);

@Component({
  selector: 'app-test-edition',
  imports: [CommonModule,FormsModule,RouterModule,NgSelectModule,QuillModule,LoadingComponent],
  templateUrl: './test-edition.component.html',
  styleUrl: './test-edition.component.css'
})
export class TestEditionComponent {
activeMenu = 'concours';
  searchQuery = '';
  title = '';
  content = '';
   category = '';
     has_principal_access :any;
  publishLocation = '';
  showLocationDropdown = false;
loading=false
testId:any
mediaId:any
communiquesSelected:any[]=[];
communiques:any[]=[];

   publishOptions = [
    'Page d\'accueil',
    'Section actualités', 
    'Espace presse',
    'Archives'
  ];


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
    private route:ActivatedRoute,
    private toastr:ToastrService,
    private communiqueService:CommuniqueService
  ){

  }


  ngOnInit(){
    this.testId=this.route.snapshot.paramMap.get('id')
    if(this.testId){
      this.get()
      this.getAll()
    }
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


    get() {
    this.loading=true
      this.testService.get(this.testId).subscribe((res:any)=>{
          this.loading=false    
          this.mediaId=res.data?.media_id
          this.title=res.data?.title
          this.content=res.data?.description
          this.has_principal_access=res.data?.has_principal_access
          this.communiquesSelected=res.data?.communiques
          this.toastr.success('Connexion réussie', 'Connexion');
         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  handleSubmit() {
    this.loading=true
      this.testService.update(
        this.mediaId,
        {
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
          this.toastr.error(err.error?.message, 'Communiqué');
    
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
