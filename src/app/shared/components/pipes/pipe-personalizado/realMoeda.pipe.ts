import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realMoeda'
})
export class RealMoedaPipe implements PipeTransform {

  transform(valor: string): string {
    const regex = new RegExp('/^(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/gm')

    return valor.replace(regex, '')
  }

}
