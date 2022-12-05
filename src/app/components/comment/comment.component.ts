import {Component, Injectable, Input} from '@angular/core';
import {IComment} from "../../models/comment";
import {CommentService} from "../../services/comment.service";
import {Router, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  constructor(
  ) {}

  @Input() comment: IComment
}
