import {Component} from '@angular/core';
import {MobileService} from "../../services/mobile.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isPopupHidden: boolean = false;

  constructor(
    public _mobileService: MobileService
  ) {
  }
}
