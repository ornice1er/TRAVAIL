import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;

  constructor(private router:Router){

  }

  handleSubmit() {
    // Logique de connexion ici
    console.log('Connexion avec:', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    });

    this.router.navigate(['/admin/tableau-de-bord'])
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
