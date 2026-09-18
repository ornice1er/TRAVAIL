import { Component, OnInit } from '@angular/core';
import { PublicFooterComponent } from './includes/public-footer/public-footer.component';
import { PublicHeaderComponent } from './includes/public-header/public-header.component';
import { RouterOutlet } from '@angular/router';
import { CookieConsentComponent } from '../../../shared/components/cookie-consent/cookie-consent.component';
import { BackToTopComponent } from '../../../shared/components/back-to-top/back-to-top.component';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-public-layout',
  imports: [PublicFooterComponent,PublicHeaderComponent,RouterOutlet,CookieConsentComponent,BackToTopComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit() {
    // Renseigne titre, description et balises de partage à chaque navigation.
    this.seo.watchRoutes();
  }
}
