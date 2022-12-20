import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, throwError} from "rxjs";
import {IComment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService
  ) { }

  get api() {
    return `http://localhost:3000/comments/`;
  }

  public getAll(): Observable<IComment[]> {
    return this._http.get<IComment[]>(`${this.api}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public get(id: number): Observable<IComment> {
    return this._http.get<IComment>(`${this.api}${id}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public create(comment: IComment): Observable<IComment> {
    return this._http.post<IComment>(`${this.api}`, comment).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
  
  public remove(id: number): Observable<boolean | object> {
    return this._http.delete(`${this.api}${id}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this._errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
