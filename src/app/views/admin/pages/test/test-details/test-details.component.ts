import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../core/utils/shared.module';
import { CommuniqueFileService } from '../../../../../core/services/communique-file.service';
import { CommuniqueService } from '../../../../../core/services/communique.service';
import { AppErrorShow } from '../../../../../core/utils/app-error-show';
import { AppSweetAlert } from '../../../../../core/utils/app-sweet-alert';
import { ConfigService } from '../../../../../core/utils/config-service';
import { LocalStorageService } from '../../../../../core/utils/local-stoarge-service';

@Component({
  selector: 'app-test-details',
  imports: [CommonModule,ReactiveFormsModule,SharedModule],
  templateUrl: './test-details.component.html',
  styleUrl: './test-details.component.css'
})
export class TestDetailsComponent {
activeMenu: string = 'concours';
  searchQuery: string = '';
  loading=true
  medias: any[] = []; // Aucune donnée disponible pour le moment
  communique:any
 form: FormGroup;
  file?: File;
displayModal = false;
  fileTypes = [
    { label: 'PDF', value: 'pdf' },
    { label: 'Image', value: 'image' },
    { label: 'Vidéo', value: 'video' },
  ];

  communiqueId:any=""
  
  
     constructor(
      private fb: FormBuilder,
        private communiqueService:CommuniqueService,
        private communiqueFileService:CommuniqueFileService,
        private route:ActivatedRoute,
        private lsService:LocalStorageService,
        private router:Router,
        private toastr:ToastrService
      ){
     this.form = this.fb.group({
      nom: ['', Validators.required],
      reference: ['', Validators.required],
      type: ['', Validators.required],
      file: [null, Validators.required],
    });
      }


     
    
      ngOnInit(){
        this.communiqueId = this.route.snapshot.paramMap.get('id')
        this.get()
      }
    
       onFileSelect(event: any) {
        const file = event.files?.[0];
        if (file) {
          this.file = file;
          this.form.patchValue({ file });
        }
      }

      submit() {
        if (this.form.invalid || !this.file) return;

        const formData = new FormData();
        formData.append('nom', this.form.value.nom);
        formData.append('reference', this.form.value.reference);
        formData.append('type', this.form.value.type);
        formData.append('file', this.file);
        formData.append('communiques_id', this.communiqueId.toString());

         this.loading=true
          this.communiqueFileService.store(formData).subscribe((res:any)=>{
              this.loading=false
              this.communique=res.data    
              this.displayModal=false
              this.get()
             },
             (err:any)=>{
              this.loading=false
              this.toastr.error(err.error?.message, 'Communiqué');
        
            })
      }

      openAddMediaModal(){
          this.displayModal = true;

      }
    
      get() {
        this.loading=true
          this.communiqueService.get(this.communiqueId).subscribe((res:any)=>{
              this.loading=false
              this.communique=res.data    
              this.medias=res.data.files
             },
             (err:any)=>{
              this.loading=false
              this.toastr.error(err.error?.message, 'Communiqué');
        
            })
      }



        delete(id:any){
    let confirmed=AppSweetAlert.confirmBox('info','Suppression','Voulez vous vraiment retirer cet élément?',);
    confirmed.then((result:any)=>{
       if (result.isConfirmed) {
        this.communiqueFileService.delete(id).subscribe((res:any)=>{
          this.toastr.success(res.message)
          this.get()
      },
      (err:any)=>{
        AppErrorShow.showError("Gestion des règles de conservations",err)

      })
              }
            })

}


         getLink(dir:any,photo:any){
            return`${ConfigService.toFile("storage")}/${dir}/${photo}`
          }
      
          
          close(){
            this.displayModal=false
          }
  setActiveMenu(id: string) {
    this.activeMenu = id;
  }

}
