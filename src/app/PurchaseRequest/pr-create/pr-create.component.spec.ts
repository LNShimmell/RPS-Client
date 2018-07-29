import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRCreateComponent } from './pr-create.component';

describe('PRCreateComponent', () => {
  let component: PRCreateComponent;
  let fixture: ComponentFixture<PRCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
