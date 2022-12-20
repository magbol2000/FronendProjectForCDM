import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchData: string = "*";

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.searchData = this._activatedRoute.snapshot.data['categoryResolver'].categoryName
  }
}
