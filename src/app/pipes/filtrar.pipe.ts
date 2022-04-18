import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultRests = [];
    for(const rest of value){
      if(rest.comida.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRests.push(rest);
      };
    };

    return resultRests;
  }

}
