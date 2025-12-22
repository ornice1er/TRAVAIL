import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../../core/services/auth.service';
import { LocalStorageService } from '../../../../../core/utils/app-action-check';
import { GlobalName } from '../../../../../core/utils/global-name';
import { PageHeaderService } from '../../../../../core/services/page-header.service';
@Component({
  selector: 'app-admin-header',
  standalone:true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  searchQuery: string = '';
 @Output() toggleSidebar = new EventEmitter<boolean>();

  isOpen = false;
  

    constructor(
    private lsService:LocalStorageService,
    private toastr: ToastrService,
    private router:Router, 
    public headerService: PageHeaderService,
    private authService:AuthService){

  }
  
  toggleSidebarMobile(): void {
    this.isOpen = !this.isOpen;
    this.toggleSidebar.emit(this.isOpen);
  }



    logout(){
    this.authService.logout().subscribe((res:any)=>{
      this.lsService.remove(GlobalName.tokenName)
      this.lsService.remove(GlobalName.refreshTokenName)
      this.lsService.remove(GlobalName.expireIn)
      this.lsService.remove(GlobalName.userName)
      this.lsService.remove(GlobalName.exercice)
      this.router.navigate(['/auth/login'])
      this.toastr.success('Déconnexion réussie', 'Connexion');
    }),
    (err:any)=>{
      console.log(err)
      this.toastr.success('Déconnexion échouée', 'Connexion');

    } ;
  }

}
