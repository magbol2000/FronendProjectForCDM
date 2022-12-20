import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../models/comment";

interface commentForm {
  userName: FormControl<string>;
  message: FormControl<string>;
  userEmail: FormControl<string>;
}

@Component({
  selector: 'app-comment-sending-form',
  templateUrl: './comment-sending-form.component.html',
  styleUrls: ['./comment-sending-form.component.scss']
})
export class CommentSendingFormComponent implements OnInit {
  public form!: FormGroup<commentForm>;
  public isButtonWarningOn: boolean;

  @Input() countOfComments: number;

  constructor(
    private _fb: FormBuilder,
    private _commentService: CommentService
  ) {
  }

  ngOnInit() {
    this.form = this._fb.nonNullable.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(3)]],
      userEmail: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  public submit() {
    if (this.form.invalid) {
      this.isButtonWarningOn = true
      return
    }

    const body = this.form.getRawValue();
    let currentData: Date = new Date;

    let newComment: IComment = {
      userName: body.userName,
      message: body.message,
      data: currentData.toDateString()
    }
    this._commentService.create(newComment).subscribe(
      ()=> {window.location.reload();}
    )
  }
}
