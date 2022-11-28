import {Component, OnInit} from '@angular/core';
import {INews} from "../../models/news";
import {NewsService} from "../../services/news.service";
import {catchError, Observable, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {
  news$: Observable<INews[]>;
  loading: boolean = false;

  constructor(
    private newsService: NewsService
  ) {
  }

  ngOnInit (): void {
    this.loading=true;
    this.news$ = this.newsService.getAll().pipe(
      tap(()=>{this.loading=false}),
      catchError(this.errorHandler)
    )
  }

  // todo errors
  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
  }
}
