import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config-service';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  url=ConfigService.toApiUrl("docs/");

  constructor(private http:HttpClient) { }


      getAll(pageSize:any,page:any,isPaginate=false){
      if (isPaginate) {
            return this.http.get<any[]>(`${this.url}?pageSize=${pageSize}&page=${page}`,ConfigService.addAction('recup'));

      }else{
        return this.http.get<any[]>(`${this.url}`,ConfigService.addAction('recup'));

      }
  }
 
  getByState(state:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("backups-by-state")}/${state}`,ConfigService.addAction('LISTER'));
  }

  store(ressource:any){
    return this.http.post<any>(`${this.url}`, ressource,
     ConfigService.addAction('CREER'));
  }

  update(id:any,ressource:any){
    //ressource['_method']='patch';
    ressource.append('_method','patch');

    return this.http.post<any>(`${this.url}${id}`, ressource,  ConfigService.addAction('MODIFIER'));
  }
  delete(id:any){
    return this.http.delete<any>(`${this.url}${id}`,
     ConfigService.addAction('SUPPRIMER'));
  }

  get(id:any){
    return this.http.get<any>(`${this.url}${id}`,
     ConfigService.addAction('RECUPERER'));
  }


      up(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("actualites/transmission/up")}/${id}`,ConfigService.addAction('LISTER'));
  }
     down(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("actualites/transmission/down")}/${id}`,ConfigService.addAction('LISTER'));
  }

     publish(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("actualites/publication/up")}/${id}`,ConfigService.addAction('LISTER'));
  }
     unpublish(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("actualites/publication/down")}/${id}`,ConfigService.addAction('LISTER'));
  }

      archive(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("actualites/archivied/up")}/${id}`,ConfigService.addAction('LISTER'));
  }

  setState(id:any,state:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("backups-set-state")}/${id}/state/${state}`,ConfigService.addAction('CHANGER_STATUT'));
  }

}
