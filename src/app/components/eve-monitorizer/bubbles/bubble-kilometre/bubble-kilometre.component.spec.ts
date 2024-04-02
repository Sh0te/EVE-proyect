import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleKilometreComponent } from './bubble-kilometre.component';

describe('BubbleKilometreComponent', () => {
  let component: BubbleKilometreComponent;
  let fixture: ComponentFixture<BubbleKilometreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleKilometreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubbleKilometreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
