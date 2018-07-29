import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRLIListComponent } from './prli-list.component';

describe('PRLIListComponent', () => {
  let component: PRLIListComponent;
  let fixture: ComponentFixture<PRLIListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRLIListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRLIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
