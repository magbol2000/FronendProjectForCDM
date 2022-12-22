import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {ICategory} from '../models/category';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ErrorService} from './error.service';

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
    // Чтобы не копипастить _http.get/post и обработку ошибок, можно создать отдельный сервис типа нашего restService и вынести туда весь код который повторяется
    return this._http.get<ICategory[]>(`${this.api}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public get(id: number): Observable<ICategory> {
    return this._http.get<ICategory>(`${this.api}${id}`).pipe(
      // По идее, тут можно обойтись без bind простой стрелочной функцией, одна из главных фич стрелочной функции, то что она не теряет контекст,
      // но это так, к слову
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this._errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
