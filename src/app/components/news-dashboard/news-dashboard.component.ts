import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {INews} from "../../models/news";
import {NewsService} from "../../services/news.service";
import {catchError, first, Observable, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {
  news: INews[];
  newsReverse: INews[];
  loading: boolean = false;
  lastNew: INews;
  constructor(
    private newsService: NewsService
  ) {
  }

  ngOnInit (): void {
    this.loading=true;
    this.newsService.getAll().pipe(
      tap(()=>{this.loading=false}),
      catchError(this.errorHandler),

    ).subscribe(
      value => {
        this.news = value;
        this.newsReverse = this.news.reverse();
        this.lastNew = this.newsReverse[0]
        this.lastElem.emit({ New: this.lastNew });
      }
    )

  }

  // todo errors
  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
  }

  @Output() lastElem = new EventEmitter<{ New: INews }>();
}
