import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommuniqueService } from '../../../../core/services/communique.service';
import { LocalStorageService } from '../../../../core/utils/app-action-check';
import { NgxPaginationModule } from 'ngx-pagination';

interface Communique {
  id: number;
  title: string;
  accessPrincipal: string;
  motif: string;
}

@Component({
  selector: 'app-communique',
  imports: [CommonModule,FormsModule,RouterModule,NgxPaginationModule],
  templateUrl: './communique.component.html',
  styleUrl: './communique.component.css'
})
export class CommuniqueComponent {
 activeMenu = 'communiques';
  searchQuery = '';
  itemsPerPage = 10;
  currentPage = 1;
  selectedItems: number[] = [];
  Math=Math
  loading=false
  communiques: any[] = [];
    pg:any={
    pageSize:9,
    page:1,
    total:0
  }
  selected_data:any


  constructor(
    private communiqueService:CommuniqueService,
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
      this.communiqueService.getAll(this.pg.pageSize,this.pg.page).subscribe((res:any)=>{
          this.loading=false

          this.communiques=res.data.data
          this.pg.total=res.data.total
          this.selected_data=null

         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  get totalPages(): number {
    return Math.ceil(this.communiques.length / this.itemsPerPage);
  }

  get currentCommuniques(): Communique[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.communiques.length);
    return this.communiques.slice(startIndex, endIndex);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.communiques.length);
  }

  handleSelectItem(id: number,el:any) {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter(item => item !== id);
    } else {
      this.selectedItems = [...this.selectedItems, id];
    }

    this.selected_data=el
  }

  handleSelectAll() {
    if (this.selectedItems.length === this.currentCommuniques.length) {
      this.selectedItems = [];
    } else {
      this.selectedItems = this.currentCommuniques.map(item => item.id);
    }
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
    this.pg.page=this.currentPage
    this.getAll()
  }

  setActive(id: string) {
    this.activeMenu = id;
  }

     pageChanged(ev:any){

      this.pg.page=ev
      this.getAll()
    }


    onEdit() {
    console.log('Editer');

    this.router.navigate(["/admin/communiques/edition/"+this.selected_data?.id])
    // implémenter l'édition
  }

  onDelete() {
    console.log('Supprimer');
    // confirmation et appel API
  }

  onTransmit() {
      this.loading=true
      this.communiqueService.up(this.selected_data.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


    onShowDetails() {
    this.router.navigate(["/admin/communiques/details/"+this.selected_data?.id])
    // implémenter la transmission
  }


  openModal() {
    console.log('Ouvrir modal');
    // afficher le modal Angular (PrimeNG ou Tailwind)
  }

  onPublish() {
          this.loading=true
      this.communiqueService.publish(this.selected_data.id).subscribe((res:any)=>{
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
      this.communiqueService.unpublish(this.selected_data.id).subscribe((res:any)=>{
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
      this.communiqueService.archive(this.selected_data.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }

}
