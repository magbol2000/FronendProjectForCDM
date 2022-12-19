import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isPopupHidden: boolean = false;

  onClickCategories() {
    this.isPopupHidden = !this.isPopupHidden
  }

  @Input() isItMobile: boolean;
}
