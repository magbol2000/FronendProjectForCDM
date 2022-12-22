import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  doesUserAgree$ = new Subject<boolean>()
  isModalActive$ = new Subject<boolean>()

  onContinue() {
    this.doesUserAgree$.next(true)
  }

  onCancel() {
    this.doesUserAgree$.next(false)
  }

  call() {
    this.isModalActive$.next(true)
    this.doesUserAgree$.subscribe(value => {
      return value
    })
  }

  clear() {
    this.isModalActive$.next(false)
  }
}
