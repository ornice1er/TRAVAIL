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
            <div class="flex justify-end items-center">
              <div class="flex items-center space-x-4">
                <div class="hidden md:flex items-center space-x-3">
                  <a href="https://web.facebook.com/pages/BENIN-Minist%C3%A8re-du-Travail-et-de-la-Fonction-Publique/467476996720696?_rdc=1&_rdr" target="_blank" class="text-primary-200 hover:text-white transition-colors" aria-label="Suivez-nous sur Facebook">
                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/gouvbenin" target="_blank" class="text-primary-200 hover:text-white transition-colors" aria-label="Suivez-nous sur Twitter">
                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/playlist?list=PLh3-Uo-mLBzJVI7lrWZ0fCDo4nFNkNVTf" target="_blank" class="text-primary-200 hover:text-white transition-colors" aria-label="Suivez-nous sur YouTube">
                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="https://www.flickr.com/photos/194601638@N02/albums" target="_blank" class="text-primary-200 hover:text-white transition-colors" aria-label="Suivez-nous sur LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm10 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m5.5 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" clip-rule="evenodd"/></svg>
                  </a>
                  <a href="https://wa.me/+2290152160000" target="_blank" class="text-primary-200 hover:text-white transition-colors" aria-label="Suivez-nous sur LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a1 1 0 0 0-.372.1a1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231a5 5 0 0 0 .383-.22q.001.002.125-.09c.135-.1.218-.171.33-.288q.126-.13.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.5.5 0 0 0-.176-.041a.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536q-.42-1.026-.868-2.041c-.059-.134-.234-.23-.393-.249q-.081-.01-.162-.016a3 3 0 0 0-.403.004z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation principale -->
        <nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" [class.shadow-lg]="isScrolled" role="navigation" aria-label="Navigation principale">
          <div class="container-custom">
            <div class="flex justify-between items-center py-4">
              <!-- Logo -->
              <a routerLink="/" class="flex items-center space-x-4">
                <img src="/logo.png" *ngIf="!themeService.isDarkMode" alt="Logo du Ministère du Travail et de la Fonction Publique du Bénin" class="h-16">
                <img src="assets/logo-mtfp-benin1.png" *ngIf="themeService.isDarkMode" alt="Logo du Ministère du Travail et de la Fonction Publique du Bénin" class="h-14">
              </a>
              
              <!-- Menu desktop -->
              <div class="hidden lg:flex items-center space-x-8" role="menubar">
                <a routerLink="/" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold" 
                   [routerLinkActiveOptions]="{exact: true}"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                  Accueil
                </a>
                
                <!-- Menu Le Ministère avec dropdown -->
                <div class="relative" 
                     (mouseenter)="showMinistereMenu = true" 
                     (mouseleave)="showMinistereMenu = false">
                  <button class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium flex items-center"
                          [class.text-primary-800]="isMinistereActive()"
                          [class.dark:text-primary-400]="isMinistereActive()"
                          [class.font-semibold]="isMinistereActive()"
                          [attr.aria-expanded]="showMinistereMenu"
                          aria-haspopup="true"
                          role="menuitem">
                    Le Ministère
                    <svg class="w-4 h-4 ml-1 transition-transform duration-200" 
                         [class.rotate-180]="showMinistereMenu"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  
                  <!-- Dropdown menu -->
                  <div *ngIf="showMinistereMenu" 
                       class="absolute top-full left-0  w-2xl grid grid-cols-1 md:grid-cols-2 gap-x-3 bg-white space-y-0 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fade-in"
                       role="menu">
                    <a routerLink="/ministere/le-ministre" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Le Ministre
                    </a>
                    <a routerLink="/ministere/notre-vision" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Notre vision
                    </a>
                    <a routerLink="/ministere/secretariat-general" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Secrétariat Général du Ministère
                    </a>
                    <a routerLink="/ministere/inspection-generale" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Inspection Générale des Services et Emplois Publics
                    </a>
                    <a routerLink="/ministere/direction-planification" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Direction de la Planification de l'Administration et des Finances
                    </a>
                    <a routerLink="/ministere/direction-systemes-information" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Direction des Systèmes d'Information
                    </a>
                    <a routerLink="/ministere/direction-generale-travail" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Direction Générale du Travail
                    </a>
                    <a routerLink="/ministere/direction-generale-fonction-publique" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Direction Générale de la Fonction Publique
                    </a>
                    <a routerLink="/ministere/direction-renforcement-capacites" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Direction Générale du Renforcement des Capacités et de l'Employabilité
                    </a>
                    <a routerLink="/ministere/cellule-suivi-reformes" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Cellule de Suivi des Réformes
                    </a>
                    <a routerLink="/ministere/directions-departementales" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Directions Départementales
                    </a>
                    <a routerLink="/ministere/structures-sous-tutelle" 
                       class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                       role="menuitem">
                      Structures sous tutelle
                    </a>
                  </div>
                </div>
                
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
                <a routerLink="/fiches-metiers" 
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                   Fiches Métiers
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
                
                <!-- Menu Le Ministère mobile -->
                <div>
                  <button (click)="toggleMobileMinistereMenu()"
                          class="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium py-2"
                          [class.text-primary-800]="isMinistereActive()"
                          [class.dark:text-primary-400]="isMinistereActive()"
                          [class.font-semibold]="isMinistereActive()"
                          role="menuitem">
                    Le Ministère
                    <svg class="w-4 h-4 transition-transform duration-200" 
                         [class.rotate-180]="showMobileMinistereMenu"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  
                  <!-- Sous-menu mobile -->
                  <div *ngIf="showMobileMinistereMenu" class="ml-4 mt-2 space-y-2">
                    <a routerLink="/ministere/le-ministre" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Le Ministre
                    </a>
                    <a routerLink="/ministere/notre-vision" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Notre vision
                    </a>
                    <a routerLink="/ministere/secretariat-general" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Secrétariat Général
                    </a>
                    <a routerLink="/ministere/inspection-generale" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Inspection Générale
                    </a>
                    <a routerLink="/ministere/direction-planification" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Direction Planification
                    </a>
                    <a routerLink="/ministere/direction-systemes-information" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Direction Systèmes Information
                    </a>
                    <a routerLink="/ministere/direction-generale-travail" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Direction Générale Travail
                    </a>
                    <a routerLink="/ministere/direction-generale-fonction-publique" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Direction Générale Fonction Publique
                    </a>
                    <a routerLink="/ministere/direction-renforcement-capacites" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Direction Renforcement Capacités
                    </a>
                    <a routerLink="/ministere/cellule-suivi-reformes" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Cellule Suivi Réformes
                    </a>
                    <a routerLink="/ministere/directions-departementales" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Directions Départementales
                    </a>
                    <a routerLink="/ministere/structures-sous-tutelle" 
                       (click)="closeMobileMenu()"
                       class="block text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors py-2 text-sm"
                       role="menuitem">
                      Structures sous tutelle
                    </a>
                  </div>
                </div>
                
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
                <a routerLink="/fiches-metiers" 
                   (click)="closeMobileMenu()"
                   routerLinkActive="text-primary-800 dark:text-primary-400 font-semibold"
                   class="text-gray-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors font-medium"
                   role="menuitem">
                   Fiches Métiers
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