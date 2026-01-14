import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActualiteService } from '../../../../core/services/actualite.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../core/utils/local-stoarge-service';



interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

interface Actualite {
  id: number;
  title: string;
  category: string;
  auteur: string;
  dateCreation: string;
  statut: string;
}

@Component({
  selector: 'app-actualite',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent {
 activeMenu = 'actualites';
  searchQuery = '';
  itemsPerPage = 10;
  currentPage = 1;
  selectedItems: number[] = [];
    Math:any=Math
      loading=false


  actualites: any[] = [ ];
    pg:any={
    pageSize:9,
    page:1,
    total:0
  }
  selected_data:any


  constructor(
    private actualityService:ActualiteService,
    private lsService:LocalStorageService,
    private router:Router,
    private toastr:ToastrService
  ){

  }

  ngOnInit(){
    this.getAll()
  }


  getAll() {
    this.loading=true
      this.actualityService.getAll(this.pg.pageSize,this.pg.page,true).subscribe((res:any)=>{
          this.loading=false

          this.actualites=res.data.data
          this.pg.total=res.data.total
          this.selected_data=null

         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }




  get totalPages(): number {
    return Math.ceil(this.actualites.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.actualites.length);
  }

  get currentActualites(): Actualite[] {
    return this.actualites.slice(this.startIndex, this.endIndex);
  }

  handleSelectItem(id: number,el:any) {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    } else {
      this.selectedItems.push(id);
    }

    this.selected_data=el
  }

  handleSelectAll() {
    if (this.selectedItems.length === this.currentActualites.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.currentActualites.map(item => item.id);
    }
  }

      onShowDetails() {
    this.router.navigate(["/admin/actualites/details/"+this.selected_data?.id])
    // implémenter la transmission
  }

     onEdit() {
    console.log('Editer');

    this.router.navigate(["/admin/actualites/edition/"+this.selected_data?.id])
    // implémenter l'édition
  }

   onDelete() {
    console.log('Supprimer');
    // confirmation et appel API
  }


  onTransmit() {
      this.loading=true
      this.actualityService.up(this.selected_data.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  openModal() {
        this.loading=true
      this.actualityService.archive(this.selected_data.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }




  onPublish() {
          this.loading=true
      this.actualityService.publish(this.selected_data.media?.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }

  onUnpublish() {
          this.loading=true
      this.actualityService.unpublish(this.selected_data.media?.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }

  onArchive() {
         this.loading=true
      this.actualityService.archive(this.selected_data.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  getStatusColor(statut: any) {
    switch (statut) {
      case 1: return 'bg-green-100 text-green-800';
      case 0: return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
