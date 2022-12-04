import {Component, Input, OnInit} from '@angular/core';
import {INewsItem} from "../../models/news";
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.scss']
})
export class ShortNewsComponent implements OnInit {
  @Input() currentNewsItem: INewsItem

  constructor() {
  }

  ngOnInit() {
    fromEvent(window, 'resize').subscribe(
      () => this.checkIsItMobileResolution
    );
  }

  checkIsItMobileResolution(): boolean {
    if (window.innerWidth < 768) {
      return true;
    } else {
      return false;
    }
  }
}
