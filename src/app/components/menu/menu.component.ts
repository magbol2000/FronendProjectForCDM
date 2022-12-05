import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isPopupHiddenCounter: boolean = true

  public onClickHamburger() {
    this.isPopupHiddenCounter = !this.isPopupHiddenCounter
    this.isPopupHidden.emit(!!this.isPopupHiddenCounter)
  }

  @Input() isItMobile: boolean;
  @Output() isPopupHidden = new EventEmitter<boolean>();
}
