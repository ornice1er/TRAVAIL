import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommuniqueService } from '../../../../../core/services/communique.service';
import { LocalStorageService } from '../../../../../core/utils/app-action-check';
import { GlobalName } from '../../../../../core/utils/global-name';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-communique-creation',
  imports: [CommonModule,FormsModule,RouterModule],
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
loading=true
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
    private toastr:ToastrService
  ){

  }


  ngOnInit(){

  }

  handleSubmit() {
    this.loading=true
      this.communiqueService.store({
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
