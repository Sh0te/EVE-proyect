import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleHoursComponent } from './bubble-hours.component';

describe('BubbleHoursComponent', () => {
  let component: BubbleHoursComponent;
  let fixture: ComponentFixture<BubbleHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleHoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubbleHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
