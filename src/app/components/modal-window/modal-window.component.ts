import {Component} from '@angular/core';
import {ModalWindowService} from "../../services/modal-window.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  constructor(
    public _modalWindowService: ModalWindowService
  ) {
  }

  onContinue() {
    this._modalWindowService.onContinue()
    this._modalWindowService.clear()
  }

  onCancel() {
    this._modalWindowService.onCancel()
    this._modalWindowService.clear()
  }
}
