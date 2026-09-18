import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

/**
 * Bouton « retour en haut », affiché après un défilement d'un écran.
 * Les pages du site sont longues : il évite de remonter à la main.
 */
@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="scrollToTop()"
      class="to-top fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary-800 hover:bg-primary-900 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 flex items-center justify-center"
      [class.is-visible]="isVisible"
      [attr.aria-hidden]="!isVisible"
      [attr.tabindex]="isVisible ? 0 : -1"
      aria-label="Revenir en haut de la page">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  `,
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isVisible = window.scrollY > window.innerHeight * 0.8;
  }

  scrollToTop() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }
}
