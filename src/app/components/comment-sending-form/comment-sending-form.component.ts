import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../models/comment";

interface commentForm {
  user_name: FormControl<string>;
  message: FormControl<string>;
  user_email: FormControl<string>;
}

@Component({
  selector: 'app-comment-sending-form',
  templateUrl: './comment-sending-form.component.html',
  styleUrls: ['./comment-sending-form.component.scss']
})
export class CommentSendingFormComponent implements OnInit {
  public form!: FormGroup<commentForm>;

  constructor(
    private _fb: FormBuilder,
    private _commentService: CommentService
  ) {
  }

  ngOnInit() {
    this.form = this._fb.nonNullable.group({
      user_name: ['', Validators.required],
      message: ['', Validators.required],
      user_email: ['', Validators.required],
    })
  }

  public submit() {

    const body = this.form.getRawValue();
    let currentData: Date = new Date;

    let newComment: IComment = {
      user_name: body.user_name,
      message: body.message,
      data: currentData.toDateString()
    }
    this._commentService.create(newComment).subscribe(
      ()=> {window.location.reload();}
    )
  }

  @Input() countOfComments: number;
}
