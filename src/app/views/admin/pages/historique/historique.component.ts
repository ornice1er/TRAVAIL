import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaService } from '../../../../core/services/media.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../core/utils/local-stoarge-service';
import { NgxPaginationModule } from 'ngx-pagination';


interface HistoriqueItem {
  id: number;
  type: string;
  action: string;
  titre: string;
  utilisateur: string;
  dateAction: string;
  statut: string;
  details: string;
}
@Component({
  selector: 'app-historique',
  imports: [CommonModule,FormsModule,RouterModule,NgxPaginationModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
 activeMenu = 'historique';
tabs = [
  { key: 'all', label: 'Tous' },
  { key: 'doc', label: 'Documents' },
  { key: 'actualite', label: 'Actualités' },
  { key: 'communique', label: 'Communiqués' },
  { key: 'prestation', label: 'Prestations' },
  { key: 'aof', label: 'AOF' }
];

selectedTab: string = 'all';
filteredHistorique: any[] = [];

  loading=false

    pg:any={
    pageSize:9,
    page:1,
    total:0
  }
  selected_data:any
  total:any
  constructor(
    private mediaService:MediaService,
    private lsService:LocalStorageService,
    private router:Router,
    private toastr:ToastrService
  ){

  }

  ngOnInit(){
    this.getAll()
  }

  selectTab(type: string) {
  this.selectedTab = type;
  this.pg.page = 1;
  this.applyFilter();
}


applyFilter() {
  if (this.selectedTab === 'all') {
    this.filteredHistorique = this.historique;
   this.pg.total=this.total

  } else {
    this.getAll(this.selectedTab)
  }
}

getCountByType(type: string) {
  if (type == this.selectedTab) return this.total
}

getTypelabel(key: string){
  return this.tabs.find(item => item.key == key)?.label;
}

    getAll(category?:any) {
    this.loading=true
      this.mediaService.getAll(this.pg.pageSize,this.pg.page,true,category).subscribe((res:any)=>{
          this.loading=false

          this.historique=res.data.data
          this.pg.total=res.data.total
          this.total=res.data.total
          this.selected_data=null

          this.filteredHistorique=this.historique

         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }




   historique: any[] = [  ];


  getTypeIcon(type: string): string {
    switch (type) {
      case 'actualite': return 'ri-news-line';
      case 'communique': return 'ri-file-text-line';
      case 'poster': return 'ri-image-line';
      case 'membre': return 'ri-user-line';
      case 'document': return 'ri-file-line';
      default: return 'ri-file-line';
    }
  }

  getTypeColor(type: string): string {
    switch (type) {
      case 'actualite': return 'bg-blue-100 text-blue-800';
      case 'communique': return 'bg-green-100 text-green-800';
      case 'poster': return 'bg-purple-100 text-purple-800';
      case 'membre': return 'bg-orange-100 text-orange-800';
      case 'document': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getActionColor(action: string): string {
    switch (action) {
      case 'Création': return 'bg-green-100 text-green-800';
      case 'Modification': return 'bg-blue-100 text-blue-800';
      case 'Publication': return 'bg-purple-100 text-purple-800';
      case 'Suppression': return 'bg-red-100 text-red-800';
      case 'Archivage': return 'bg-gray-100 text-gray-800';
      case 'Ajout': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getStatutColor(statut: string): string {
    switch (statut) {
      case 'Publié': return 'bg-green-100 text-green-800';
      case 'Brouillon': return 'bg-yellow-100 text-yellow-800';
      case 'En révision': return 'bg-blue-100 text-blue-800';
      case 'Supprimé': return 'bg-red-100 text-red-800';
      case 'Archivé': return 'bg-gray-100 text-gray-800';
      case 'Actif': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }


     pageChanged(ev:any){

      this.pg.page=ev
      this.getAll()
    }
}
