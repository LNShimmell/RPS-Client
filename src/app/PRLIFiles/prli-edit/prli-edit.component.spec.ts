import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRLIEditComponent } from './prli-edit.component';

describe('PRLIEditComponent', () => {
  let component: PRLIEditComponent;
  let fixture: ComponentFixture<PRLIEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRLIEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRLIEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
