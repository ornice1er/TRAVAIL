import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { LocalStorageService } from '../../../../core/utils/local-stoarge-service';
import { ToastrService } from 'ngx-toastr';
import { AppRedirect } from '../../../../core/utils/app-redirect';
import { GlobalName } from '../../../../core/utils/global-name';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule,LoadingComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;
  loading:any=false
  constructor(
    private lsService:LocalStorageService,
    private toastr: ToastrService,
    private router:Router, 
    private authService:AuthService){

  }

  handleSubmit() {
    // Logique de connexion ici
    this.loading=true
      this.authService.login({email: this.email,password: this.password}).subscribe((res:any)=>{
      this.lsService.set(GlobalName.tokenName,res.data?.access_token)
     this.authService.me().subscribe((res:any)=>{
      this.loading=false
      this.lsService.set(GlobalName.userName,res.data?.user);
           this.router.navigate(['/admin/tableau-de-bord'])

      this.toastr.success('Connexion réussie', 'Connexion');
     },
     (err:any)=>{
      this.loading=false
      this.toastr.error(err.error?.message, 'Connexion');

    })
    },
    (res:any)=>{

    })

  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
