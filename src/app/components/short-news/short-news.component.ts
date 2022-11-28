import { Component, Input } from '@angular/core';
import { INews } from "../../models/news";

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.scss']
})
export class ShortNewsComponent {

  constructor() {

  }
  // todo change stat without reload page
  isMobileResolution() :boolean {
    if (window.innerWidth < 768) {
      return  true;
    } else {
      return false;
    }
  }

  @Input() new: INews
}
