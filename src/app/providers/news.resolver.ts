import {Injectable} from "@angular/core";
import {NewsService} from "../services/news.service";
import {GlobalStates} from "./global.states";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {INewsItem} from "../models/news";
import {finalize, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<INewsItem | boolean> {
  constructor(
    private _newsService: NewsService,
    private _globalStates: GlobalStates,
    private _router: Router,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<INewsItem> | Promise<boolean> {
    const id: number = +route.paramMap.get('id')!;
    this._globalStates.loading = true;

    return this._newsService.get(id).pipe(
      finalize(() => this._globalStates.loading = false)
    );
  }
}
