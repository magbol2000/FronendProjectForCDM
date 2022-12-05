import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  public printError: string = ""
  getFormValidationErrors() {
    if (this.error) {
      let text;
      switch (this.error.error_name) {
        case 'required': text = `${this.error.control_name} is required!`; break;
        case 'pattern': text = `${this.error.control_name} has wrong pattern!`; break;
        case 'email': text = `${this.error.control_name} has wrong email format!`; break;
        case 'minlength': text = `${this.error.control_name} has wrong length! Required length: ${this.error.error_value.requiredLength}`; break;
        case 'areEqual': text = `${this.error.control_name} must be equal!`; break;
        default: text = `${this.error.control_name}: ${this.error.error_name}: ${this.error.error_value}`;
      }
      this.error = text;
    }
  }

  @Input() error: any
}
