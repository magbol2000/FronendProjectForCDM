import {Component, Inject, Input, LOCALE_ID} from '@angular/core';
import {INewsItem} from "../../models/news";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent {
  isNewsNew: boolean;
  newsItem: INewsItem;

  @Input() isItShortNews: boolean;

  constructor(
    @Inject(LOCALE_ID) public _locale: string
  ) {
  }

  @Input() set setNewsItem(newsItem: INewsItem) {
    this.newsItem = newsItem
    let newsDate = formatDate(Date.now(), 'mediumDate', this._locale);
    let newsItemDate = formatDate(newsItem.date, 'mediumDate', this._locale)
    this.isNewsNew = newsDate === newsItemDate
  }
}
