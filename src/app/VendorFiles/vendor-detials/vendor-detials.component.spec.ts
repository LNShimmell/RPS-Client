import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetialsComponent } from './vendor-detials.component';

describe('VendorDetialsComponent', () => {
  let component: VendorDetialsComponent;
  let fixture: ComponentFixture<VendorDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
