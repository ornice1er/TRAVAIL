import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MembreStructureService } from '../../../../core/services/membre-structure.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../../core/utils/local-stoarge-service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../core/services/auth.service';
import { AppSweetAlert } from '../../../../core/utils/app-sweet-alert';
import { SharedModule } from '../../../../core/utils/shared.module';
import { ConfigService } from '../../../../core/utils/config-service';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { SampleSearchPipe } from '../../../../core/pipes/sample-search.pipe';
import { StructureService } from '../../../../core/services/structure.service';



@Component({
  selector: 'app-membre-structure',
  imports: [CommonModule,RouterModule,FormsModule,SharedModule,NgxPaginationModule,LoadingComponent,SampleSearchPipe],
  templateUrl: './membre-structure.component.html',
  styleUrl: './membre-structure.component.css'
})
export class MembreStructureComponent {
activeMenu = 'membres-structure';
searchQuery = '';
selectedItems: number[] = [];
loading=false
showAddDialog = false;
showEditDialog = false;
showViewDialog = false;
memberForm: any = {
  structure_id: null,
  type: null,
  name: '',
  office: '',
  photo: null
};

structures: any[] = []; // chargé depuis API

  teams: any[] = [ ];
    pg:any={
    pageSize:10,
    page:1,
    total:0
  }
  selected_data:any


constructor(
    private authService:AuthService,
    private structureService:StructureService,
    private teamService:MembreStructureService,
    private toastrService:ToastrService,
      private lsService:LocalStorageService,
    private modalService: NgbModal) {
     }

  ngOnInit(){
    this.getAll()
    this.getStructures()
  }

  onFileSelect(event: any) {
  this.memberForm.photo = event.target.files[0];
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

    this.teamService.getAll(this.pg.pageSize,this.pg.page,true).subscribe((res:any)=>{
      this.teams=res.data.data 
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

  Object.keys(this.memberForm).forEach(key => {
    if (this.memberForm[key] !== null) {
      formData.append(key, this.memberForm[key]);
    }
  });

    this.loading=true
    this.teamService.store(formData).subscribe((res:any)=>{
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

  Object.keys(this.memberForm).forEach(key => {
    if (this.memberForm[key] !== null) {
      formData.append(key, this.memberForm[key]);
    }
  });
    this.loading=true

    this.teamService.update(this.selected_data.id,formData).subscribe((res:any)=>{
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
    this.teamService.delete(this.selected_data.id).subscribe((res:any)=>{
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
     this.memberForm = {
        structure_id: el.structure_id,
        type: el.type,
        name: el.name,
        office: el.office,
        photo: null, // on ne pré-remplit JAMAIS un input file
        structure: el.structure?.name // utile pour affichage
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
  
        this.teamService.setStatus(this.selected_data.id,value).subscribe((res:any)=>{
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
}
