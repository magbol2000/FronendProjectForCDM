import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {INewsItem} from "../../../models/news";
import {NewsService} from "../../../services/news.service";

@Component({
  selector: 'app-remove',
  templateUrl: './deleting-news.component.html',
  styleUrls: ['./deleting-news.component.scss']
})

export class DeletingNewsComponent implements OnInit {
  newsItem: INewsItem;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _newsService: NewsService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.newsItem = this._activatedRoute.snapshot.data['newsResolver'];
    this._newsService.remove(this.newsItem.id!).subscribe(
      () => this._router.navigate(['/'])
    )
  }
}
