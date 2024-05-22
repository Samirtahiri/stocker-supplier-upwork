import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerDetailComponent } from './winner-detail.component';

describe('OrderAccordionComponent', () => {
  let component: WinnerDetailComponent;
  let fixture: ComponentFixture<WinnerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinnerDetailComponent]
    });
    fixture = TestBed.createComponent(WinnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
