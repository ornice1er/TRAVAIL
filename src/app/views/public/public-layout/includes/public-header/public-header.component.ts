import { Component, HostListener, OnDestroy } from '@angular/core';
import { ThemeService } from '../../../../../shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-public-header',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.css'
})
export class PublicHeaderComponent implements OnDestroy {
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

    private routerSub?: Subscription;

    constructor(public themeService: ThemeService, private router: Router) {}

    ngOnInit() {
      this.checkScroll();
      // Le menu mobile reste ouvert après un clic sur un lien de sous-menu : on le ferme à chaque navigation.
      this.routerSub = this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(() => this.closeMobileMenu());
    }

    ngOnDestroy() {
      this.routerSub?.unsubscribe();
      this.lockBodyScroll(false);
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
      this.lockBodyScroll(this.isMobileMenuOpen);

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
      this.lockBodyScroll(false);
    }

    /** Empêche la page de défiler derrière le menu mobile ouvert. */
    private lockBodyScroll(lock: boolean) {
      document.body.classList.toggle('overflow-hidden', lock);
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
