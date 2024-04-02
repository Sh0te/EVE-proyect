import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalQualitiesComponent } from './personal-qualities.component';

describe('PersonalQualitiesComponent', () => {
  let component: PersonalQualitiesComponent;
  let fixture: ComponentFixture<PersonalQualitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalQualitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
