import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGetidComponent } from './student-getid.component';

describe('StudentGetidComponent', () => {
  let component: StudentGetidComponent;
  let fixture: ComponentFixture<StudentGetidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGetidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
