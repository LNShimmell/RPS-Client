import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRLICreateComponent } from './prli-create.component';

describe('PRLICreateComponent', () => {
  let component: PRLICreateComponent;
  let fixture: ComponentFixture<PRLICreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRLICreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRLICreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
