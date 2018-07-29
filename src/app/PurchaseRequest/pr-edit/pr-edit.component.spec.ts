import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PREditComponent } from './pr-edit.component';

describe('PREditComponent', () => {
  let component: PREditComponent;
  let fixture: ComponentFixture<PREditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PREditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PREditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
