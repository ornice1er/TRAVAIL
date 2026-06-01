import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-consent',
  imports: [CommonModule, RouterModule],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.css'
})
export class CookieConsentComponent {

  private static readonly STORAGE_KEY = 'mtfp_cookie_consent';

  visible = false;

  ngOnInit() {
    try {
      this.visible = !localStorage.getItem(CookieConsentComponent.STORAGE_KEY);
    } catch {
      // localStorage indisponible (mode privé strict) : on affiche par prudence
      this.visible = true;
    }
  }

  accepter() {
    this.enregistrer('accepted');
  }

  refuser() {
    this.enregistrer('refused');
  }

  private enregistrer(choix: 'accepted' | 'refused') {
    try {
      localStorage.setItem(CookieConsentComponent.STORAGE_KEY, choix);
    } catch {
      // ignore
    }
    this.visible = false;
  }
}
