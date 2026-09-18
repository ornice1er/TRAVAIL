import { Component, HostListener } from '@angular/core';

/**
 * Fine barre indiquant la progression de lecture d'un article.
 * Purement décorative : masquée aux lecteurs d'écran.
 */
@Component({
  selector: 'app-reading-progress',
  standalone: true,
  template: `
    <div class="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent" aria-hidden="true">
      <div class="h-full bg-benin-green transition-[width] duration-150 ease-out"
           [style.width.%]="progress"></div>
    </div>
  `,
})
export class ReadingProgressComponent {
  progress = 0;

  @HostListener('window:scroll')
  onScroll() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
  }
}
