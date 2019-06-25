import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePutComponent } from './course-put.component';

describe('CoursePutComponent', () => {
  let component: CoursePutComponent;
  let fixture: ComponentFixture<CoursePutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
