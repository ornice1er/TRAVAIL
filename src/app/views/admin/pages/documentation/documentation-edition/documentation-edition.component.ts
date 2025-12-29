import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ToastrService } from 'ngx-toastr';
import Quill from 'quill';
import { DocumentationService } from '../../../../../core/services/documentation.service';
import { LocalStorageService } from '../../../../../core/utils/local-stoarge-service';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';
const Font = Quill.import('formats/font') as any;
Font.whitelist = ['bookman', 'arial', 'times-new-roman'];
Quill.register('formats/font', Font, true);

@Component({
  selector: 'app-documentation-edition',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule,LoadingComponent,QuillModule],
  templateUrl: './documentation-edition.component.html',
  styleUrl: './documentation-edition.component.css'
})
export class DocumentationEditionComponent {
 activeMenu = 'documentation';
  docForm: FormGroup;
  selectedFile: File | null = null;

  showTypeDropdown = false;
  showEtatDropdown = false;
  showLocationDropdown = false;
loading=false
modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ font: Font.whitelist }],  // Ajoute le menu déroulant des polices
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'blockquote', 'code-block'],
    ['clean']
  ]
};
docId:any
doc:any
  constructor(
     private docService:DocumentationService,
    private lsService:LocalStorageService,
    private route:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService,
    private fb: FormBuilder) {
    this.docForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      has_principal_access: ['', Validators.required],
      filename: [null],

    });
  }


    ngOnInit(){
    this.docId=this.route.snapshot.paramMap.get('id')
    this.get()
  }

    get() {
    this.loading=true
      this.docService.get(this.docId).subscribe((res:any)=>{
          this.loading=false    
          this.doc=res.data
          this.docForm.patchValue({
            name: res.data.name,
            description: res.data.description,
            type: res.data.type,
            status: res.data?.status,
            has_principal_access: res.data.media?.has_principal_access,
          });
                    this.toastr.success('Connexion réussie', 'Connexion');
         },
         (err:any)=>{
          this.loading=false
          this.toastr.error(err.error?.message, 'Communiqué');
    
        })
  }


  onSubmit() {
        alert()
   const formData = new FormData();
        let object=this.docForm.value
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            formData.append(key,element)
          }
        }
         this.loading=true
          this.docService.update(this.doc?.media?.id,formData).subscribe((res:any)=>{
              this.loading=false
               this.router.navigate(["/admin/documentation"])

             },
             (err:any)=>{
              this.loading=false
        
            })
      }

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.selectedFile = file;
    }
  }

    onFileSelect(event: any, field: string) {
  const file = event.target.files[0];
  if (file) {
    this.docForm.patchValue({ [field]: file });
  }
}


  setType(value: string) {
    this.docForm.get('type')?.setValue(value);
    this.showTypeDropdown = false;
  }

  setEtat(value: string) {
    this.docForm.get('etat')?.setValue(value);
    this.showEtatDropdown = false;
  }

  setPublishLocation(value: string) {
    this.docForm.get('publishLocation')?.setValue(value);
    this.showLocationDropdown = false;
  }

  setActive(menuId: string) {
    this.activeMenu = menuId;
  }

}
