import {Pipe, PipeTransform} from '@angular/core';
import {INewsItem} from '../models/news'

@Pipe({
  name: 'filterCategories'
})
export class FilterCategoriesPipe implements PipeTransform {
  transform(newsGroup: INewsItem[], category: string): INewsItem[] {
    if (newsGroup === undefined) {
      return []
    }

    if (category === '' || category === '*') {
      return newsGroup
    }
    return newsGroup.filter(newsItem => newsItem.category.toLowerCase() === category.toLowerCase())
  }

}
