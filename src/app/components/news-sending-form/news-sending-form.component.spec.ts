import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSendingFormComponent } from './news-sending-form.component';

describe('NewsSendingFormComponent', () => {
  let component: NewsSendingFormComponent;
  let fixture: ComponentFixture<NewsSendingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSendingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSendingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
