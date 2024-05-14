import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(array: any[]): any[] {
    if (!array || array.length === 0) {
      return [];
    }

    // Retorna os primeiros 10 itens da lista
    return array.slice(0, 10);
  }

}
