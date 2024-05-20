import { Pipe, PipeTransform } from '@angular/core';
import { Transacao } from 'src/app/views/transacoes/models/transacoes';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(array: Transacao[]): Transacao[] {
    if (!array || array.length === 0) {
      return [];
    }

    return array.slice(0, 50) ;
  }

}
