import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualiteService } from '../../../../../core/services/actualite.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../../core/utils/local-stoarge-service';
import { ConfigService } from '../../../../../core/utils/config-service';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

interface Media {
  nom: string;
  fichier: string;
  action: string;
}



@Component({
  selector: 'app-actualite-details',
  imports: [CommonModule],
  templateUrl: './actualite-details.component.html',
  styleUrl: './actualite-details.component.css'
})
export class ActualiteDetailsComponent {
 activeMenu: string = 'actualites';
  searchQuery: string = '';

  medias: Media[] = [];
actualiteId:any
actualite:any
loading:any

     constructor(
        private actualityService:ActualiteService,
        private route:ActivatedRoute,
        private lsService:LocalStorageService,
        private router:Router,
        private toastr:ToastrService
      ){}

      ngOnInit(){
        this.actualiteId = this.route.snapshot.paramMap.get('id')
        this.get()
      }

       get() {
    this.loading=true
      this.actualityService.get(this.actualiteId).subscribe((res:any)=>{
          this.loading=false    
          this.actualite=res.data
                    this.toastr.success('Connexion réussie', 'Connexion');
         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  setActiveMenu(id: string) {
    this.activeMenu = id;
  }

     getLink(dir:any,photo:any){
              return`${ConfigService.toFile("storage")}/${dir}/${photo}`
            }

}
