import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {tap} from "rxjs";
import {ICategory} from "../../models/category";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  loading: boolean = false;
  categories: ICategory[];

  constructor(
    private _categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.loading = true;

    // https://habr.com/ru/post/484762/
    this._categoryService.getAll().pipe(
      tap(() => {
        this.loading = false
      }),
    ).subscribe(
      value => {
        this.categories = value;
      }
    )
  }
}
