import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceseaddComponent } from './exerciceseadd.component';

describe('ExerciceseaddComponent', () => {
  let component: ExerciceseaddComponent;
  let fixture: ComponentFixture<ExerciceseaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceseaddComponent]
    });
    fixture = TestBed.createComponent(ExerciceseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
