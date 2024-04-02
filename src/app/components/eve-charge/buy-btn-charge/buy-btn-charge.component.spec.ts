import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBtnChargeComponent } from './buy-btn-charge.component';

describe('BuyBtnChargeComponent', () => {
  let component: BuyBtnChargeComponent;
  let fixture: ComponentFixture<BuyBtnChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyBtnChargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyBtnChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
