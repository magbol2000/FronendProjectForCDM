import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {INewsItem} from "../models/news";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService
  ) {
  }

  get api() {
    return `http://localhost:3000/news/`;
  }

  public getAll(): Observable<INewsItem[]> {
    return this._http.get<INewsItem[]>(`${this.api}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public get(id: number): Observable<INewsItem> {
    return this._http.get<INewsItem>(`${this.api}${id}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public create(news: INewsItem): Observable<INewsItem> {
    return this._http.post<INewsItem>(`${this.api}`, news).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public edit(news: INewsItem, id: number): Observable<INewsItem> {
    return this._http.put<INewsItem>(`${this.api}${id}`, news).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public remove(id: number): Observable<unknown> {
    return this._http.delete(`${this.api}${id}`).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this._errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
