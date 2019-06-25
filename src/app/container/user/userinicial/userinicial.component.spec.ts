import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinicialComponent } from './userinicial.component';

describe('UserinicialComponent', () => {
  let component: UserinicialComponent;
  let fixture: ComponentFixture<UserinicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
