import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveSettingsComponent } from './eve-settings.component';

describe('EveSettingsComponent', () => {
  let component: EveSettingsComponent;
  let fixture: ComponentFixture<EveSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EveSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
