import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isHeaderInViewport: boolean = true;

  constructor() {
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
