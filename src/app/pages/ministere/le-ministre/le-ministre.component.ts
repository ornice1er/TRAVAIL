import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationService } from '../../../shared/services/animation.service';

@Component({
  selector: 'app-le-ministre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center animate-on-scroll">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">LE MINISTRE</h1>
          <p class="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
            Découvrez le profil de Madame Adidjatou A. MATHYS et son équipe gouvernementale.
          </p>
        </div>
      </div>
    </div>

    <!-- Contenu principal avec sidebar -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Menu latéral -->
          <div class="lg:col-span-1">
            <div class="sticky top-32">
              <div class="card p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">Navigation</h3>
                <nav class="space-y-2" role="tablist">
                  <button 
                    (click)="activeTab = 'biographie'"
                    [class]="activeTab === 'biographie' ? 'bg-primary-800 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
                    class="w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200"
                    role="tab"
                    [attr.aria-selected]="activeTab === 'biographie'"
                    aria-controls="biographie-content">
                    📖 Biographie
                  </button>
                  <button 
                    (click)="activeTab = 'cabinet'"
                    [class]="activeTab === 'cabinet' ? 'bg-primary-800 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
                    class="w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200"
                    role="tab"
                    [attr.aria-selected]="activeTab === 'cabinet'"
                    aria-controls="cabinet-content">
                    👥 Cabinet
                  </button>
                </nav>
              </div>
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="lg:col-span-3">
            <!-- Contenu Biographie -->
            <div *ngIf="activeTab === 'biographie'" 
                 id="biographie-content"
                 role="tabpanel"
                 class="animate-on-scroll">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Photo du ministre -->
                <div class="text-center lg:text-left">
                  <div class="relative inline-block">
                    <img src="https://www.travail.gouv.bj/storage/structures/respos/1678790596adidjatou-a-mathys.jpg" 
                         alt="Madame Adidjatou A. MATHYS, Ministre du Travail" 
                         class="rounded-2xl shadow-lg w-full max-w-md mx-auto">
                    <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center">
                      <span class="text-white text-xl">🇧🇯</span>
                    </div>
                  </div>
                </div>

                <!-- Informations du ministre -->
                <div>
                  <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Adidjatou A. MATHYS</h2>
                  <h3 class="text-xl font-semibold text-primary-800 dark:text-primary-400 mb-6">Ministre du Travail et de la Fonction Publique</h3>
                  
                  <!-- Biographie -->
                  <div class="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <div [class.line-clamp-6]="!showFullBio" class="transition-all duration-300">
                      <p class="mb-4">
                        Mariée et mère de trois enfants, Mme Adidjatou MATHYS est experte en Finance et en Comptabilité de l'État. 
                        Administrateur du Trésor à la retraite, elle peut se targuer d'avoir eu un parcours professionnel élogieux, 
                        fait d'une série de promotions, confirmant la reconnaissance de ses mérites.
                      </p>
                      
                      <p class="mb-4">
                        En effet, après l'obtention en 1981 de la Maîtrise ès-Sciences Économiques (option Finances et Fiscalité) 
                        à l'Université Nationale du Bénin, Mme Adidjatou MATHYS fut de 1982 à 1983, Assistant du Chef du Service 
                        des Affaires Financières du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique.
                      </p>
                      
                      <p class="mb-4">
                        Pour répondre à la maxime selon laquelle les grands esprits ont un but, cette femme battante et confiante 
                        en ses capacités à réussir, a poursuivi ses études au CEFAP de 1982 à 1984 et a obtenu le Diplôme en 
                        Administration Centrale des Finances et Trésor.
                      </p>
                      
                      <p class="mb-4">
                        À partir de 1984, elle se retrouve à la Direction Générale du Trésor et de la Comptabilité Publique (DGTCP). 
                        C'est là qu'elle fit l'essentiel de sa carrière car elle y est restée jusqu'en 2003 et a gravi toutes les 
                        marches avant d'accéder au poste de Directrice Générale du Trésor et de la Comptabilité Publique en 1999.
                      </p>
                      
                      <p class="mb-4">
                        Avant de se voir confier cette responsabilité, Adidjatou MATHYS a été successivement, Assistant du Receveur 
                        du Centre de Recouvrement, Chef Adjoint et ensuite, Chef du Service de la Dépense, Receveur des Finances 
                        de l'Ouémé et Directrice Générale Adjointe de la DGTCP.
                      </p>
                      
                      <p class="mb-4">
                        Elle a mis ses expériences accumulées, au service de plusieurs structures, institutions tant au plan national 
                        que régional et ce, à travers sa présence dans les organes de décision. Elle fut par exemple membre du Conseil 
                        d'Administration de la BCEAO, membre du Conseil de Gérance de la Caisse Autonome d'Amortissement et du Conseil 
                        d'Administration de la Continental Bank.
                      </p>
                      
                      <p class="mb-4">
                        À partir de 2006, la vie professionnelle d'Adidjatou MATHYS a pris une autre tournure. Grâce à sa détermination 
                        et son engagement, elle est désormais présente dans la grande sphère de décisions sur les questions des finances 
                        et de l'économie du Bénin.
                      </p>
                      
                      <p class="mb-4">
                        Avec une compétence avérée, elle fut successivement nommée de 2006 à 2011, Directrice de Cabinet du Ministre 
                        Délégué chargé du Budget auprès du Ministre du Développement, de l'Économie et des Finances, et Directrice 
                        de Cabinet du Ministre de l'Économie et des Finances.
                      </p>
                      
                      <p class="mb-4">
                        Ayant découvert en elle des qualités et des aptitudes pour un meilleur service à la nation, le Président 
                        Boni YAYI la propulse au-devant de la scène publique en la nommant dans son gouvernement en 2012, 
                        Ministre de l'Économie et des Finances.
                      </p>
                      
                      <p class="mb-4">
                        Patrice Talon, devenu Président de la République en Avril 2016, l'a rappelé à ses côtés pour la gestion 
                        des affaires de l'État. Le Chef de l'État qui ne doute point de ses compétences, lui a confié dans son 
                        premier gouvernement, la charge de Ministre du Travail, de la Fonction Publique et des Affaires Sociales.
                      </p>
                      
                      <p>
                        Bien conscient de l'immensité du chantier relatif à la dynamisation et à la modernisation de l'Administration 
                        publique Béninoise, le Président Patrice Talon, à l'occasion du remaniement ministériel du 27 octobre 2017, 
                        a renouvelé toute sa confiance à cette femme de défis en la maintenant à la tête du très stratégique 
                        Ministère du Travail et de la Fonction Publique.
                      </p>
                    </div>
                    
                    <!-- Bouton Lire plus -->
                    <div class="mt-6">
                      <button 
                        (click)="toggleBio()"
                        class="btn-primary text-sm">
                        {{ showFullBio ? 'Lire moins' : 'Lire plus' }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contenu Cabinet -->
            <div *ngIf="activeTab === 'cabinet'" 
                 id="cabinet-content"
                 role="tabpanel"
                 class="animate-on-scroll">
              <div class="mb-8">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cabinet du Ministre</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                  L'équipe dirigeante qui accompagne le Ministre dans l'exercice de ses fonctions.
                </p>
              </div>

              <!-- Grille des membres du cabinet -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div *ngFor="let membre of membresCabinet" class="card p-6 text-center animate-on-scroll hover:shadow-lg transition-all duration-300">
                  <!-- Photo -->
                  <div class="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                    <img [src]="membre.photo" 
                         [alt]="membre.nom" 
                         class="w-full h-full object-cover"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="w-full h-full bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center" style="display: none;">
                      <span class="text-2xl text-primary-600 dark:text-primary-400">👤</span>
                    </div>
                  </div>
                  
                  <!-- Nom -->
                  <h3 class="text-lg font-bold text-primary-800 dark:text-primary-400 mb-2">{{ membre.nom }}</h3>
                  
                  <!-- Fonction -->
                  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ membre.fonction }}</p>
                  
                  <!-- Contact optionnel -->
                  <div *ngIf="membre.email" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <a [href]="'mailto:' + membre.email" 
                       class="text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm">
                      ✉️ Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section-padding bg-primary-800 dark:bg-primary-900 text-white">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center animate-on-scroll">
          <h3 class="text-2xl lg:text-3xl font-bold mb-6">
            Abonnez-vous à notre newsletter
          </h3>
          <p class="text-lg text-primary-100 dark:text-primary-200 mb-8">
            Restez informé des dernières actualités et initiatives du Ministère du Travail.
          </p>
          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" (ngSubmit)="onNewsletterSubmit()" #newsletterForm="ngForm">
            <input 
              type="email" 
              name="email"
              [(ngModel)]="newsletterEmail"
              placeholder="Votre adresse email"
              required
              class="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-white focus:border-transparent">
            <button 
              type="submit"
              [disabled]="newsletterForm.invalid || isSubmittingNewsletter"
              class="bg-secondary-600 hover:bg-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors">
              {{ isSubmittingNewsletter ? 'Envoi...' : 'Envoyer' }}
            </button>
          </form>
          
          <!-- Message de succès newsletter -->
          <div *ngIf="newsletterSuccess" 
               class="mt-4 p-4 bg-green-600/20 border border-green-400 text-green-100 rounded-lg"
               role="alert">
            ✅ Inscription réussie ! Merci de votre intérêt.
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .line-clamp-6 {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .sticky {
      position: sticky;
    }
  `]
})
export class LeMinistereComponent implements AfterViewInit {
  activeTab = 'biographie';
  showFullBio = false;
  newsletterEmail = '';
  isSubmittingNewsletter = false;
  newsletterSuccess = false;
  
  membresCabinet = [
    {
      nom: 'HONVOH V. Victorin',
      fonction: 'Directeur de Cabinet',
      photo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'directeur.cabinet@travail.gouv.bj'
    },
    {
      nom: 'YEHOUENOU Comlan Jules',
      fonction: 'Directeur Adjoint de Cabinet',
      photo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'directeur.adjoint@travail.gouv.bj'
    },
    {
      nom: 'AHOUANDJINOU ZINSOU Christine',
      fonction: 'Conseillère Technique à la Fonction Publique',
      photo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'ct.fonctionpublique@travail.gouv.bj'
    },
    {
      nom: 'AMINOU N. Gilbert',
      fonction: 'Conseiller Technique Juridique',
      photo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'ct.juridique@travail.gouv.bj'
    },
    {
      nom: 'DENAKPO Vincent N.',
      fonction: 'Conseiller Technique à la Modernisation des Services',
      photo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'ct.modernisation@travail.gouv.bj'
    },
    {
      nom: 'AGBODJOGBE Armel',
      fonction: 'Assistant du Ministre',
      photo: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'assistant.ministre@travail.gouv.bj'
    },
    {
      nom: 'ZANOU Pierre A.',
      fonction: 'Conseiller Technique au Travail et au Dialogue Social',
      photo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'ct.dialogue@travail.gouv.bj'
    },
    {
      nom: 'RAIMI Faousiath M. Ayikè',
      fonction: 'Conseillère Technique à la Valorisation des Ressources Humaines de l\'État',
      photo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'ct.rh@travail.gouv.bj'
    },
    {
      nom: 'YAHA Z. Pascal',
      fonction: 'Expert en réflexion stratégique auprès du Ministre',
      photo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'expert.strategique@travail.gouv.bj'
    },
    {
      nom: 'Léontine ATTOLOU',
      fonction: 'Experte en Fonction Publique / Chargée d\'études',
      photo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'expert.fp@travail.gouv.bj'
    },
    {
      nom: 'Ambroise AHOKOU',
      fonction: 'Point Focal Communication',
      photo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'communication@travail.gouv.bj'
    },
    {
      nom: 'ALASSANE Aboubacar',
      fonction: 'Conseiller Technique à la Prévoyance Sociale',
      photo: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'ct.prevoyance@travail.gouv.bj'
    }
  ];
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
  
  toggleBio() {
    this.showFullBio = !this.showFullBio;
  }
  
  onNewsletterSubmit() {
    if (this.newsletterEmail) {
      this.isSubmittingNewsletter = true;
      
      // Simuler l'envoi
      setTimeout(() => {
        this.isSubmittingNewsletter = false;
        this.newsletterSuccess = true;
        this.newsletterEmail = '';
        
        // Cacher le message après 5 secondes
        setTimeout(() => {
          this.newsletterSuccess = false;
        }, 5000);
      }, 1500);
    }
  }
}