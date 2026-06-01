import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../../../../shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-header',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.css'
})
export class PublicHeaderComponent {
 isScrolled = false;
    isMobileMenuOpen = false;
    showMinistereMenu = false;
    showMobileMinistereMenu = false;
    showSearch = false;
    searchTerm = '';

    // Méga-menu « Le Ministère » regroupé par familles
    ministereMenu = [
      {
        titre: 'Cabinet & Gouvernance',
        liens: [
          { label: 'Le Ministre', route: '/ministere/le-ministre' },
          { label: 'Le Cabinet', route: '/ministere/le-cabinet' },
          { label: 'Notre vision', route: '/ministere/notre-vision' },
          { label: 'Secrétariat Général du Ministère', route: '/ministere/secretariat-general' },
        ],
      },
      {
        titre: 'Directions techniques',
        liens: [
          { label: 'Direction Générale du Travail', route: '/ministere/direction-generale-travail' },
          { label: 'Direction Générale de la Fonction Publique', route: '/ministere/direction-generale-fonction-publique' },
          { label: 'Direction Générale du Budget', route: '/ministere/direction-budget' },
          { label: 'Direction Générale du Renforcement des Capacités et de l\'Employabilité', route: '/ministere/direction-renforcement-capacites' },
          { label: 'Direction de la Planification de l\'Administration et des Finances', route: '/ministere/direction-planification' },
          { label: 'Direction des Systèmes d\'Information', route: '/ministere/direction-systemes-information' },
        ],
      },
      {
        titre: 'Inspection & Réformes',
        liens: [
          { label: 'Inspection Générale des Services et Emplois Publics', route: '/ministere/inspection-generale' },
          { label: 'Cellule de Suivi des Réformes', route: '/ministere/cellule-suivi-reformes' },
        ],
      },
      {
        titre: 'Territoires & Tutelle',
        liens: [
          { label: 'Directions Départementales', route: '/ministere/directions-departementales' },
          { label: 'Structures sous tutelle', route: '/ministere/structures-sous-tutelle' },
        ],
      },
    ];

    constructor(public themeService: ThemeService, private router: Router) {}
    
    get headerClasses(): string {
      return this.isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50' : 'bg-transparent';
    }
    
    ngOnInit() {
      this.checkScroll();
    }
    
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.checkScroll();
    }
    
    @HostListener('keydown.escape', [])
    onEscapeKey() {
      if (this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
      if (this.showMinistereMenu) {
        this.showMinistereMenu = false;
      }
      if (this.showSearch) {
        this.showSearch = false;
      }
    }

    toggleSearch() {
      this.showSearch = !this.showSearch;
      if (this.showSearch) {
        setTimeout(() => {
          const input = document.querySelector('#header-search-input');
          if (input) { (input as HTMLElement).focus(); }
        }, 100);
      }
    }

    submitSearch() {
      const q = (this.searchTerm || '').trim();
      if (q.length < 2) { return; }
      this.showSearch = false;
      this.closeMobileMenu();
      this.router.navigate(['/recherche'], { queryParams: { q } });
    }
    
    private checkScroll() {
      this.isScrolled = window.pageYOffset > 0;
    }
    
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      
      // Gérer l'accessibilité du focus
      if (this.isMobileMenuOpen) {
        // Focus sur le premier élément du menu
        setTimeout(() => {
          const firstMenuItem = document.querySelector('[role="menu"] a');
          if (firstMenuItem) {
            (firstMenuItem as HTMLElement).focus();
          }
        }, 100);
      }
    }
    
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      this.showMobileMinistereMenu = false;
    }
    
    toggleMobileMinistereMenu() {
      this.showMobileMinistereMenu = !this.showMobileMinistereMenu;
    }
    
    isMinistereActive(): boolean {
      return window.location.pathname.startsWith('/ministere');
    }
    
    toggleTheme() {
      this.themeService.toggleTheme();
    }
}
