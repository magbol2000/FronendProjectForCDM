import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRemoveComponent } from './comment-remove.component';

describe('CommentRemoveComponent', () => {
  let component: CommentRemoveComponent;
  let fixture: ComponentFixture<CommentRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
