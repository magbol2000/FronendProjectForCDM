import {Component, OnInit} from '@angular/core';
import {INewsItem} from "../../models/news";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {DatePipe} from '@angular/common';
import {CategoryService} from "../../services/category.service";
import {ICategory} from "../../models/category";
import {HttpClient} from "@angular/common/http";
import {ModalWindowService} from "../../services/modal-window.service";

interface newsForm {
  newsName: FormControl<string>;
  shortDescribtion: FormControl<string>;
  fullNews: FormControl<string>;
  audioName: FormControl<string>;
  imgName: FormControl<string>;
  areCommentsDisabled: FormControl<boolean>;
  tags: FormControl<string>
}

@Component({
  selector: 'app-news-sending-form',
  templateUrl: './news-sending-form.component.html',
  styleUrls: ['./news-sending-form.component.scss'],
  providers: [DatePipe]
})
export class NewsSendingFormComponent implements OnInit {
  public selectedCategory: string;
  public categories: ICategory[] = []
  public areCommentsDisabled: boolean
  public isButtonWarningOn: boolean = false
  public form!: FormGroup<newsForm>;
  private isFormEditingValueNow: boolean
  private currentNewsItem: INewsItem;
  private previousNewsValue: INewsItem;
  private currentDate: Date = new Date();

  constructor(
    private _newsService: NewsService,
    private _categoryService: CategoryService,
    private _modalWindowService: ModalWindowService,
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

    let body = this.form.getRawValue();

    this.currentNewsItem = {
      ...body,
      category: this.selectedCategory,
      tags: this.prepareTags(body.tags),
      date: this.currentDate,
      isDisableComments: this.areCommentsDisabled
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

  private initFormVars(): void {
    this.isFormEditingValueNow = this._activatedRoute.snapshot.data['newsResolver'] != null

    this.form = this._fb.nonNullable.group({
      newsName: ['', [Validators.required, Validators.minLength(3)]],
      shortDescribtion: ['', [Validators.required, Validators.minLength(3)]],
      fullNews: ['', [Validators.required, Validators.minLength(3)]],
      audioName: ['', [Validators.required, Validators.minLength(3)]],
      imgName: ['', [Validators.required, Validators.minLength(3)]],
      areCommentsDisabled: [false, Validators.required],
      tags: ['']
    })

    if (this.isFormEditingValueNow) {
      this.previousNewsValue = this._activatedRoute.snapshot.data['newsResolver'];

      this.form.patchValue({
        ...this.previousNewsValue,
        tags: this.previousNewsValue.tags.join(' ')
      });
    }
  }

  private initCategories(): void {
    this._categoryService.getAll().subscribe(
      value => {
        this.categories = value

        let categoriesPrepare = value.filter(
          (next) => {
            if (this.previousNewsValue)
              return next.categoryName === this.previousNewsValue.category
            else return false
          }
        )

        if (categoriesPrepare.length != 0) {
          this.selectedCategory = categoriesPrepare[0].categoryName
        } else {
          this.selectedCategory = this.categories[0].categoryName
        }
      }
    )
  }
}
