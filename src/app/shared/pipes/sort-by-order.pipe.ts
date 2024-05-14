import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByOrder'
})
export class SortByOrderPipe implements PipeTransform {
  transform(array: any[]): any[] {
    if (!array || array.length === 0) {
      return [];
    }

    // Ordena o array pelo ID em ordem decrescente
    return array.sort((a, b) => b.id - a.id);
  }
}
