import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value == true){
      return "Discount 20%"      
    }
    return "Not Discount";
  }

}
