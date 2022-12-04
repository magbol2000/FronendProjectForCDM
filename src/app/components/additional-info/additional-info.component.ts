import {Component, Input} from '@angular/core';
import {INewsItem} from "../../models/news";

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent {
  currentData: Date = new Date();
  @Input() isItShortNews: boolean;
  @Input() newsItem: INewsItem;

  checkIsNewsNew(): boolean {
    return this.currentData.toDateString() == this.newsItem.data
  }
}
