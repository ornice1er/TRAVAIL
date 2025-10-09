import { Component, Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sampleSearch',
  standalone:true
})
export class SampleSearchPipe implements PipeTransform {

  transform(value: any, searchText:String): any {
    
    return (searchText != '') ? value.filter((item:any) => {  
        return item?.lastname?.toLowerCase().includes(searchText.toLowerCase()) || 
              item?.firstname?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.birthdate?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.birthplace?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.sex?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.address?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.fonction?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.email?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.info?.numero_sygap?.toLowerCase().includes(searchText.toLowerCase()) ||

              //emplacement pour les autres champs
              item?.code?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.type_emplacemen?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.chemin?.toLowerCase().includes(searchText.toLowerCase()) ||

              //dossier
                item?.info?.numero_sygap?.toLowerCase().includes(searchText.toLowerCase()) ||
                item?.nom?.toLowerCase().includes(searchText.toLowerCase()) ||
                item?.dossier_parent?.nom?.toLowerCase().includes(searchText.toLowerCase()) ||
                item?.regle_conservation?.nom?.toLowerCase().includes(searchText.toLowerCase()) ||
                item?.visibilite?.toLowerCase().includes(searchText.toLowerCase()) ||


              //audits pour les autres champs
              item?.action?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.details?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.ip_address?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.user_agent?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.utilisateur?.lastname?.toLowerCase().includes(searchText.toLowerCase()) ||
              item?.utilisateur?.firstname?.toLowerCase().includes(searchText.toLowerCase()) ||


              item?.phone?.toLowerCase().includes(searchText.toLowerCase()) 
        }) : value;
  }


}