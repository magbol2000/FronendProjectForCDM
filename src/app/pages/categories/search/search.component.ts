import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICategory} from "../../../models/category";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  category: ICategory;
  searchData: string = "*";

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.category = this._activatedRoute.snapshot.data['categoryResolver'];
    this.searchData = this.category.category_name
  }
}
