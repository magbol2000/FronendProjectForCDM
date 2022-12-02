import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, delay} from "rxjs";
import {INews} from "../models/news";

@Injectable({
  providedIn:'root'
})
export class NewsService {
  constructor(private _http: HttpClient) {
  }

  get api() {
    return `http://localhost:3000/news/`;
  }

  public getAll ():Observable<INews[]> {
    return this._http.get<INews[]>(`${this.api}`)
  }

  public get(id: number):Observable<INews> {
    return this._http.get<INews>(`${this.api}${id}`)
  }

  public create(news: INews):Observable<INews> {
    return this._http.post<INews>(`${this.api}`,news)
  }

  public edit(news: INews, id: number): Observable<INews> {
    return this._http.put<INews>(`${this.api}${id}`, news);
  }

  public remove(id: number): Observable<unknown> {
    return this._http.delete(`${this.api}${id}`);
  }

}
