import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletingNewsComponent } from './deleting-news.component';

describe('DeletingNewsComponent', () => {
  let component: DeletingNewsComponent;
  let fixture: ComponentFixture<DeletingNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletingNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
