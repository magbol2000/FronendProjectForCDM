import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {INews} from "../../models/news";

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.scss']
})
export class FullNewsComponent implements OnInit {
  new: INews;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
     this.new = this._activatedRoute.snapshot.data['newsResolver'];
  }

}
