import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetidComponent } from './user-getid.component';

describe('UserGetidComponent', () => {
  let component: UserGetidComponent;
  let fixture: ComponentFixture<UserGetidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGetidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
