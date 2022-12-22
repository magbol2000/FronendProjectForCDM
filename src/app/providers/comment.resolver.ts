import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {finalize, Observable} from 'rxjs';
import {GlobalStates} from "./global.states";
import {CommentService} from "../services/comment.service";
import {IComment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment | boolean> {
  constructor(
    private _commentService: CommentService,
    private _globalStates: GlobalStates,
    private _router: Router,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment | boolean> {
    const id: number = +route.paramMap.get('id')!;
    this._globalStates.loading = true;

    return this._commentService.get(id).pipe(
      finalize(() => this._globalStates.loading = false)
    );
  }
}
