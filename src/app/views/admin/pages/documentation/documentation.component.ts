import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentationService } from '../../../../core/services/documentation.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../core/utils/local-stoarge-service';
import { Actualite } from '../../../../shared/models/actualite.model';
import { ConfigService } from '../../../../core/utils/config-service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'primeng/api';
import { SampleSearchPipe } from '../../../../core/pipes/sample-search.pipe';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-documentation',
  imports: [CommonModule,RouterModule,FormsModule,SharedModule,NgxPaginationModule,LoadingComponent,SampleSearchPipe],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
 activeMenu = 'documents';
  searchQuery = '';
  itemsPerPage = 10;
  currentPage = 1;
  selectedItems: number[] = [];
    Math:any=Math
      loading=false


  documents: any[] = [ ];
    pg:any={
    pageSize:9,
    page:1,
    total:0
  }
  selected_data:any


  constructor(
    private docService:DocumentationService,
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
      this.docService.getAll(this.pg.pageSize,this.pg.page,true).subscribe((res:any)=>{
          this.loading=false

          this.documents=res.data.data
          this.pg.total=res.data.total
          this.selected_data=null

         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }




  get totalPages(): number {
    return Math.ceil(this.documents.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.documents.length);
  }

  get currentActualites(): Actualite[] {
    return this.documents.slice(this.startIndex, this.endIndex);
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
    this.router.navigate(["/admin/documentation/details/"+this.selected_data?.id])
    // implémenter la transmission
  }

     onEdit() {
    console.log('Editer');

    this.router.navigate(["/admin/documentation/edition/"+this.selected_data?.id])
    // implémenter l'édition
  }

   onDelete() {
    console.log('Supprimer');
    // confirmation et appel API
  }


  onTransmit() {
      this.loading=true
      this.docService.up(this.selected_data.id).subscribe((res:any)=>{
          this.loading=false

          this.getAll()


         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  openModal() {
    console.log('Ouvrir modal');
    // afficher le modal Angular (PrimeNG ou Tailwind)
  }




  onPublish() {
          this.loading=true
      this.docService.publish(this.selected_data.media?.id).subscribe((res:any)=>{
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
      this.docService.unpublish(this.selected_data.media?.id).subscribe((res:any)=>{
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
      this.docService.archive(this.selected_data.id).subscribe((res:any)=>{
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


     getLink(dir:any,photo:any){
          return`${ConfigService.toFile("storage")}/${dir}/${photo}`
        }
  
        getPage(event:any){
          this.pg.page=event
  
          this.getAll()
        }
      loadMore(ev:any){
        this.pg.pageSize=ev.target?.value
      }
}
