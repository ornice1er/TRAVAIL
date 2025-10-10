import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { IsAuthedGuard } from '../../core/guards/is-authed.guard';
export const AuthRounting: Routes = [

  {
    path:'auth',
    component:AuthLayoutComponent,
    canActivate: [IsAuthedGuard],
    children:[
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
      },
    ]
  }

]