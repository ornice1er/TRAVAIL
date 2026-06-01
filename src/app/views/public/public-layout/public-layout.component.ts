import { Component } from '@angular/core';
import { PublicFooterComponent } from './includes/public-footer/public-footer.component';
import { PublicHeaderComponent } from './includes/public-header/public-header.component';
import { RouterOutlet } from '@angular/router';
import { CookieConsentComponent } from '../../../shared/components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-public-layout',
  imports: [PublicFooterComponent,PublicHeaderComponent,RouterOutlet,CookieConsentComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent {

}
