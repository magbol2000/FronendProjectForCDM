import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  isMobile$ = new Subject<boolean>()

  constructor() {

  }

  handle() {

  }

}
