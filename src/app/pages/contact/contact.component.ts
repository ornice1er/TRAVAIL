import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationService } from '../../shared/services/animation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos démarches.
          </p>
        </div>
      </div>
    </div>

    <!-- Informations de contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div *ngFor="let contact of informationsContact" 
               class="text-center animate-on-scroll card p-8">
            <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ contact.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ contact.titre }}</h3>
            <div class="space-y-2">
              <p *ngFor="let info of contact.informations" class="text-gray-600 dark:text-gray-300">{{ info }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire de contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12 animate-on-scroll">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Envoyez-nous un message</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">Nous vous répondrons dans les plus brefs délais</p>
          </div>
          
          <div class="card p-8 animate-on-scroll">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="nom" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <span>Nom complet</span>
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="nom" 
                    formControlName="nom"
                    [attr.aria-describedby]="contactForm.get('nom')?.invalid && contactForm.get('nom')?.touched ? 'nom-error' : null"
                    [attr.aria-invalid]="contactForm.get('nom')?.invalid && contactForm.get('nom')?.touched"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    placeholder="Votre nom complet">
                  <div *ngIf="contactForm.get('nom')?.invalid && contactForm.get('nom')?.touched" 
                       class="error-message"
                       id="nom-error"
                       role="alert">
                    Le nom est requis
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <span>Adresse email</span>
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    [attr.aria-describedby]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched ? 'email-error' : null"
                    [attr.aria-invalid]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    placeholder="votre@email.com">
                  <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                       class="error-message"
                       id="email-error"
                       role="alert">
                    <span *ngIf="contactForm.get('email')?.errors?.['required']">L'email est requis</span>
                    <span *ngIf="contactForm.get('email')?.errors?.['email']">Format d'email invalide</span>
                  </div>
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="telephone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Téléphone
                  </label>
                  <input 
                    type="tel" 
                    id="telephone" 
                    formControlName="telephone"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    placeholder="+229 XX XX XX XX">
                </div>
                
                <div>
                  <label for="sujet" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <span>Sujet</span>
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                  <select 
                    id="sujet" 
                    formControlName="sujet"
                    [attr.aria-describedby]="contactForm.get('sujet')?.invalid && contactForm.get('sujet')?.touched ? 'sujet-error' : null"
                    [attr.aria-invalid]="contactForm.get('sujet')?.invalid && contactForm.get('sujet')?.touched"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="emploi">Recherche d'emploi</option>
                    <option value="entreprise">Services aux entreprises</option>
                    <option value="formation">Formation professionnelle</option>
                    <option value="juridique">Question juridique</option>
                    <option value="autre">Autre</option>
                  </select>
                  <div *ngIf="contactForm.get('sujet')?.invalid && contactForm.get('sujet')?.touched" 
                       class="error-message"
                       id="sujet-error"
                       role="alert">
                    Veuillez sélectionner un sujet
                  </div>
                </div>
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span>Message</span>
                  <span class="text-red-500" aria-label="requis">*</span>
                </label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="6"
                  [attr.aria-describedby]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched ? 'message-error' : null"
                  [attr.aria-invalid]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  placeholder="Décrivez votre demande ou votre question..."></textarea>
                <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                     class="error-message"
                     id="message-error"
                     role="alert">
                  Le message est requis
                </div>
              </div>
              
              <div class="mb-6">
                <div class="flex items-start">
                  <input 
                    type="checkbox" 
                    formControlName="accepteTraitement"
                    id="accepteTraitement"
                    [attr.aria-describedby]="contactForm.get('accepteTraitement')?.invalid && contactForm.get('accepteTraitement')?.touched ? 'accepte-error' : null"
                    [attr.aria-invalid]="contactForm.get('accepteTraitement')?.invalid && contactForm.get('accepteTraitement')?.touched"
                    class="mt-1 rounded border-gray-300 dark:border-gray-600 text-secondary-600 focus:ring-secondary-500">
                  <label for="accepteTraitement" class="ml-3 text-sm text-gray-600 dark:text-gray-300">
                    J'accepte que mes données personnelles soient traitées par le Ministère du Travail dans le cadre de ma demande.
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                </div>
                <div *ngIf="contactForm.get('accepteTraitement')?.invalid && contactForm.get('accepteTraitement')?.touched"
                     class="error-message"
                     id="accepte-error"
                     role="alert">
                  Vous devez accepter le traitement de vos données
                </div>
              </div>
              
              <div class="text-center">
                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid || isSubmitting"
                  [attr.aria-describedby]="isSubmitting ? 'submit-status' : null"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  <span *ngIf="!isSubmitting">Envoyer le message</span>
                  <span *ngIf="isSubmitting" id="submit-status" aria-live="polite">Envoi en cours...</span>
                </button>
              </div>
            </form>
            
            <!-- Message de succès -->
            <div *ngIf="messageEnvoye" 
                 class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                 role="alert"
                 aria-live="polite">
              <div class="flex items-center">
                <span class="text-xl mr-3" aria-hidden="true">✅</span>
                <div>
                  <p class="font-medium">Message envoyé avec succès !</p>
                  <p class="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Horaires et localisation -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nos horaires d'ouverture</h3>
            <div class="space-y-4">
              <div *ngFor="let horaire of horaires" class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span class="font-medium text-gray-900 dark:text-white">{{ horaire.jour }}</span>
                <span class="text-gray-600 dark:text-gray-300">{{ horaire.heures }}</span>
              </div>
            </div>
            
            <div class="mt-8 p-6 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">📍 Adresse</h4>
              <p class="text-gray-700 dark:text-gray-300">
                Ministère du Travail et de la Fonction Publique<br>
                Route de l'Aéroport, face SONAPRA<br>
                01 BP 394 Cotonou, Bénin
              </p>
            </div>
          </div>
          
          <div class="animate-on-scroll">
            <!-- Placeholder pour la carte -->
            <div class="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
              <div class="text-center text-gray-500 dark:text-gray-400">
                <div class="text-4xl mb-4">🗺️</div>
                <p class="text-lg font-medium">Plan d'accès</p>
                <p class="text-sm">Carte interactive disponible prochainement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit {
  contactForm: FormGroup;
  isSubmitting = false;
  messageEnvoye = false;
  
  informationsContact = [
    {
      icone: '📞',
      titre: 'Téléphone',
      informations: [
        '+229 21 30 00 00',
        '+229 21 30 12 34',
        'Standard : Lun-Ven 8h-17h'
      ]
    },
    {
      icone: '✉️',
      titre: 'Email',
      informations: [
        'contact@travail.gouv.bj',
        'info@travail.gouv.bj',
        'support@travail.gouv.bj'
      ]
    },
    {
      icone: '🏢',
      titre: 'Bureaux',
      informations: [
        'Route de l\'Aéroport',
        'Face SONAPRA',
        'Cotonou, Bénin'
      ]
    }
  ];
  
  horaires = [
    { jour: 'Lundi - Vendredi', heures: '8h00 - 17h00' },
    { jour: 'Samedi', heures: '8h00 - 12h00' },
    { jour: 'Dimanche', heures: 'Fermé' },
    { jour: 'Jours fériés', heures: 'Fermé' }
  ];
  
  constructor(
    private fb: FormBuilder,
    private animationService: AnimationService
  ) {
    this.contactForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      sujet: ['', [Validators.required]],
      message: ['', [Validators.required]],
      accepteTraitement: [false, [Validators.requiredTrue]]
    });
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simuler l'envoi du message
      setTimeout(() => {
        this.isSubmitting = false;
        this.messageEnvoye = true;
        this.contactForm.reset();
        
        // Cacher le message de succès après 5 secondes
        setTimeout(() => {
          this.messageEnvoye = false;
        }, 5000);
      }, 2000);
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}