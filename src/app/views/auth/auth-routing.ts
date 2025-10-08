import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
export const AuthRounting: Routes = [

  {
    path:'auth',
    component:AuthLayoutComponent,
    children:[
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
      },
    ]
  }

]