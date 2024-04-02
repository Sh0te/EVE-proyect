import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveChargeComponent } from './eve-charge.component';

describe('EveChargeComponent', () => {
  let component: EveChargeComponent;
  let fixture: ComponentFixture<EveChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveChargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EveChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
