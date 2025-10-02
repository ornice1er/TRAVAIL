import { Component, AfterViewInit, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AnimationService } from "../../../shared/services/animation.service";

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

  membresCabinet = [
    {
      nom: "HONVOH V. Victorin",
      fonction: "Directeur de Cabinet",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1677697132honvoh-v-victorin.JPG",
      // email: 'directeur.cabinet@travail.gouv.bj'
    },
    {
      nom: "YEHOUENOU Comlan Jules",
      fonction: "Directeur Adjoint de Cabinet",
      photo:
        "http://travail.gouv.bj/storage/teams/1716796894yehouenou-comlan-jules.jpg",
      // email: 'directeur.adjoint@travail.gouv.bj'
    },
    {
      nom: "AGBODJOGBE Armel",
      fonction: "Assistant du Ministre",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1679928075agbodjogbe-armel.jpg",
      // email: 'assistant.ministre@travail.gouv.bj'
    },
    {
      nom: "AHOUANDJINOU ZINSOU Christine",
      fonction: "Conseillère Technique à la Fonction Publique",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1677697265ahouandjinou-zinsou-christine.JPG",
      // email: 'ct.fonctionpublique@travail.gouv.bj'
    },
    {
      nom: "AMINOU N. Gilbert",
      fonction: "Conseiller Technique Juridique",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1677697307gilbert-n-aminou.JPG",
      // email: 'ct.juridique@travail.gouv.bj'
    },
    {
      nom: "DENAKPO Vincent N.",
      fonction: "Conseiller Technique à la Modernisation des Services",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1677697399denakpo-vincent-n.JPG",
      // email: 'ct.modernisation@travail.gouv.bj'
    },

    {
      nom: "ZANOU Pierre A.",
      fonction: "Conseiller Technique au Travail et au Dialogue Social",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1678289844zanou-pierre-a.png",
      // email: 'ct.dialogue@travail.gouv.bj'
    },
    {
      nom: "RAIMI Faousiath M. Ayikè",
      fonction:
        "Conseillère Technique à la Valorisation des Ressources Humaines de l'État",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1679071323raimi-faousiath-m-ayike.jpg",
      // email: 'ct.rh@travail.gouv.bj'
    },
    {
      nom: "ALASSANE Aboubacar",
      fonction: "Conseiller Technique à la Prévoyance Sociale",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1708594755alassane-aboubacar.jpg",
      // email: 'ct.prevoyance@travail.gouv.bj'
    },
    {
      nom: "YAHA Z. Pascal",
      fonction: "Expert en réflexion stratégique près du Ministre",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1678270873yaha-z-pascal.JPG",
      // email: 'expert.strategique@travail.gouv.bj'
    },
    // {
    //   nom: "Léontine ATTOLOU",
    //   fonction: "Experte en Fonction Publique / Chargée d'études",
    //   photo:
    //     "https://www.travail.gouv.bj/storage/teams/1679496007leontine-attolou.jpg",
    //   // email: 'expert.fp@travail.gouv.bj'
    // },
    {
      nom: "AHOKOU Ambroise",
      fonction: "Point Focal Communication",
      photo:
        "https://www.travail.gouv.bj/storage/teams/1679496290ambroise-ahokou.jpg",
      // email: 'communication@travail.gouv.bj'
    },
  ];

  constructor(private animationService: AnimationService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
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
}
