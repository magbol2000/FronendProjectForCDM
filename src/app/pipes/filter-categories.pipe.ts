import {Pipe, PipeTransform} from '@angular/core';
import {INewsItem} from '../models/news'

@Pipe({
  name: 'filterCategories'
})
export class FilterCategoriesPipe implements PipeTransform {
  // Надо поменять параметры местами, если один из параметров имеет значение по-умолчанию, он ставится последним
  // Например, если ты сейчас не захочешь передавать newsGroup, у тебя не получится этого сделать
  transform(newsGroup: INewsItem[] = [], category: string): INewsItem[] {
    if (category == '' || category == '*') {
      return newsGroup
    }
    return newsGroup.filter(newsItem => newsItem.category.toLowerCase() == category.toLowerCase())
  }

}
