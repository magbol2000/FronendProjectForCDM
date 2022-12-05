import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComment} from "../../../models/comment";
import {CommentService} from "../../../services/comment.service";
import { Location } from '@angular/common'

@Component({
  selector: 'app-comment-remove',
  templateUrl: './comment-remove.component.html',
  styleUrls: ['./comment-remove.component.scss']
})
export class CommentRemoveComponent {
  comment: IComment;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _commentService: CommentService,
    private _router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.comment = this._activatedRoute.snapshot.data['commentResolver'];
    this._commentService.remove(this.comment.id!).subscribe(
      () => this.location.back()
    )
  }
}
