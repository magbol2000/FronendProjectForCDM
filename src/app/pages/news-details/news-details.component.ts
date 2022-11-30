import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {Observable} from "rxjs";
import {INews} from "../../models/news";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  news$: Observable<INews>;
  loading: boolean = false;
  new: INews;
  constructor(
    private newsService: NewsService,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.new = this._activatedRoute.snapshot.data['newsResolver'];
  }
}
