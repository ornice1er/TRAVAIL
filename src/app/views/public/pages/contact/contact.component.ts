import {
  Component,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
  ElementRef,
  ViewChild,
  OnInit,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AnimationService } from "../../../../shared/services/animation.service";
import { PublicService } from "../../../../core/services/public.service";

export const environment = {
  mapbox: {
    accessToken:
      "pk.eyJ1Ijoic2NoYWRyYWMtc29kZSIsImEiOiJjbWQzNzdubzQwMXdiMmtzZG45NG16cTdzIn0.IdIFjYGQKRv7DBD1c9qfLw",
  },
};

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16"
    >
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p
            class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto"
          >
            Notre équipe est à votre disposition pour répondre à vos questions
            et vous accompagner dans vos démarches.
          </p>
        </div>
      </div>
    </div>

    <!-- Informations de contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div
            *ngFor="let contact of informationsContact"
            class="text-center  card p-8"
          >
            <div
              class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl">{{ contact.icone }}</span>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              {{ contact.titre }}
            </h3>
            <div class="space-y-2">
              <p [hidden]="contact.id === 5"
                *ngFor="let info of contact.informations"
                class="text-gray-600 dark:text-gray-300"
              >
              {{ info }}
              </p>
               <a
                  *ngIf="contact.id === 5"
                  href="{{ contact.informations[0] }}"
                  target="_blank"
                  >{{ contact.informations[0] }}</a
                >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire de contact -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12 ">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Envoyez-nous un message
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Nous vous répondrons dans les plus brefs délais
            </p>
          </div>

          <div class="card p-8 ">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    for="nom"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <span>Nom complet</span>
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    formControlName="nom"
                    [attr.aria-describedby]="
                      contactForm.get('nom')?.invalid &&
                      contactForm.get('nom')?.touched
                        ? 'nom-error'
                        : null
                    "
                    [attr.aria-invalid]="
                      contactForm.get('nom')?.invalid &&
                      contactForm.get('nom')?.touched
                    "
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                  <div
                    *ngIf="
                      contactForm.get('nom')?.invalid &&
                      contactForm.get('nom')?.touched
                    "
                    class="error-message"
                    id="nom-error"
                    role="alert"
                  >
                    Le nom est requis
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <span>Adresse email</span>
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    [attr.aria-describedby]="
                      contactForm.get('email')?.invalid &&
                      contactForm.get('email')?.touched
                        ? 'email-error'
                        : null
                    "
                    [attr.aria-invalid]="
                      contactForm.get('email')?.invalid &&
                      contactForm.get('email')?.touched
                    "
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                  <div
                    *ngIf="
                      contactForm.get('email')?.invalid &&
                      contactForm.get('email')?.touched
                    "
                    class="error-message"
                    id="email-error"
                    role="alert"
                  >
                    <span *ngIf="contactForm.get('email')?.errors?.['required']"
                      >L'email est requis</span
                    >
                    <span *ngIf="contactForm.get('email')?.errors?.['email']"
                      >Format d'email invalide</span
                    >
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    for="telephone"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    formControlName="telephone"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    placeholder="+229 XX XX XX XX"
                  />
                </div>

                <div>
                  <label
                    for="sujet"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <span>Sujet</span>
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                  <select
                    id="sujet"
                    formControlName="sujet"
                    [attr.aria-describedby]="
                      contactForm.get('sujet')?.invalid &&
                      contactForm.get('sujet')?.touched
                        ? 'sujet-error'
                        : null
                    "
                    [attr.aria-invalid]="
                      contactForm.get('sujet')?.invalid &&
                      contactForm.get('sujet')?.touched
                    "
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="emploi">Recherche d'emploi</option>
                    <option value="entreprise">Services aux entreprises</option>
                    <option value="formation">Formation professionnelle</option>
                    <option value="juridique">Question juridique</option>
                    <option value="autre">Autre</option>
                  </select>
                  <div
                    *ngIf="
                      contactForm.get('sujet')?.invalid &&
                      contactForm.get('sujet')?.touched
                    "
                    class="error-message"
                    id="sujet-error"
                    role="alert"
                  >
                    Veuillez sélectionner un sujet
                  </div>
                </div>
              </div>

              <div class="mb-6">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  <span>Message</span>
                  <span class="text-red-500" aria-label="requis">*</span>
                </label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="6"
                  [attr.aria-describedby]="
                    contactForm.get('message')?.invalid &&
                    contactForm.get('message')?.touched
                      ? 'message-error'
                      : null
                  "
                  [attr.aria-invalid]="
                    contactForm.get('message')?.invalid &&
                    contactForm.get('message')?.touched
                  "
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  placeholder="Décrivez votre demande ou votre question..."
                ></textarea>
                <div
                  *ngIf="
                    contactForm.get('message')?.invalid &&
                    contactForm.get('message')?.touched
                  "
                  class="error-message"
                  id="message-error"
                  role="alert"
                >
                  Le message est requis
                </div>
              </div>

              <div class="mb-6">
                <div class="flex items-start">
                  <input
                    type="checkbox"
                    formControlName="accepteTraitement"
                    id="accepteTraitement"
                    [attr.aria-describedby]="
                      contactForm.get('accepteTraitement')?.invalid &&
                      contactForm.get('accepteTraitement')?.touched
                        ? 'accepte-error'
                        : null
                    "
                    [attr.aria-invalid]="
                      contactForm.get('accepteTraitement')?.invalid &&
                      contactForm.get('accepteTraitement')?.touched
                    "
                    class="mt-1 rounded border-gray-300 dark:border-gray-600 text-secondary-600 focus:ring-secondary-500"
                  />
                  <label
                    for="accepteTraitement"
                    class="ml-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    J'accepte que mes données personnelles soient traitées par
                    le Ministère du Travail dans le cadre de ma demande.
                    <span class="text-red-500" aria-label="requis">*</span>
                  </label>
                </div>
                <div
                  *ngIf="
                    contactForm.get('accepteTraitement')?.invalid &&
                    contactForm.get('accepteTraitement')?.touched
                  "
                  class="error-message"
                  id="accepte-error"
                  role="alert"
                >
                  Vous devez accepter le traitement de vos données
                </div>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting"
                  [attr.aria-describedby]="
                    isSubmitting ? 'submit-status' : null
                  "
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span *ngIf="!isSubmitting">Envoyer le message</span>
                  <span
                    *ngIf="isSubmitting"
                    id="submit-status"
                    aria-live="polite"
                    >Envoi en cours...</span
                  >
                </button>
              </div>
            </form>

            <!-- Message de succès -->
            <div
              *ngIf="messageEnvoye"
              class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
              role="alert"
              aria-live="polite"
            >
              <div class="flex items-center">
                <span class="text-xl mr-3" aria-hidden="true">✅</span>
                <div>
                  <p class="font-medium">Message envoyé avec succès !</p>
                  <p class="text-sm">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
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
          <div class="">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Nos horaires d'ouverture
            </h3>
            <div class="space-y-4">
              <div
                *ngFor="let horaire of horaires"
                class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700"
              >
                <span class="font-medium text-gray-900 dark:text-white">{{
                  horaire.jour
                }}</span>
                <span class="text-gray-600 dark:text-gray-300">{{
                  horaire.heures
                }}</span>
              </div>
            </div>

            <div
              class="mt-8 p-6 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg"
            >
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                📍 Adresse
              </h4>
              <p class="text-gray-700 dark:text-gray-300">
                Ministère du Travail et de la Fonction Publique<br />
                Route de l'Aéroport, CITE MINISTERIELLE<br />
                01 BP 394 Cotonou, Bénin
              </p>
            </div>
          </div>

          <div class="">
            <!-- Placeholder pour la carte -->
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center"
            >
              <div
                #mapContainer
                id="map"
                class="w-full h-full absolute inset-0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm: FormGroup;
  isSubmitting = false;
  messageEnvoye = false;

  informationsContact = [
    {
      id: 1,
      icone: "📞",
      titre: "Téléphone",
      informations: ["+229 01 52 16 00 00", "Standard : Lun-Ven 8h-17h"],
    },
    {
      id: 2,
      icone: "💬",
      titre: "Whatsapp",
      informations: ["+229 01 52 16 00 00"],
    },
    {
      id: 3,
      icone: "✉️",
      titre: "Email",
      informations: ["mtfp.usager@gouv.bj"],
    },
    {
      id: 4,
      icone: "🏢",
      titre: "Bureaux",
      informations: ["Route de l'Aéroport", "CITE MINISTERIELLE", "Cotonou, Bénin"],
    },
    {
      id: 5,
      icone: "🏢",
      titre: "Portail des Démarches Administratives",
      informations: ["https://demarchesmtfp.gouv.bj/"],
    },
  ];

  horaires = [
    { jour: "Lundi - Vendredi", heures: "8h00 - 17h30" },
    { jour: "Samedi - Dimanche", heures: "Fermé" },
    { jour: "Jours fériés", heures: "Fermé" },
  ];
  @ViewChild("mapContainer") mapContainer!: ElementRef;
  @ViewChild("mapSection") mapSection!: ElementRef;
  map: any;
  private isBrowser: boolean;

  constructor(
    private fb: FormBuilder,
    private publicService:PublicService,
    private animationService: AnimationService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.contactForm = this.fb.group({
      nom: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telephone: [""],
      sujet: ["", [Validators.required]],
      message: ["", [Validators.required]],
      accepteTraitement: [false, [Validators.requiredTrue]],
    });
  }
  ngOnInit(): void {
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
    if (!this.isBrowser) return;
    const mapboxglModule = await import("mapbox-gl");
    const mapboxgl = mapboxglModule.default;
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: "mapbox://styles/schadrac-sode/cl6v4rrem000m14osw4s29xnr",
      center: [2.3997338, 6.354602],
      zoom: 12,
      accessToken: environment.mapbox.accessToken,
    });
    const marker = new mapboxgl.Marker({ color: "#ff0000" })
      .setLngLat([2.3997338, 6.354602])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3 class="font-bold text-lg text-black">Ministère du Travail et de la Fonction Publique</h3><p class="text-gray-600">Route de l'Aéroport, CITE MINISTERIELLE, Cotonou, Bénin</p>`
        )
      )
      .addTo(this.map);
  }

  onSubmit() {
      this.isSubmitting = true;

      // Simuler l'envoi du message  

        this.publicService.sendContactForm(this.contactForm.value).subscribe((res:any) =>{
        this.contactForm.reset();
              this.isSubmitting = false;
        this.messageEnvoye = true;

        },(err:any) =>{
                        this.isSubmitting = false;

        })
  }
}
