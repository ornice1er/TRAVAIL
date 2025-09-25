import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <!-- Section principale -->
      <div class="section-padding">
        <div class="container-custom">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Logo et description -->
            <div class="col-span-1 lg:col-span-2">
              <div class="flex items-center space-x-3 mb-6">
                <img src="assets/logo-mtfp-benin1.png" alt="mtfp-logo" class="h-20">
              </div>
              <p class="text-gray-300 mb-6 max-w-md">
                Le Ministère du Travail et de la Fonction Publique œuvre pour le développement 
                de l'emploi, l'amélioration des conditions de travail et la modernisation de 
                l'administration publique au Bénin.
              </p>
              <div class="flex space-x-4">
                <a href="https://web.facebook.com/pages/BENIN-Minist%C3%A8re-du-Travail-et-de-la-Fonction-Publique/467476996720696?_rdc=1&_rdr" target="_blank" class="text-gray-400 hover:text-white transition-colors" aria-label="Suivez-nous sur Facebook">
                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/gouvbenin" target="_blank" class="text-gray-400 hover:text-white transition-colors" aria-label="Suivez-nous sur Twitter">
                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/playlist?list=PLh3-Uo-mLBzJVI7lrWZ0fCDo4nFNkNVTf" target="_blank" class="text-gray-400 hover:text-white transition-colors" aria-label="Suivez-nous sur YouTube">
                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="https://www.flickr.com/photos/194601638@N02/albums" target="_blank" class="text-gray-400 hover:text-white transition-colors" aria-label="Suivez-nous sur LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm10 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m5.5 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" clip-rule="evenodd"/></svg>
                  </a>
              </div>
            </div>
            
            <!-- Liens rapides -->
            <div>
              <h4 class="text-lg font-semibold mb-6">Liens rapides</h4>
              <ul class="space-y-3">
                <li><a routerLink="/" class="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
                <li><a routerLink="/ministere" class="text-gray-300 hover:text-white transition-colors">Le Ministère</a></li>
                <li><a routerLink="/services" class="text-gray-300 hover:text-white transition-colors">Services en ligne</a></li>
                <li><a routerLink="/textes-lois" class="text-gray-300 hover:text-white transition-colors">Textes & Lois</a></li>
                <li><a routerLink="/actualites" class="text-gray-300 hover:text-white transition-colors">Actualités</a></li>
                <li><a routerLink="/fiches-metiers" class="text-gray-300 hover:text-white transition-colors">Fiches Métiers</a></li>
                <li><a routerLink="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <!-- Institutions -->
            <div>
              <h4 class="text-lg font-semibold mb-6">Institutions</h4>
              <ul class="space-y-3">
                <li><a href="https://www.gouv.bj" target="_blank" class="text-gray-300 hover:text-white transition-colors">Gouvernement</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">ANPE</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">CNSS</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Inspection du Travail</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">DGFP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Barre de copyright -->
      <div class="border-t border-gray-800 py-6">
        <div class="container-custom">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm mb-4 md:mb-0">
              © {{ currentYear }} Ministère du Travail - République du Bénin. Tous droits réservés.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
              <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}