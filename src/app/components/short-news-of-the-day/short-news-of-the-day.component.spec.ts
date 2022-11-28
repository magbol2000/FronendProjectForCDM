import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortNewsOfTheDayComponent } from './short-news-of-the-day.component';

describe('ShortNewsOfTheDayComponent', () => {
  let component: ShortNewsOfTheDayComponent;
  let fixture: ComponentFixture<ShortNewsOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortNewsOfTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortNewsOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
