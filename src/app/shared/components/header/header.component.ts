  import { Component, HostListener, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
  
  @Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
      <header [class]="headerClasses" class="transition-all duration-300" role="banner">
        <!-- Barre gouvernementale -->
        <div class="bg-primary-800 dark:bg-primary-900 text-white text-sm py-2 ease-in-out transition-all delay-100 duration-300" [class.hidden]="isScrolled">
          <div class="container-custom">
            <div class="flex justify-between items-center">
              <span>République du Bénin - Portail Officiel du Gouvernement</span>
              <a href="https://www.gouv.bj" target="_blank" class="hover:text-primary-200 dark:hover:text-primary-300 transition-colors" aria-label="Visiter le site officiel du gouvernement béninois">
                www.gouv.bj
              </a>
            </div>
          </div>
        </div>
        
        <!-- Navigation principale -->
        <nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" [class.shadow-lg]="isScrolled" role="navigation" aria-label="Navigation principale">
          <div class="container-custom">
            <div class="flex justify-between items-center py-4">
              <!-- Logo -->
              <div class="flex items-center space-x-4">
                <img src="assets/logo-mtfp.png" *ngIf="!themeService.isDarkMode" alt="Logo du Ministère du Travail et de la Fonction Publique du Bénin" class="h-14">
                <img src="assets/logo-mtfp-benin1.png" *ngIf="themeService.isDarkMode" alt="Logo du Ministère du Travail et de la Fonction Publique du Bénin" class="h-14">
              </div>
              
              <!-- Menu desktop -->
              <div class="hidden lg:flex items-center space-x-8" role="menubar">
                <a routerLink="/" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold" 
                   [routerLinkActiveOptions]="{exact: true}"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Accueil
                </a>
                <a routerLink="/ministere" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Le Ministère
                </a>
                <a routerLink="/services" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Services en ligne
                </a>
                <a routerLink="/textes-lois" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Textes & Lois
                </a>
                <a routerLink="/actualites" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Actualités
                </a>
                <a routerLink="/contact" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Contact
                </a>
                
                <!-- Toggle Dark Mode -->
                <button (click)="toggleTheme()" 
                        class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                        [attr.aria-label]="themeService.isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'">
                  <svg *ngIf="!themeService.isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                  </svg>
                  <svg *ngIf="themeService.isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </button>
              </div>
              
              <!-- Menu mobile button -->
              <button (click)="toggleMobileMenu()" 
                      class="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-label="Ouvrir le menu de navigation"
                      [attr.aria-expanded]="isMobileMenuOpen">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <!-- Menu mobile -->
            <div *ngIf="isMobileMenuOpen" class="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4" role="menu" aria-label="Menu de navigation mobile">
              <div class="flex flex-col space-y-4">
                <a routerLink="/" 
                   (click)="closeMobileMenu()"
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold" 
                   [routerLinkActiveOptions]="{exact: true}"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Accueil
                </a>
                <a routerLink="/ministere" 
                   (click)="closeMobileMenu()"
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Le Ministère
                </a>
                <a routerLink="/services" 
                   (click)="closeMobileMenu()"
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Services en ligne
                </a>
                <a routerLink="/textes-lois" 
                   (click)="closeMobileMenu()"
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Textes & Lois
                </a>
                <a routerLink="/actualites" 
                   (click)="closeMobileMenu()"
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Actualités
                </a>
                <a routerLink="/contact" 
                   (click)="closeMobileMenu()"
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Contact
                </a>
                
                <!-- Toggle Dark Mode Mobile -->
                <button (click)="toggleTheme()" 
                        class="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                        [attr.aria-label]="themeService.isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'">
                  <svg *ngIf="!themeService.isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                  </svg>
                  <svg *ngIf="themeService.isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                  <span>{{ themeService.isDarkMode ? 'Mode clair' : 'Mode sombre' }}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    `
  })
  export class HeaderComponent implements OnInit {
    isScrolled = false;
    isMobileMenuOpen = false;
    showMinistereMenu = false;
    showMobileMinistereMenu = false;
    
    constructor(public themeService: ThemeService) {}
    
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