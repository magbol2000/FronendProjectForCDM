import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isPopupHidden: boolean = true;

  getHamburgerState(newItem: boolean) {
    this.isPopupHidden = newItem
  }
}
