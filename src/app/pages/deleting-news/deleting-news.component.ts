import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {INews} from "../../models/news";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-deleting-news',
  templateUrl: './deleting-news.component.html',
  styleUrls: ['./deleting-news.component.scss']
})

export class DeletingNewsComponent implements OnInit {
  News: INews;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _newsService: NewsService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.News = this._activatedRoute.snapshot.data['newsResolver'];
    this._newsService.remove(this.News.id!).subscribe(
      () => this._router.navigate(['/'])
    )
  }
}
