import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../shared/services/animation.service';
import '@tailwindplus/elements';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-notre-vision',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-secondary-800 to-primary-800 dark:from-secondary-900 dark:to-secondary-950 text-white pt-32 pb-16">
      <div class="container-custom">
        <div class="text-center ">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">VISION / MISSIONS</h1>
        </div>
      </div>
    </div>

    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          <div class="lg:col-span-1 lg:sticky top-28">
            <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <svg class="mx-auto mb-4 w-24 h-24 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Document Officiel</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Consultez le document présentant notre vision et nos missions.</p>
                <div class="flex flex-col space-y-3">
                  <button (click)="openPdf()" class="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                      Lire le document
                  </button>
                  <a href="https://travail.gouv.bj/download-data/aofs/1660762537-2208175537-523.pdf/aof" download="Vision_et_Missions_MTFP.pdf" class="w-full bg-secondary-600 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 transition-colors">
                      Télécharger
                  </a>
                </div>
            </div>
          </div>

          <div class="lg:col-span-2">
            <div class="prose dark:prose-invert max-w-none">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Vision</h2>
              <p>
                Bâtir à l’horizon 2026, une administration moderne et performante pour un service public de qualité et un travail décent
              </p>

              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Mission</h2>
              <p>
               Le Ministère du Travail et de la Fonction Publique a pour mission, la définition, l'élaboration et le suivi-évaluation de la politique de l'État en matière de travail et de fonction publique ainsi que le suivi des réformes administratives et institutionnelles conformément aux lois et règlements en vigueur.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Attributions</h2>
              <p>Le MTFP est chargé de :</p>

              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">En matière de promotion du travail :</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>d'élaborer, de suivre et de contrôler la législation du travail et de la sécurité sociale  de définir et de suivre la mise en œuvre des politiques de promotion du travail décent dans tous les secteurs, en collaboration avec les autres ministères sectoriels;</li>
                <li>de définir et de suivre la mise en œuvre de la politique de sécurité sociale des travailleurs de l'économie formelle et informelle;</li>
                <li>de définir et de suivre la mise en œuvre de la politique de lutte contre le travail des enfants.</li>
              </ul>

              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">En matière de Fonction publique :</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>de définir, de suivre et d'évaluer, en collaboration avec les autres ministères sectoriels, les politiques et stratégies de gestion prévisionnelle des ressources humaines de l'État;</li>
                <li>d'élaborer, de suivre et d'adapter, selon les besoins, les textes régissant la fonction publique d'État et la fonction publique territoriale, aux exigences du progrès et de la modernisation;</li>
                <li>de concevoir et de suivre la mise en œuvre d'un système intégré de gestion des ressources humaines de l'État ;</li>
                <li>de définir et de suivre la mise en œuvre de la politique de formation continue et d'évaluation des performances des agents de l'État ;</li>
                <li>de gérer les éléments servant de base à la rémunération des agents de l'État, incluant un système d'information statistique performant en relation avec le ministère en charge des Finances.</li>
              </ul>

              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">En matière de suivi des réformes administratives et institutionnelles :</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>d'assurer le suivi des réformes administratives et institutionnelles adoptées par le Gouvernement ;</li>
                <li>d'impulser et de coordonner les réformes concourant à une administration publique de développement ;</li>
                <li>d'appuyer les ministères sectoriels dans la conception des politiques et stratégies de réformes globales et sectorielles et de suivre leur application effective ;</li>
                <li>de fournir les informations utiles au ministère en charge du Numérique en matière de dématérialisation des services publics ;</li>
                <li>d'identifier et de proposer les mesures et actions de renforcement des capacités des agents de l'État en matière de conduite efficace des réformes administratives et institutionnelles ;</li>
                <li>de promouvoir les valeurs morales et éthiques fondées sur la primauté de l'intérêt général, la culture du travail bien fait, le sens du bien commun, de la responsabilité et du patriotisme.</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>

    <el-dialog>
      <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 z-50 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
        <el-dialog-backdrop class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"></el-dialog-backdrop>

        <div tabindex="0" class="flex min-h-full items-end justify-center text-center focus:outline-none sm:items-center p-0 relative">
          <el-dialog-panel class="transform overflow-hidden absolute inset-0 bg-white px-4 pt-5 pb-4 text-left  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-7xl sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10">
            <div class="flex justify-end items-center w-full mb-4">
              <button type="button" command="close" commandfor="dialog" class="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:shadow-none dark:hover:bg-red-400 dark:focus-visible:outline-red-500">Fermer</button>
            </div>
            <div class="h-[calc(100vh-10rem)]">
             <ngx-extended-pdf-viewer [src]="'assets/download-data/aofs/aof-sgm.pdf'" [useBrowserLocale]="true" [textLayer]="true" [showHandToolButton]="true"></ngx-extended-pdf-viewer>
            </div>

          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  `
})
export class NotreVisionComponent implements AfterViewInit {
  
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initScrollAnimations();
    }, 100);
  }

  openPdf() {
    const dialog = document.getElementById('dialog') as any;
    if (dialog) {
      dialog.showModal();
    }
  }
}