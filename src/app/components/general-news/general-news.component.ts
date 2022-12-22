import {Component, Input} from '@angular/core';
import {INewsItem} from "../../models/news";

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.scss']
})
export class GeneralNewsComponent {
  lastNewsItem: INewsItem = {
    newsName: "loading",
    fullNews: "loading",
    shortDescribtion: "loading",
    category: "loading",
    audioName: "assets/music/Template.mp3",
    imgName: "",
    tags: [],
    date: Date.prototype,
    isDisableComments: false
  }
  @Input() isItGeneralPage: boolean

  @Input()
  set setNewsItem(lastNewsItem: INewsItem) {
    if (lastNewsItem != null) {
      this.lastNewsItem = lastNewsItem
    }
  }
}
