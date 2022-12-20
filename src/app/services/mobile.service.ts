import {Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {map, Observable, Subject} from "rxjs";

const moblieWidth = '(min-width: 768px)'

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  isMobileWindow$ = new Subject<boolean>()

  constructor(
    private _breakpointObserver: BreakpointObserver
  ) {}

  public isDesktop$(): Observable<boolean> {
    return this._breakpointObserver.observe([moblieWidth]).pipe(
      map((result: BreakpointState) => result.matches)
    );
  }

}

