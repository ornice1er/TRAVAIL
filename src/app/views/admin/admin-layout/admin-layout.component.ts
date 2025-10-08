import { Component } from '@angular/core';
import { AdminFooterComponent } from './includes/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './includes/admin-header/admin-header.component';
import { AdminSideBarComponent } from './includes/admin-side-bar/admin-side-bar.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule,AdminHeaderComponent,AdminSideBarComponent,RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
