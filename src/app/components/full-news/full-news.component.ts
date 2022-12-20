import {Component, Input} from '@angular/core';
import {INewsItem} from "../../models/news";

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.scss']
})
export class FullNewsComponent {
  @Input() newsItem: INewsItem;
}
