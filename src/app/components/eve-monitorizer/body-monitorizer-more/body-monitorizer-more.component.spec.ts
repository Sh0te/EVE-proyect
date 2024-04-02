import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMonitorizerMoreComponent } from './body-monitorizer-more.component';

describe('BodyMonitorizerMoreComponent', () => {
  let component: BodyMonitorizerMoreComponent;
  let fixture: ComponentFixture<BodyMonitorizerMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyMonitorizerMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyMonitorizerMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
