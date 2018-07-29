import { Component, OnInit } from '@angular/core';
import { Vendor } from '../Vendor';
import { VendorService} from '../vendorService'

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor : Vendor = new Vendor;
  StateCodes: string[] = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 
                           'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 
                           'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 
                           'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 
                           'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 
                           'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  create(){
    this.VendorSvc.create(this.vendor)
    .subscribe(resp => {
      console.log(resp);});
  }

  constructor(private VendorSvc: VendorService) { }

  ngOnInit() {
    let StateCodes = this.StateCodes;
  }

}
