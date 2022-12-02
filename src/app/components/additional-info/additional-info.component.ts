import { Component, Input } from '@angular/core';
import {INews} from "../../models/news";

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent {
  @Input() new: INews;
}
