import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config-service';
import { GlobalName } from '../utils/global-name';

@Injectable({
  providedIn: 'root'
})
export class PosterService {
 url=ConfigService.toApiUrl("posters/");

  constructor(private http:HttpClient) { }

    getAll(pageSize:any,page:any,isPaginate=false){
      if (isPaginate) {
            return this.http.get<any[]>(`${this.url}?pageSize=${pageSize}&page=${page}`,ConfigService.addAction('recup'));

      }else{
        return this.http.get<any[]>(`${this.url}`,ConfigService.addAction('recup'));

      }
  }

 
  getByState(state:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("teams-by-state")}/${state}`,ConfigService.addAction('LISTER'));
  }


   setStatus(id:any,status:any){
    return this.http.get<any>(`${this.url}set-status/${id}/${status}`,
     ConfigService.httpHeader(localStorage.getItem(GlobalName.tokenName),true));
  }

  store(ressource:any){
    return this.http.post<any>(`${this.url}`, ressource,
     ConfigService.addAction('CREER'));
  }

  update(id:any,ressource:any){
   // ressource['_method']='patch';
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

  setState(id:any,state:any){
    return this.http.get<any[]>(`${ConfigService.toApiUrl("communiques-set-state")}/${id}/state/${state}`,ConfigService.addAction('CHANGER_STATUT'));
  }

}
