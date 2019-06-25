import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGetidComponent } from './course-getid.component';

describe('CourseGetidComponent', () => {
  let component: CourseGetidComponent;
  let fixture: ComponentFixture<CourseGetidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGetidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
