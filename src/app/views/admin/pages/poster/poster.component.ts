import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { SampleSearchPipe } from '../../../../core/pipes/sample-search.pipe';
import { AuthService } from '../../../../core/services/auth.service';
import { StructureService } from '../../../../core/services/structure.service';
import { AppSweetAlert } from '../../../../core/utils/app-sweet-alert';
import { ConfigService } from '../../../../core/utils/config-service';
import { LocalStorageService } from '../../../../core/utils/local-stoarge-service';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { PosterService } from '../../../../core/services/poster.service';
import { SharedModule } from '../../../../core/utils/shared.module';
@Component({
  selector: 'app-poster',
  imports: [CommonModule,RouterModule,FormsModule,SharedModule,NgxPaginationModule,LoadingComponent,SampleSearchPipe],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.css'
})
export class PosterComponent {
activeMenu = 'membres-structure';
searchQuery = '';
selectedItems: number[] = [];
loading=false
showAddDialog = false;
showEditDialog = false;
showViewDialog = false;
posterForm: any = {
  title: '',
  type: 'image',
  photo: null,
  url: null
};

structures: any[] = []; // chargé depuis API

  posters: any[] = [ ];
    pg:any={
    pageSize:10,
    page:1,
    total:0
  }
  selected_data:any


constructor(
    private authService:AuthService,
    private structureService:StructureService,
    private posterService:PosterService,
    private toastrService:ToastrService,
      private lsService:LocalStorageService,
    private modalService: NgbModal) {
     }

  ngOnInit(){
    this.getAll()
    this.getStructures()
  }

  onFileSelect(event: any) {
  this.posterForm.photo = event.target.files[0];
}


  getStructures(){

    this.structureService.getAll(this.pg.pageSize,this.pg.page,false).subscribe((res:any)=>{
      this.structures=res.data
    },
    (err:any)=>{
      this.loading=false

    })
  }

  getAll(){
    this.loading=true

    this.posterService.getAll(this.pg.pageSize,this.pg.page,true).subscribe((res:any)=>{
      this.posters=res.data.data 
      this.pg.total=res.data.total
      this.modalService.dismissAll()
      this.loading=false

    },
    (err:any)=>{
      this.loading=false

    })
  }


  store(){
      const formData = new FormData();

  Object.keys(this.posterForm).forEach(key => {
    if (this.posterForm[key] !== null) {
      formData.append(key, this.posterForm[key]);
    }
  });

    this.loading=true
    this.posterService.store(formData).subscribe((res:any)=>{
      this.loading=false
      this.closeDialogs()
        this.toastrService.success(res.message)
        this.getAll()

    },
    (err:any)=>{
      this.loading=false

      console.log(err)
        AppSweetAlert.simpleAlert("error","Membre structure",err.error.message)
    })
  }
  update(){
        const formData = new FormData();

  Object.keys(this.posterForm).forEach(key => {
    if (this.posterForm[key] !== null) {
      formData.append(key, this.posterForm[key]);
    }
  });
    this.loading=true

    this.posterService.update(this.selected_data.id,formData).subscribe((res:any)=>{
      this.loading=false
      this.closeDialogs()

        this.toastrService.success(res.message)
        this.getAll()
    },
    (err:any)=>{
      this.loading=false

      console.log(err)
        AppSweetAlert.simpleAlert("error","Membre structure",err.error.message)
    })
  }
  delete(){
    if(!this.verifyIfElementChecked()) return ;
    let confirmed=AppSweetAlert.confirmBox('info','Suppression','Voulez vous vraiment retirer cet élément?',);
    confirmed.then((result:any)=>{
       if (result.isConfirmed) {
    this.posterService.delete(this.selected_data.id).subscribe((res:any)=>{
        this.toastrService.success(res.message)
        this.getAll()
    },
    (err:any)=>{
      console.log(err)
        AppSweetAlert.simpleAlert("error","Membre structure",err.error.message)
    })
  }
})
  }
  checked(el?:any){
   this.selected_data=el
     this.posterForm = {
        title: el.title,
        type: el.type,
        url: el.url,
        photo: null
      };
  }
  verifyIfElementChecked(){
    console.log(this.selected_data)
    if (this.selected_data==null) {
      this.toastrService.warning("Aucun élément selectionné");
      return false;
    }
    return true;
  }



  
  dismiss(){
    this.modalService.dismissAll()
  }

  add(){
  this.showAddDialog = true;
  }


  show(){
    if(!this.verifyIfElementChecked()) return ;
      this.showViewDialog = true;
  }

  edit(){
    if(!this.verifyIfElementChecked()) return ;
  this.showEditDialog = true;

  }

  setStatus(value:any){

    this.toastrService.warning("Opération en cours")
  
        this.posterService.setStatus(this.selected_data.id,value).subscribe((res:any)=>{
          this.toastrService.success(res.message)
          this.getAll()
      },
      (err:any)=>{
        console.log(err)
          AppSweetAlert.simpleAlert("error","Sous composant",err.error.message)
      })
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
  closeDialogs() {
  this.showAddDialog = false;
  this.showEditDialog = false;
  this.showViewDialog = false;
}

 getStatusColor(statut: any) {
    switch (statut) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

}
