import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommuniqueService } from '../../../../../core/services/communique.service';
import { LocalStorageService } from '../../../../../core/utils/local-stoarge-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-communique-edition',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './communique-edition.component.html',
  styleUrl: './communique-edition.component.css'
})
export class CommuniqueEditionComponent {
activeMenu = 'communiques';
  searchQuery = '';
  title = '';
  content = '';
  publishLocation = '';
  showLocationDropdown = false;
loading=true
communiqueId:any
   publishOptions = [
    'Page d\'accueil',
    'Section actualités', 
    'Espace presse',
    'Archives'
  ];


  constructor(
    private communiqueService:CommuniqueService,
    private lsService:LocalStorageService,
    private router:Router,
    private route:ActivatedRoute,
    private toastr:ToastrService
  ){

  }


  ngOnInit(){
    this.communiqueId=this.route.snapshot.paramMap.get('id')
    if(this.communiqueId)this.get()
  }

    get() {
    this.loading=true
      this.communiqueService.get(this.communiqueId).subscribe((res:any)=>{
          this.loading=false    
          this.title=res.data?.title
          this.content=res.data?.description
          this.toastr.success('Connexion réussie', 'Connexion');
         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  handleSubmit() {
    this.loading=true
      this.communiqueService.update(
        this.communiqueId,
        {
        title:this.title,
        description:this.content
      }).subscribe((res:any)=>{
          this.loading=false
               this.router.navigate(['/admin/communiques'])
    
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
