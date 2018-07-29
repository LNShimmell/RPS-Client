import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRDetailsComponent } from './pr-details.component';

describe('PRDetailsComponent', () => {
  let component: PRDetailsComponent;
  let fixture: ComponentFixture<PRDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
