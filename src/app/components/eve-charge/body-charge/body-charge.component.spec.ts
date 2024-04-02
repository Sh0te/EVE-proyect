import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChargeComponent } from './body-charge.component';

describe('BodyChargeComponent', () => {
  let component: BodyChargeComponent;
  let fixture: ComponentFixture<BodyChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyChargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
