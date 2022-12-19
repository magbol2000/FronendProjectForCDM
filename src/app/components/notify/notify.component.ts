import {Component, Input} from '@angular/core';
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {
  @Input() isHeaderInViewport: boolean

  constructor(
    public _errorService: ErrorService
  ) {
  }



  public onButton() {
    this._errorService.clear()
  }
}
