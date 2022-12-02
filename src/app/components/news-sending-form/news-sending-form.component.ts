import {Component, OnInit} from '@angular/core';
import {INews} from "../../models/news";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../services/news.service";
import { DatePipe } from '@angular/common';


interface LoginForm {
  news_name: FormControl<string>;
  short_describtion: FormControl<string>;
  full_news: FormControl<string>;
}

@Component({
  selector: 'app-news-sending-form',
  templateUrl: './news-sending-form.component.html',
  styleUrls: ['./news-sending-form.component.scss'],
  providers: [DatePipe]
})
export class NewsSendingFormComponent implements OnInit {
  public form!: FormGroup<LoginForm>;
  private isFormEditingValue: boolean
  private News: INews;
  private NewsLastValue: INews;
  private currentDate: Date = new Date();

  constructor(
    private _newsService: NewsService,
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.isFormEditingValue = this._activatedRoute.snapshot.data['newsResolver'] != null


    this.form = this._fb.nonNullable.group({
      news_name: ['', Validators.required],
      short_describtion: ['', Validators.required],
      full_news: ['', Validators.required]
    })

    if (this.isFormEditingValue) {
      this.NewsLastValue = this._activatedRoute.snapshot.data['newsResolver'];

      this.form.patchValue({
        news_name: this.NewsLastValue.news_name,
        short_describtion: this.NewsLastValue.short_describtion,
        full_news: this.NewsLastValue.full_news
      });
    }
  }

  public submit() {
    const body = this.form.getRawValue(); // add type

    this.News = {
      news_name: body.news_name,
      short_describtion: body.short_describtion,
      full_news: body.full_news,
      category: "Market",
      audio_name: "Hi",
      img_name:"hi",
      tags: ["hi"],
      data: this.currentDate.toDateString(),
      is_disable_comments: true
    }

    if (this.isFormEditingValue) {
      console.log(this.NewsLastValue.id!)
      this._newsService.edit(this.News, this.NewsLastValue.id!).subscribe(
        () => this._router.navigate(['/'])
      )
    }else {
      this._newsService.create(this.News).subscribe(
        () => this._router.navigate(['/'])
      )
    }
  }
}
