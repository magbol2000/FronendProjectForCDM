import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INewsItem} from "../../models/news";
import {NewsService} from "../../services/news.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {
  reversedNewsGroup: INewsItem[];
  loading: boolean = false;
  lastNewsItem: INewsItem;

  @Input() searchQuery: string = '';
  @Output() lastNewsItemFromOutput = new EventEmitter<{ NewsItem: INewsItem }>();

  constructor(
    private _newsService: NewsService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this._newsService.getAll().pipe(
      tap(() => {
        this.loading = false
      }),
    ).subscribe(
      value => {
        this.reversedNewsGroup = value.reverse();
        this.lastNewsItem = this.reversedNewsGroup[0]
        this.lastNewsItemFromOutput.emit({NewsItem: this.lastNewsItem});
      }
    )

  }
}
