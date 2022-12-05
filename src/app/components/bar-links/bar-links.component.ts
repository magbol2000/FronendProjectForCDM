import {Component, Input} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-bar-links',
  templateUrl: './bar-links.component.html',
  styleUrls: ['./bar-links.component.scss']
})
export class BarLinksComponent {
  isPopupHidden: boolean = false;

  onClickCategories() {
    this.isPopupHidden = !this.isPopupHidden
  }

  @Input() isItMobile: boolean;
}
