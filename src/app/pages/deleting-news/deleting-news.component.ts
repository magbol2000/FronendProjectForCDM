import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {INews} from "../../models/news";

@Component({
  selector: 'app-deleting-news',
  templateUrl: './deleting-news.component.html',
  styleUrls: ['./deleting-news.component.scss']
})
export class DeletingNewsComponent implements OnInit {
  NewsLastValue: INews;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.NewsLastValue = this._activatedRoute.snapshot.data['newsResolver'];
  }
}
