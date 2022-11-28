import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {Observable} from "rxjs";
import {INews} from "../../models/news";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  news$: Observable<INews>;
  loading: boolean = false;

  constructor(
    private newsService: NewsService
  ) {
  }

  ngOnInit() {

  }
}
