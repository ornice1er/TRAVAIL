import { Component } from '@angular/core';
import { PublicFooterComponent } from './includes/public-footer/public-footer.component';
import { PublicHeaderComponent } from './includes/public-header/public-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [PublicFooterComponent,PublicHeaderComponent,RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent {

}
