import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStates {
  public loading: boolean = false;
}
