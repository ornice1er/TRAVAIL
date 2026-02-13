import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PublicService } from '../../../../core/services/public.service';
import { ConfigService } from '../../../../core/utils/config-service';
import { Actualite } from '../../../../shared/models/actualite.model';
import { AnimationService } from '../../../../shared/services/animation.service';

@Component({
  selector: 'app-concours',
  imports: [CommonModule, RouterModule, FormsModule,NgxPaginationModule],
  templateUrl: './concours.component.html',
  styleUrl: './concours.component.css'
})
export class ConcoursComponent {
categorieActive:any  = 0;
    structureActive:any = 0;
  
    categories:any[] = [];
  
    structures: any[] = [];
  
    actualiteUne: any ;
  
    concours: any[] = [  ];
  
    concoursFiltrees:any = [];
  
    pg:any={
      pageSize:9,
      page:1,
      total:0
    }
  
    constructor(private animationService: AnimationService,private publicService:PublicService, private route:ActivatedRoute) {}
  
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const nature = params['nature'];
      if(nature){
        this.categorieActive=nature
      }else{
        this.categorieActive="Toutes"
      }
      });
      this.getAll()

    }
  
  
  
    getAll(){
      this.publicService.getConcours(this.pg.pageSize,this.pg.page).subscribe((res:any)=>{
    
       this.concours=res.data.concours.data
       this.concoursFiltrees=this.concours
       this.pg.total=res.data.concours.total
       this.appliquerFiltres()
      })
    }
  
    ngAfterViewInit() {
      setTimeout(() => {
        this.animationService.initScrollAnimations();
      }, 100);
    }
  
    filtrerParCategorie(categorie: any) {
      
      this.categorieActive = categorie;
      this.appliquerFiltres();
    }
  
    filtrerParStructure(ev: any) {
      this.structureActive = parseInt(ev.target.value);
      this.appliquerFiltres();
    }
  
    appliquerFiltres() {
      let concours = [...this.concours];
  
      // Filtrage par catégorie
      if (this.categorieActive !== 'Toutes') {
        concours = concours.filter(
          (a) => {
           let categorySet=this.categorieActive =="Communiqués concours"?'Concours':'Activité' ;
            return a.category ===     categorySet 
          });
      }
  
      // Filtrage par structure
      if (this.structureActive !== 0 && this.structureActive !== 1) {
        concours = concours.filter((a) => a.media?.structure_id === this.structureActive);
      }
  
      this.concoursFiltrees = concours;
    }
  
    trackByActualiteId(index: number, actualite: Actualite): number {
      return actualite.id;
    }
  
      getLink(dir:any,photo:any){
        return`${ConfigService.toFile("storage")}/${dir}/${photo}`
      }
  
  
      pageChanged(ev:any){
  
        this.pg.page=ev
        this.getAll()
      }

}
