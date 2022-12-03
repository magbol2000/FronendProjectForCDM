import {Component, Input} from '@angular/core';
import {INews} from "../../models/news";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-short-news-of-the-day',
  templateUrl: './short-news-of-the-day.component.html',
  styleUrls: ['./short-news-of-the-day.component.scss']
})
export class ShortNewsOfTheDayComponent {
  lastNew: INews = {
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

  ngOnInit (): void {

  }

  @Input()
  set new(lastNew: INews) {
    if (lastNew != null) {
      this.lastNew = lastNew
    }
  }
  @Input() isGeneralPage:boolean
}
