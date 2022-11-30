import {Component, OnInit} from '@angular/core';
import {INews} from "../../models/news";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NewsService} from "../../services/news.service";
// todo adding news



interface LoginForm {
  news_name: FormControl<string>;
  short_describtion: FormControl<string>;
  full_news: FormControl<string>;
}

@Component({
  selector: 'app-news-sending-form',
  templateUrl: './news-sending-form.component.html',
  styleUrls: ['./news-sending-form.component.scss']
})
export class NewsSendingFormComponent implements OnInit {

  public form!: FormGroup<LoginForm>;
  News: INews;
  constructor(
    private _newsService: NewsService,
    private _fb: FormBuilder,
    private _router: Router,
  ) {
  }

  ngOnInit() {
    this.form = this._fb.nonNullable.group({
      news_name: ['', Validators.required],
      short_describtion: ['', Validators.required],
      full_news: ['', Validators.required]
    })
  }

  public submit() {
    const body = this.form.getRawValue(); // add type
    this.News = {
      id: 30,
      news_name: body.news_name,
      short_describtion: body.short_describtion,
      full_news: body.full_news,
      category: "Market",
      audio_name: "Hi",
      img_name:"hi",
      tags: ["hi"],
      data: "fdsf",
      is_disable_comments: true
    }

    this._newsService.create(this.News).subscribe(
      () => this._router.navigate(['/'])
    )
  }
}
