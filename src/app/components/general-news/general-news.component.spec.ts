import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeneralNewsComponent} from './general-news.component';

describe('ShortNewsOfTheDayComponent', () => {
  let component: GeneralNewsComponent;
  let fixture: ComponentFixture<GeneralNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralNewsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeneralNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
