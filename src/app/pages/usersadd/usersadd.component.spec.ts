import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersaddComponent } from './usersadd.component';

describe('UsersaddComponent', () => {
  let component: UsersaddComponent;
  let fixture: ComponentFixture<UsersaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersaddComponent]
    });
    fixture = TestBed.createComponent(UsersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
