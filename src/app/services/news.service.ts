import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, delay, last} from "rxjs";
import {INewsItem} from "../models/news";

@Injectable({
  providedIn:'root'
})
export class NewsService {

  constructor(private _http: HttpClient) {
  }

  get api() {
    return `http://localhost:3000/news/`;
  }

  public getAll ():Observable<INewsItem[]> {
    return this._http.get<INewsItem[]>(`${this.api}`)
  }

  public get(id: number):Observable<INewsItem> {
    return this._http.get<INewsItem>(`${this.api}${id}`)
  }

  public create(news: INewsItem):Observable<INewsItem> {
    return this._http.post<INewsItem>(`${this.api}`,news)
  }

  public edit(news: INewsItem, id: number): Observable<INewsItem> {
    return this._http.put<INewsItem>(`${this.api}${id}`, news);
  }

  public remove(id: number): Observable<unknown> {
    return this._http.delete(`${this.api}${id}`);
  }
}
