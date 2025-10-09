import { Component, AfterViewInit, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AnimationService } from "../../../../../shared/services/animation.service";
import { PublicService } from "../../../../../core/services/public.service";
import { ConfigService } from "../../../../../core/utils/config-service";

@Component({
  selector: "app-le-ministre",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./le-ministre.component.html",
  styleUrls: ["./le-ministre.component.css"],
})
export class LeMinistereComponent implements OnInit, AfterViewInit {
  activeTab = "biographie";
  showFullBio = false;
  newsletterEmail = "";
  isSubmittingNewsletter = false;
  newsletterSuccess = false;
ministre:any
  membresCabinet:any[]= [];

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
      this.ministre =res.data.structure
      this.membresCabinet=res.data?.structure?.teams
    })

  }


    getLink(dir:any,photo:any){
        return`${ConfigService.toFile("storage")}/${dir}/${photo}`
      }
  

}
