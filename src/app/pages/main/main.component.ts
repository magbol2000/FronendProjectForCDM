import { Component } from '@angular/core';
import {INews} from "../../models/news";
import {LAST_MEDIA} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  LastNew: INews

  getLastNew(eventData: { New: INews }) {
    this.LastNew = eventData.New
    console.log(this.LastNew)
  }
}
