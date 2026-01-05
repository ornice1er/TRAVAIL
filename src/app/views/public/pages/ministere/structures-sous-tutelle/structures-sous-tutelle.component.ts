import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../../../shared/services/animation.service';
import { PublicService } from '../../../../../core/services/public.service';
import { ConfigService } from '../../../../../core/utils/config-service';

@Component({
  selector: 'app-structures-sous-tutelle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-secondary-900 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Structures sous Tutelle</h1>
          <p class="text-xl text-secondary-100 dark:text-secondary-200 max-w-3xl mx-auto">
            Les organismes et institutions spécialisés placés sous la tutelle du Ministère du Travail et de la Fonction Publique.
          </p>
        </div>
      </div>
    </div>

    <!-- Structures Principales -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Structures Principales</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Les organismes clés sous tutelle du ministère
          </p>
        </div>
        
        <div class="space-y-8">
          <div *ngFor="let structure of structures" class="card p-8 ">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div class="lg:col-span-3">
                <div class="flex items-start space-x-6">
                  <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-3xl">{{ structure.icone }}</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center space-x-3 mb-3">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ structure.name }}</h3>
                      <span [class]="getStatusClass(structure.statut)" class="px-3 py-1 rounded-full text-xs font-medium">
                        {{ structure.statut }}
                      </span>
                    </div>
                    <p class="text-lg text-secondary-700 dark:text-secondary-400 font-medium mb-4">{{ structure.sigle }}</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{{ structure.description }}</p>
                    
                    
                  </div>
                </div>
              </div>
              <div class="text-center">
                <div class="mb-4">
                  <img [src]="getLink('sts',structure.logo)" [alt]="'Logo ' + structure.name" class="w-24 h-24 mx-auto rounded-lg shadow-md">
                </div>
                <div class="space-y-2">
                  <a [href]="structure.link" target="_blank" class="btn-secondary text-sm w-full block">
                    Site Web
                  </a>
                  <!-- <p class="text-xs text-gray-500 dark:text-gray-400">
                    DG : {{ structure.name_responsable }}
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Types de Tutelle -->
    <!-- <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Types de Tutelle</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Modalités d'exercice de la tutelle ministérielle
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let type of typesTutelle" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ type.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ type.nom }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ type.description }}</p>
            <ul class="space-y-2 text-sm">
              <li *ngFor="let caracteristique of type.caracteristiques" class="flex items-start">
                <span class="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span class="text-gray-700 dark:text-gray-300">{{ caracteristique }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Gouvernance -->
    <!-- <section class="section-padding bg-secondary-800 dark:bg-secondary-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">Gouvernance et Contrôle</h2>
          <p class="text-xl text-secondary-100 dark:text-secondary-200">
            Mécanismes de pilotage et de contrôle des structures sous tutelle
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let mecanisme of mecanismesGouvernance" class="text-center ">
            <div class="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ mecanisme.icone }}</span>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ mecanisme.nom }}</h3>
            <p class="text-secondary-100 dark:text-secondary-200 text-sm mb-4">{{ mecanisme.description }}</p>
            <div class="text-xs text-secondary-200 dark:text-secondary-300">
              {{ mecanisme.frequence }}
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Performance -->
    <!-- <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Performance Globale</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Indicateurs de performance des structures sous tutelle
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let indicateur of indicateursPerformance" class="text-center ">
            <div class="w-20 h-20 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ indicateur.icone }}</span>
            </div>
            <div class="text-3xl font-bold text-secondary-700 dark:text-secondary-400 mb-2">{{ indicateur.valeur }}</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ indicateur.titre }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ indicateur.description }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Partenariats -->
    <!-- <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Partenariats Stratégiques</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Collaborations avec les partenaires nationaux et internationaux
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let partenariat of partenariats" class="card p-6 text-center ">
            <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ partenariat.icone }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ partenariat.type }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ partenariat.description }}</p>
            <div class="text-sm text-accent-700 dark:text-accent-400 font-medium">
              {{ partenariat.nombre }} partenaires actifs
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Contact -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center ">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Direction de la Tutelle</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Pour toute information concernant les structures sous tutelle.
          </p>
          <div class="card p-8">
            <div class="space-y-6">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📞</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p class="text-gray-600 dark:text-gray-300">+229 52160000</p>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✉️</span>
                </div>
                <div class="text-left">
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-300">{{'mtfp.usager@gouv.bj'}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StructuresSousTutelleComponent implements AfterViewInit {
  
  structures:any[] = [];
  

teams:any[] = [];
  directeursTechniques:any[]=[]
  
    fichesMetiers = [];
  
    structure:any
    media:any
  
      constructor(private animationService: AnimationService,private publicService:PublicService) {}
    
      ngOnInit() {
        this.getAll()
      }
    
    
    
      getAll(){
        this.publicService.getStructureSousTutelles().subscribe((res:any)=>{
          this.structures=res.data?.sts
        
        })
      }
  
  
    openPdf() {
      const dialog = document.getElementById('dialog') as any;
      if (dialog) {
        dialog.showModal();
      }
    }
  
  
  
        getLink(dir:any,photo:any){
          return`${ConfigService.toFile("storage")}/${dir}/${photo}`
        }
  getStatusClass(statut: string): string {
    const classes = {
      'Opérationnel': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'En développement': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'En restructuration': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'Suspendu': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
    };
    return classes[statut as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }
    ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }
}