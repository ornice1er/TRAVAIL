import {  HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.pprod';

export const ConfigService: any = {
  apiVersion: environment.API_VERSION,
  apiScheme: environment.API_SCHEME,
  apiFile: environment.API_FILE,
  apiDomain: environment.API_DOMAIN,
  toApiUrl(path:any) {

    return `${this.apiScheme}://${this.apiDomain}/${path}`;
  },
  toFile(path:any) {
    return `${this.apiScheme}://${this.apiFile}/${path}`;
  },
  /** Image de remplacement quand un média est absent en base. */
  placeholder: 'assets/placeholder.svg',
  /**
   * URL d'un fichier du dossier storage de l'API.
   * Renvoie l'image de remplacement si le nom est vide : évite les requêtes « .../null ».
   */
  toStorage(dir:any, name:any) {
    if (name === null || name === undefined || name === '' || name === 'null' || name === 'undefined') {
      return this.placeholder;
    }
    return `${this.toFile('storage')}/${dir}/${name}`;
  },
  getOrigin() {
    return `${this.apiScheme}://${this.apiFile}`;
  },
  httpHeader(token=null,isJson=true){
      
      if(token!=null){
        return {
            headers: new HttpHeaders({
            'Authorization': 'Bearer ' + token,
              'Access-Control-Allow-Origin':'*',
              'Accept':'application/json'
          })
          };
      }
      return {
        headers: new HttpHeaders({})
      };
    
    
  },
  addAction(action:string){
      
      return {headers: new HttpHeaders({'action': action}) };
      },
  toWsUrl(path:any){
    return `wss://${this.apiDomain}/${path}`
  }
}
