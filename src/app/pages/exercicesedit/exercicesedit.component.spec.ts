import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceseditComponent } from './exercicesedit.component';

describe('ExerciceseditComponent', () => {
  let component: ExerciceseditComponent;
  let fixture: ComponentFixture<ExerciceseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceseditComponent]
    });
    fixture = TestBed.createComponent(ExerciceseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
