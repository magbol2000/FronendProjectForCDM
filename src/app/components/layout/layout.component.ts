import { Component, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isHeaderInViewport: boolean = true;
  isItMobile: boolean = this.checkIsItMobileResolution();
  // забыл точку с запятой в конце. Пробегись линтером
  isPopupHidden: boolean = true;

  ngOnInit() {
    fromEvent(window, 'resize').subscribe(
      () => {
        this.isItMobile = this.checkIsItMobileResolution()
      }
    );
  }

  // Это делается по-другому, погугли "breakpointobserver in angular" или посмотри в нашем проекте
  // + надо вынести в сервис отдельный
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

  //Этот геморрой с нотификациями и логикой вокруг него избыточный. Сделай чтобы нотификация об ошибке всегда была наверху, position: absolute top: 0
  // Твоя реализация не содержит каких-либо преимуществ
  // Плюс этому коду место явно не здесь, а в отдельном сервисе, но повторюсь это всё избыточно, можешь посмотреть наши нотификации об ошибках
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
