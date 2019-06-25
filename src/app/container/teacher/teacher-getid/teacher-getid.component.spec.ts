import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGetidComponent } from './teacher-getid.component';

describe('TeacherGetidComponent', () => {
  let component: TeacherGetidComponent;
  let fixture: ComponentFixture<TeacherGetidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGetidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
