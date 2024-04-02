import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveMonitorizerComponent } from './eve-monitorizer.component';

describe('EveMonitorizerComponent', () => {
  let component: EveMonitorizerComponent;
  let fixture: ComponentFixture<EveMonitorizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveMonitorizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EveMonitorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
