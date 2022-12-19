import {Injectable, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MobileService implements OnInit{
  isMobileWindow$ = new Subject<boolean>()

  constructor(
    public _breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
     this._breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobileWindow$.next(true)
        } else {
          this.isMobileWindow$.next(false)
        }
      });
  }

}

