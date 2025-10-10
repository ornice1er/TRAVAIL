import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config-service';

@Injectable({
  providedIn: 'root'
})
export class CommuniqueService {
  url=ConfigService.toApiUrl("communiques/");

  constructor(private http:HttpClient) { }

    getAll(pageSize:any,page:any){
    return this.http.get<any[]>(`${this.url}?pageSize=${pageSize}&page=${page}`,ConfigService.addAction('recup'));
  }
 
  getByState(state:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("communiques-by-state")}/${state}`,ConfigService.addAction('LISTER'));
  }

  getStudents(){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("communiques-students")}`,ConfigService.addAction('LISTER'));
  }
  updateAccount(id:any,resource:any){
    return this.http.post<any[]>(`${ConfigService.toApiUrl("communiques-account-update")}/${id}`,resource,ConfigService.addAction('LISTER'));
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
    return this.http.get<any[]>(`${ConfigService.toApiUrl("communiques-set-state")}/${id}/state/${state}`,ConfigService.addAction('CHANGER_STATUT'));
  }
}
