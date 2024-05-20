import { Pipe, PipeTransform } from '@angular/core';
import { Transacao } from 'src/app/views/transacoes/models/transacoes';

@Pipe({
  name: 'sortByOrder'
})
export class SortByOrderPipe implements PipeTransform {
  transform(array: Transacao[]): Transacao[] {
    if (!array || array.length === 0) {
      return [];
    }

    // Ordena o array pelo ID em ordem decrescente
    return array.sort((a, b) => b.id - a.id);
  }
}
