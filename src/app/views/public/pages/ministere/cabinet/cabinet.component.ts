import { Component } from '@angular/core';
import { AnimationService } from '../../../../../shared/services/animation.service';
import { PublicService } from '../../../../../core/services/public.service';
import { ConfigService } from '../../../../../core/utils/config-service';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MetiersListComponent } from '../../../../../shared/components/metiers-list.component';

@Component({
  selector: 'app-cabinet',
  standalone:true,
  imports: [CommonModule, NgxExtendedPdfViewerModule, MetiersListComponent],
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.css'
})
export class CabinetComponent {
  activeTab = "biographie";
  showFullBio = false;
  newsletterEmail = "";
  isSubmittingNewsletter = false;
  newsletterSuccess = false;
ministre:any
  membresCabinet:any[]= [];
loading=false
  constructor(private animationService: AnimationService,private publicService:PublicService) {}
  ngOnInit(): void {
    this.getAll()
  }

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
        this.newsletterEmail = "";

        // Cacher le message après 5 secondes
        setTimeout(() => {
          this.newsletterSuccess = false;
        }, 5000);
      }, 1500);
    }
  }

    getAll(){
    this.publicService.getMinistre().subscribe((res:any)=>{
      this.membresCabinet=res.data?.structure?.teams
    })

  }


    getLink(dir:any,photo:any){
        return`${ConfigService.toFile("storage")}/${dir}/${photo}`
      }
  
onImageError(event: Event) {
  const img = event.target as HTMLImageElement;
  img.src = 'assets/avatar.png'; // avatar par défaut
}
trackById(index: number, item: any) {
  return item.id;
}


}
