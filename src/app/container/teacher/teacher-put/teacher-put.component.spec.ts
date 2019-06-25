import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPutComponent } from './teacher-put.component';

describe('TeacherPutComponent', () => {
  let component: TeacherPutComponent;
  let fixture: ComponentFixture<TeacherPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
