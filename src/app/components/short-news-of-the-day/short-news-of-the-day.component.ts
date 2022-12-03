import {Component, Input} from '@angular/core';
import {INewsItem} from "../../models/news";

@Component({
  selector: 'app-short-news-of-the-day',
  templateUrl: './short-news-of-the-day.component.html',
  styleUrls: ['./short-news-of-the-day.component.scss']
})
export class ShortNewsOfTheDayComponent {
  lastNewsItem: INewsItem = {
    news_name: "loading",
    full_news: "loading",
    short_describtion: "loading",
    category: "loading",
    audio_name: "loading",
    img_name: "loading",
    tags: [],
    data: "",
    is_disable_comments: false
  }

  constructor() {
  }

  @Input()
  set setNewsItem(lastNewsItem: INewsItem) {
    if (lastNewsItem != null) {
      this.lastNewsItem = lastNewsItem
    }
  }

  @Input() isItGeneralPage:boolean
}
