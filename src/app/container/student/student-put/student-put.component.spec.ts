import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPutComponent } from './student-put.component';

describe('StudentPutComponent', () => {
  let component: StudentPutComponent;
  let fixture: ComponentFixture<StudentPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
