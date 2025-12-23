import { Component, Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sampleSearch',
  standalone:true
})
export class SampleSearchPipe implements PipeTransform {

  transform(value: any, searchText:String): any {
    
    return (searchText != '') ? value.filter((item:any) => {  
        return item?.lastname?.toLowerCase().includes(searchText.toLowerCase())
        }) : value;
  }


}