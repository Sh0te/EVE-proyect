import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBatteryComponent } from './total-battery.component';

describe('TotalBatteryComponent', () => {
  let component: TotalBatteryComponent;
  let fixture: ComponentFixture<TotalBatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalBatteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
