import {Injectable} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {finalize, Observable} from 'rxjs';
import {GlobalStates} from "./global.states";
import {CategoryService} from "../services/category.service";
import {ICategory} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<ICategory | boolean> {
  constructor(
    private _categoryService: CategoryService,
    private _globalStates: GlobalStates,
    private _router: Router,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategory> | Promise<boolean> {
    const categoryId: number = +route.paramMap.get('id')!;
    this._globalStates.loading = true;

    return this._categoryService.get(categoryId).pipe(
      finalize(() => this._globalStates.loading = false)
    )
  }
}
