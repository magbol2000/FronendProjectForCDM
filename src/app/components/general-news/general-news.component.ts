import {Component, Input} from '@angular/core';
import {INewsItem} from "../../models/news";

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.scss']
})
export class GeneralNewsComponent {
  lastNewsItem: INewsItem = {
    news_name: "loading",
    full_news: "loading",
    short_describtion: "loading",
    category: "loading",
    audio_name: "#",
    img_name: "#",
    tags: [],
    date: Date.prototype,
    is_disable_comments: false
  }
  @Input() isItGeneralPage: boolean
  @Input()
  set setNewsItem(lastNewsItem: INewsItem) {
    if (lastNewsItem != null) {
      this.lastNewsItem = lastNewsItem
    }
  }

  constructor() {
  }

}
