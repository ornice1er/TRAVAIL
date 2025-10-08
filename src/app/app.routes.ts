import { Routes } from '@angular/router';
import { PublicRounting } from './views/public/public-routing';
import { AdminRounting } from './views/admin/admin-rounting';
import { AuthRounting } from './views/auth/auth-routing';

export const routes: Routes = [
  ...AuthRounting,
  ...PublicRounting,
  ...AdminRounting,
  {
    path: '**',
    redirectTo: ''
  }
];