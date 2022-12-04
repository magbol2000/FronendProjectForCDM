import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";
import {Observable} from "rxjs";
import {INewsItem} from "../../../models/news";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  loading: boolean = false;
  newsItem: INewsItem;
  constructor(
    private newsService: NewsService,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.newsItem = this._activatedRoute.snapshot.data['newsResolver'];
  }
}
