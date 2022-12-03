import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {INewsItem} from "../../models/news";
import {NewsService} from "../../services/news.service";
import {catchError, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {
  newsGroup: INewsItem[];
  reversedNewsGroup: INewsItem[];
  loading: boolean = false;
  lastNewsItem: INewsItem;

  constructor(
    private _newsService: NewsService
  ) {
  }

  ngOnInit (): void {
    this.loading=true;
    this._newsService.getAll().pipe(
      tap(()=>{this.loading=false}),
      catchError(this.errorHandler),

    ).subscribe(
      value => {
        this.newsGroup = value;
        this.reversedNewsGroup = this.newsGroup.reverse();
        this.lastNewsItem = this.reversedNewsGroup[0]
        this.lastNewsItemFromOutput.emit({ NewsItem: this.lastNewsItem });
      }
    )

  }

  // todo errors
  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
  }

  @Output() lastNewsItemFromOutput = new EventEmitter<{ NewsItem: INewsItem }>();
}
