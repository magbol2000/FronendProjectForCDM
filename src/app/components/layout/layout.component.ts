import {Component, HostListener} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isHeaderInViewport: boolean = true;
  isItMobile: boolean = this.checkIsItMobileResolution();
  isPopupHidden: boolean = true
  constructor() {
  }

  ngOnInit() {
    fromEvent(window, 'resize').subscribe(
      () => {
        this.isItMobile = this.checkIsItMobileResolution()
      }
    );
  }

  checkIsItMobileResolution(): boolean {
    if (window.innerWidth < 768) {
      return true;
    } else {
      return false;
    }
  }

  getHamburgerState(newItem: boolean) {
    this.isPopupHidden = newItem
  }

  public isInViewport(): boolean {
    const box = document.querySelector('.layout__header');
    const rect = box!.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.isInViewport()) {
      this.isHeaderInViewport = true;
    } else {
      this.isHeaderInViewport = false;
    }
  }
}
