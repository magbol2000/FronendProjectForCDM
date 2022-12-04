import { Component } from '@angular/core';
import {INewsItem} from "../../models/news";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  lastNewsItem: INewsItem

  getLastNewItem(eventData: { NewsItem: INewsItem }) {
    this.lastNewsItem = eventData.NewsItem
    console.log(this.lastNewsItem)
  }
}
