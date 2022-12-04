import {Component, OnInit} from '@angular/core';
import {INewsItem} from "../../models/news";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {DatePipe} from '@angular/common';


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
  private isFormEditingValueNow: boolean
  private currentNewsItem: INewsItem;
  private previousNewsValue: INewsItem;
  private currentDate: Date = new Date();

  constructor(
    private _newsService: NewsService,
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.isFormEditingValueNow = this._activatedRoute.snapshot.data['newsResolver'] != null


    this.form = this._fb.nonNullable.group({
      news_name: ['', Validators.required],
      short_describtion: ['', Validators.required],
      full_news: ['', Validators.required]
    })

    if (this.isFormEditingValueNow) {
      this.previousNewsValue = this._activatedRoute.snapshot.data['newsResolver'];

      this.form.patchValue({
        news_name: this.previousNewsValue.news_name,
        short_describtion: this.previousNewsValue.short_describtion,
        full_news: this.previousNewsValue.full_news
      });
    }


  }

  public submit() {
    const body = this.form.getRawValue(); // add type

    this.currentNewsItem = {
      news_name: body.news_name,
      short_describtion: body.short_describtion,
      full_news: body.full_news,
      category: "Market",
      audio_name: "Hi",
      img_name: "hi",
      tags: ["hi"],
      data: this.currentDate.toDateString(),
      is_disable_comments: true
    }

    if (this.isFormEditingValueNow) {
      this._newsService.edit(this.currentNewsItem, this.previousNewsValue.id!).subscribe(
        () => this._router.navigate(['/'])
      )
    } else {
      this._newsService.create(this.currentNewsItem).subscribe(
        () => this._router.navigate(['/'])
      )
    }
  }
}
