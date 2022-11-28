import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLinksComponent } from './bar-links.component';

describe('BarLinksComponent', () => {
  let component: BarLinksComponent;
  let fixture: ComponentFixture<BarLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
