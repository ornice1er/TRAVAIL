import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config-service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url=ConfigService.toApiUrl("tests/");

  constructor(private http:HttpClient) { }

    getAll(pageSize:any,page:any){
    return this.http.get<any[]>(`${this.url}?pageSize=${pageSize}&page=${page}`,ConfigService.addAction('recup'));
  }
 
  getByState(state:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests-by-state")}/${state}`,ConfigService.addAction('LISTER'));
  }


    up(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests/transmission/up")}/${id}`,ConfigService.addAction('LISTER'));
  }
     down(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests/transmission/down")}/${id}`,ConfigService.addAction('LISTER'));
  }

     publish(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests/publication/up")}/${id}`,ConfigService.addAction('LISTER'));
  }
     unpublish(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests/publication/down")}/${id}`,ConfigService.addAction('LISTER'));
  }

      archive(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests/archivied/up")}/${id}`,ConfigService.addAction('LISTER'));
  }

      restore(id:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests/restored/up")}/${id}`,ConfigService.addAction('LISTER'));
  }



  store(ressource:any){
    return this.http.post<any>(`${this.url}`, ressource,
     ConfigService.addAction('CREER'));
  }

  update(id:any,ressource:any){
    ressource['_method']='patch';
    //ressource.append('_method','patch');

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

  setState(id:any,state:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("tests-set-state")}/${id}/state/${state}`,ConfigService.addAction('CHANGER_STATUT'));
  }

}
