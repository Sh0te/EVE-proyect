import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceChargeComponent } from './balance-charge.component';

describe('BalanceChargeComponent', () => {
  let component: BalanceChargeComponent;
  let fixture: ComponentFixture<BalanceChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceChargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
