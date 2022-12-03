import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategories'
})
export class FilterCategoriesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
