import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSendingFormComponent } from './comment-sending-form.component';

describe('CommentSendingFormComponent', () => {
  let component: CommentSendingFormComponent;
  let fixture: ComponentFixture<CommentSendingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentSendingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentSendingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
