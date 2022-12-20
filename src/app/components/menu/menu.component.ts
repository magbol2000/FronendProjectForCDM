import {Component} from '@angular/core';
import {MobileService} from "../../services/mobile.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isPopupHiddenCounter: boolean = true

  constructor(
    public _mobileService: MobileService
  ) {
  }

}
