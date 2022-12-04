import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {ICategory} from "../models/category";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService
  ) {
  }

  get api() {
    return `http://localhost:3000/category/`;
  }

  public getAll(): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(`${this.api}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public get(id: number): Observable<ICategory> {
    return this._http.get<ICategory>(`${this.api}${id}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this._errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
