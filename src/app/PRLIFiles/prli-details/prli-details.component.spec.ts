import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRLIDetailsComponent } from './prli-details.component';

describe('PRLIDetailsComponent', () => {
  let component: PRLIDetailsComponent;
  let fixture: ComponentFixture<PRLIDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRLIDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRLIDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
