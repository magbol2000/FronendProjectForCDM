import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../models/comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: IComment[]
  countOfComments: number;
  constructor(
    private _commentService: CommentService
  ) {
  }

  ngOnInit() {
    this._commentService.getAll().subscribe(
      value => {
        this.comments = value;
        this.countOfComments = this.comments.length
      }
    )
  }
}
