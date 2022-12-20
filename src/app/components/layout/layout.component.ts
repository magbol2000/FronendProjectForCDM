import { Component, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import {MobileService} from "../../services/mobile.service";

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

  // public isInViewport(): boolean {
  //   const box = document.querySelector('.layout__header');
  //   const rect = box!.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  // @HostListener('window:scroll', ['$event'])
  // isScrolledIntoView() {
  //   if (this.isInViewport()) {
  //     this.isHeaderInViewport = true;
  //   } else {
  //     this.isHeaderInViewport = false;
  //   }
  // }
}
