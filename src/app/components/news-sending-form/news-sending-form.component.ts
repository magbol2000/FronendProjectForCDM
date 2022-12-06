import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {INewsItem} from "../../models/news";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {DatePipe} from '@angular/common';
import {CategoryService} from "../../services/category.service";
import {tap} from "rxjs";
import {ICategory} from "../../models/category";
import {HttpClient} from "@angular/common/http";

interface newsForm {
  news_name: FormControl<string>;
  short_describtion: FormControl<string>;
  full_news: FormControl<string>;
  path_to_audio_file: FormControl<string>;
  path_to_img_file: FormControl<string>;
  are_comments_disabled: FormControl<boolean>;
  tags: FormControl<string>
}

@Component({
  selector: 'app-news-sending-form',
  templateUrl: './news-sending-form.component.html',
  styleUrls: ['./news-sending-form.component.scss'],
  providers: [DatePipe]
})
export class NewsSendingFormComponent implements OnInit {
  public form!: FormGroup<newsForm>;
  private isFormEditingValueNow: boolean
  private currentNewsItem: INewsItem;
  private previousNewsValue: INewsItem;
  private currentDate: Date = new Date();
  public selectedCategory:string;
  private loading: boolean;
  public categories: ICategory[] = []
  public areCommentsDisabled:boolean
  public isButtonWarningOn: boolean = false

  constructor(
    private _newsService: NewsService,
    private _categoryService: CategoryService,
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _http: HttpClient,
  ) {
  }

  ngOnInit() {
    this.initFormVars()
    this.initCategories()
  }

  private initFormVars():void {
    this.isFormEditingValueNow = this._activatedRoute.snapshot.data['newsResolver'] != null
    // loading как правило юзается для обработки ассинхронных операций.
    // Например, чтобы дизейблить кнопку сохранения новости когда ты уже нажал её и ждешь когда бек отработает, чтобы юзер не мог спамить запросами
    // Для синхронных операций нет смысла его использовать
    this.loading = true;

    this.form = this._fb.nonNullable.group({
      news_name: ['', [Validators.required, Validators.minLength(3)]],
      short_describtion: ['', [Validators.required,Validators.minLength(3)]],
      full_news: ['', [Validators.required, Validators.minLength(3)]],
      path_to_audio_file: ['', [Validators.required, Validators.minLength(3)]],
      path_to_img_file: ['', [Validators.required, Validators.minLength(3)]],
      are_comments_disabled: [false, Validators.required],
      tags: ['']
    })

    if (this.isFormEditingValueNow) {
      this.previousNewsValue = this._activatedRoute.snapshot.data['newsResolver'];

      // Не надо передевать все значение по отдельности, использую patchValue и spread оператор
      this.form.patchValue({
        news_name: this.previousNewsValue.news_name,
        short_describtion: this.previousNewsValue.short_describtion,
        full_news: this.previousNewsValue.full_news,
        path_to_audio_file: this.previousNewsValue.audio_name,
        path_to_img_file: this.previousNewsValue.img_name,
        are_comments_disabled: this.previousNewsValue.is_disable_comments,
        tags: this.previousNewsValue.tags.join(' ')
      });
    }
  }

  private initCategories(): void {
    this._categoryService.getAll().pipe(
      tap(() => {
        this.loading = false
      }),
    ).subscribe(
      value => {
        this.categories = value

        let categoriesPrepare = value.filter(
          (next) => {
            if (this.previousNewsValue)
              return next.category_name == this.previousNewsValue.category
            else return false
          }
        )

        if (categoriesPrepare.length != 0) {
          this.selectedCategory = categoriesPrepare[0].category_name
        }else {
          this.selectedCategory = this.categories[0].category_name
        }
      }
    )
  }

  public onCategorySelected(event: any) {
    this.selectedCategory = event.target.value;
  }

  public prepareTags(tags: string): string[] {
    return tags.split(" ")
  }

  public submit() {
    if (this.form.invalid) {
      this.isButtonWarningOn = true;
      return
    }

    const body = this.form.getRawValue(); // add type

    this.currentNewsItem = {
      news_name: body.news_name,
      short_describtion: body.short_describtion,
      full_news: body.full_news,
      category: this.selectedCategory,
      audio_name: body.path_to_audio_file,
      img_name: body.path_to_img_file,
      tags: this.prepareTags(body.tags),
      data: this.currentDate.toDateString(),
      is_disable_comments: this.areCommentsDisabled
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
