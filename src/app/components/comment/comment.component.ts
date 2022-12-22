import {Component, Input} from '@angular/core';
import {IComment} from "../../models/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: IComment
}
