import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config-service';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

    getAccueil(){
      return this.http.get<any>(`${ConfigService.toApiUrl("accueil")}`);
    }


    getActualites(pageSize:any,page:any){
      return this.http.get<any>(`${ConfigService.toApiUrl("public/actualites")}?pageSize=${pageSize}&page=${page}`);
    }


     getPrestations(pageSize:any,page:any){
      return this.http.get<any>(`${ConfigService.toApiUrl("public/services")}?pageSize=${pageSize}&page=${page}`);
    }


    getAccueilDGT(){
      return this.http.get<any>(`${ConfigService.toApiUrl("accueil-dgt")}`);
    }

     getAccueilDGRCE(){
      return this.http.get<any>(`${ConfigService.toApiUrl("accueil-dgrce")}`);
    }

     getAccueilDGFP(){
      return this.http.get<any>(`${ConfigService.toApiUrl("accueil-dgfp")}`);
    }
    getAnciensMinistres(){
      return this.http.get<any>(`${ConfigService.toApiUrl("anciens-ministres")}`);
    }

     getSuiviReformes(){
      return this.http.get<any>(`${ConfigService.toApiUrl("suivi-des-reformes")}`);
    }



     getIgsep(){
      return this.http.get<any>(`${ConfigService.toApiUrl("igsep")}`);
    }


    getActualite(slug:any){
      return this.http.get<any>(`${ConfigService.toApiUrl("page/actualites")}/${slug}`);
    }

     getCommunique(slug:any){
      return this.http.get<any>(`${ConfigService.toApiUrl("page/communiques")}/${slug}`);
    }

     getStructureSousTutelles(){
      return this.http.get<any>(`${ConfigService.toApiUrl("structures-sous-tutelles")}`);
    }

      getDirections(){
      return this.http.get<any>(`${ConfigService.toApiUrl("directions")}`);
    }

      getOrganigramme(){
      return this.http.get<any>(`${ConfigService.toApiUrl("organigramme")}`);
    }

    getVision(){
      return this.http.get<any>(`${ConfigService.toApiUrl("vision")}`);
    }

     getSGM(){
      return this.http.get<any>(`${ConfigService.toApiUrl("sgm")}`);
    }


    getDD(){
      return this.http.get<any>(`${ConfigService.toApiUrl("dd")}`);
    }


      geteServices(){
      return this.http.get<any>(`${ConfigService.toApiUrl("eservices")}`);
    }

     getMinistre(){
      return this.http.get<any>(`${ConfigService.toApiUrl("ministre")}`);
    }

     getDocument(pageSize:any,page:any,typeActif:any){
      return this.http.get<any>(`${ConfigService.toApiUrl("public/documents")}?pageSize=${pageSize}&page=${page}&categorie=${typeActif}`);
    }


     getCommuniques(){
      return this.http.get<any>(`${ConfigService.toApiUrl("communiques")}`);
    }

     getOppStages(){
      return this.http.get<any>(`${ConfigService.toApiUrl("opp-stages")}`);
    }

     getFormations(){
      return this.http.get<any>(`${ConfigService.toApiUrl("formations")}`);
    }

      getAppelDoffre(){
      return this.http.get<any>(`${ConfigService.toApiUrl("appel-d-offres")}`);
    }

     getCategory(category?:any){
      return this.http.get<any>(`${ConfigService.toApiUrl("actualites")}?${category}`);
    }

     getSanctions(){
      return this.http.get<any>(`${ConfigService.toApiUrl("sanctions")}`);
    }

     getSt(st:any){
      return this.http.get<any>(`${ConfigService.toApiUrl("structure/presentation")}${st}`);
    }
    
    sendContactForm(resource:any){
            return this.http.post<any>(`${ConfigService.toApiUrl("send-contact-form")}`,resource);

    }

}
