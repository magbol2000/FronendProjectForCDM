import {Component, Input} from '@angular/core';
import {INewsItem} from "../../models/news";
import {MobileService} from "../../services/mobile.service";

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.scss']
})
export class ShortNewsComponent {
  @Input() currentNewsItem: INewsItem

  constructor(
    public _mobileService: MobileService
  ) {
  }
}
