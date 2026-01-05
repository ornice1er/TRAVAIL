import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PublicService } from '../../../../core/services/public.service';
import { ConfigService } from '../../../../core/utils/config-service';

@Component({
  selector: "app-communique-detail",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<div class="pt-32 pb-16 bg-white dark:bg-gray-900" *ngIf="communique">
  <div class="container-custom">

    <!-- Breadcrumb -->
    <nav class="mb-8">
      <a
        routerLink="/communiques"
        class="text-primary-800 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 inline-flex items-center"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Retour aux communiqués
      </a>
    </nav>

    <!-- ARTICLE CENTRÉ -->
    <article class="max-w-4xl mx-auto">

      <!-- En-tête -->
      <header class="mb-8">
        <div class="flex items-center mb-4">
          <span class="bg-primary-800 dark:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium mr-4">
            {{ communique.category }}
          </span>
          <span class="text-gray-500 dark:text-gray-400">
            {{ communique.created_at | date : "d MMMM yyyy" : "fr" }}
          </span>
        </div>

        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {{ communique.title }}
        </h1>
      </header>

      <!-- Contenu -->
      <div class="prose prose-lg dark:prose-invert max-w-none rich-content" [innerHTML]="communique.description"></div>

      <!-- Tags -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Mots-clés :</h4>
        <div class="flex flex-wrap gap-2">
          <span *ngFor="let tag of communique.tags"
            class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
            #{{ tag }}
          </span>
        </div>
      </div>

    </article>
  </div>

  <!-- MÉDIAS EN PLEINE LARGEUR -->
  <section class="max-w-4xl mx-auto mt-12">
    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
      📎 Médias associés
    </h4>

    <div class="space-y-4">
      <div *ngFor="let media of medias"
        class="group flex items-center w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-4 hover:shadow-md transition-all duration-300">

        <!-- Icône -->
        <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/40 mr-4">
          <ng-container [ngSwitch]="media.type">
            <svg *ngSwitchCase="'pdf'" class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11V3l8 8h-6a2 2 0 01-2-2zM12 15v6m0 0l3-3m-3 3l-3-3"/>
            </svg>
            <svg *ngSwitchDefault class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/>
            </svg>
          </ng-container>
        </div>

        <!-- Contenu -->
        <div class="flex-1 min-w-0">
          <h5 class="font-medium text-gray-900 dark:text-white mb-1 truncate" [title]="media.nom">
            {{ media.nom }}
          </h5>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            {{ media.created_at | date : "d MMMM yyyy" : "fr" }}
          </p>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-4 ml-4">
          <a [href]="getLink('communiques', media.filename)" target="_blank"
            class="text-primary-700 dark:text-primary-400 hover:underline text-sm font-medium">Voir</a>
          <a [href]="getLink('communiques', media.filename)" download
            class="text-gray-600 dark:text-gray-300 hover:text-primary-700 text-sm">Télécharger</a>
        </div>
      </div>

      
    </div>
    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white mb-4"
            >
              Partager cet article :
            </h4>
            <div class="flex space-x-4">
              <button
                class="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
                <span>Twitter</span>
              </button>
              <button
                class="flex items-center space-x-2 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  />
                </svg>
                <span>Facebook</span>
              </button>
              <button
                class="flex items-center space-x-2 text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.9v6.2h.02z"
                  />
                </svg>
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
  </section>
</div>

  `,
  styles: [
    `
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `,
  ],
})
export class CommuniqueDetailComponent {
 communique: any= null;
  actualiteId!: any;
articlesSimilaires: any[]=[];
  articles: any[] = [];
  medias: any[] = [];

    networks: any[] = [];

  constructor(private route: ActivatedRoute,private publicService:PublicService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.actualiteId = params["id"];
      this.getCommunique()

     // this.articlesSimilaires = this.articles.filter(a=> a.id !== this.actualiteId).slice(0,3);
    });
    }


    getCommunique(){
    this.publicService.getCommunique(this.actualiteId).subscribe((res:any)=>{
      this.communique=res.data.communique
      this.medias=this.communique?.files
      let links=res.data.shareLinks

      this.networks = [
          {
            name: 'Twitter',
            url: links.twitter,
            colorClass: 'text-blue-500 hover:text-blue-700',
            svg: `
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775
                         1.017-.609 1.798-1.574 2.165-2.724
                         -.951.564-2.005.974-3.127 1.195
                         -.897-.957-2.178-1.555-3.594-1.555
                         -3.179 0-5.515 2.966-4.797 6.045
                         -4.091-.205-7.719-2.165-10.148-5.144
                         -1.29 2.213-.669 5.108 1.523 6.574
                         -.806-.026-1.566-.247-2.229-.616
                         -.054 2.281 1.581 4.415 3.949 4.89
                         -.693.188-1.452.232-2.224.084
                         .626 1.956 2.444 3.379 4.6 3.419
                         -2.07 1.623-4.678 2.348-7.29 2.04
                         2.179 1.397 4.768 2.212 7.548 2.212
                         9.142 0 14.307-7.721 13.995-14.646
                         .962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            `
          },
          {
            name: 'Facebook',
            url: links.facebook,
            colorClass: 'text-blue-600 hover:text-blue-800',
            svg: `
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69
                         .88-.53 1.56-1.37 1.88-2.38
                         -.83.5-1.75.85-2.72 1.05
                         C18.37 4.5 17.26 4 16 4
                         c-2.35 0-4.27 1.92-4.27 4.29
                         0 .34.04.67.11.98
                         C8.28 9.09 5.11 7.38 3 4.79
                         c-.37.63-.58 1.37-.58 2.15
                         0 1.49.75 2.81 1.91 3.56
                         -.71 0-1.37-.2-1.95-.5v.03
                         c0 2.08 1.48 3.82 3.44 4.21
                         a4.22 4.22 0 0 1-1.93.07
                         4.28 4.28 0 0 0 4 2.98
                         8.521 8.521 0 0 1-5.33 1.84
                         c-.34 0-.68-.02-1.02-.06
                         C3.44 20.29 5.7 21 8.12 21
                         16 21 20.33 14.46 20.33 8.79
                         c0-.19 0-.37-.01-.56
                         .84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            `
          },
          {
            name: 'LinkedIn',
            url: links.linkedin,
            colorClass: 'text-blue-800 hover:text-blue-900',
            svg: `
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56
                         C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72
                         C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1z
                         M5.47 7.76h-.03c-1.22 0-2-.83-2-1.87
                         0-1.06.8-1.87 2.05-1.87
                         1.24 0 2 .8 2.02 1.87
                         0 1.04-.78 1.87-2.05 1.87z
                         M20.34 20.1h-3.63v-5.8
                         c0-1.45-.52-2.45-1.83-2.45
                         -1 0-1.6.67-1.87 1.32
                         -.1.23-.11.55-.11.88v6.05H9.28
                         s.05-9.82 0-10.84h3.63v1.54
                         a3.6 3.6 0 0 1 3.26-1.8
                         c2.37 0 4.15 1.55 4.15 4.9v6.2z"/>
              </svg>
            `
          },
          {
            name: 'WhatsApp',
            url: links.whatsapp,
            colorClass: 'text-green-500 hover:text-green-700',
            svg: `
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.936 11.936 0 0 1-1.62-6.043
                         C.122 5.392 5.496 0 12.057 0
                         c3.2 0 6.2 1.24 8.457 3.497
                         2.256 2.256 3.494 5.256 3.494 8.457
                         0 6.562-5.392 11.936-11.957 11.936
                         a11.95 11.95 0 0 1-6.08-1.616L.057 24z
                         M17.472 14.382c-.297-.149-1.758-.867-2.03-.967
                         -.273-.099-.472-.149-.672.15
                         -.198.297-.767.967-.94 1.164
                         -.173.198-.347.223-.644.074
                         -.297-.149-1.255-.462-2.39-1.475
                         -.883-.788-1.48-1.761-1.654-2.059
                         -.173-.297-.018-.458.13-.606
                         .134-.133.297-.347.446-.52
                         .149-.173.198-.297.298-.495
                         .099-.198.05-.372-.025-.52
                         -.074-.149-.672-1.611-.92-2.207
                         -.242-.579-.487-.5-.672-.51
                         -.173-.007-.372-.009-.57-.009
                         -.198 0-.52.074-.792.372
                         -.272.297-1.04 1.016-1.04 2.479
                         0 1.462 1.065 2.875 1.213 3.074
                         .149.198 2.095 3.2 5.077 4.487
                         .709.306 1.262.489 1.694.626
                         .712.227 1.36.195 1.872.118
                         .571-.085 1.758-.719 2.006-1.413
                         .248-.695.248-1.29.173-1.414
                         -.074-.124-.272-.198-.57-.347z"/>
              </svg>
            `
          },
          {
            name: 'Telegram',
            url: links.telegram,
            colorClass: 'text-blue-400 hover:text-blue-600',
            svg: `
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12
                         12-5.373 12-12S18.627 0 12 0zm5.743 8.816
                         l-1.937 9.157c-.145.655-.522.818-1.056.51
                         l-2.92-2.153-1.407 1.354c-.155.155-.285.285-.585.285
                         l.21-2.982 5.424-4.898c.236-.21-.05-.327-.367-.117
                         l-6.705 4.22-2.888-.903c-.627-.197-.64-.627.131-.927
                         l11.27-4.355c.52-.173.974.124.81.908z"/>
              </svg>
            `
          },
        ];
      
    })
  }

    getLink(dir:any,photo:any){
      return`${ConfigService.toFile("storage")}/${dir}/${photo}`
    }



    getFileIcon(type: string): string {
  switch (type) {
    case 'pdf': return 'text-red-600';
    case 'doc': return 'text-blue-600';
    case 'xls': return 'text-green-600';
    default: return 'text-gray-500';
  }
}
}
