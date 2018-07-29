import { Component, OnInit } from '@angular/core';
import {VendorService} from '../vendorService';
import {Vendor} from '../Vendor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginator, MatSort } from '@angular/material';
import {SortPipe} from '../../Utility/sort.pipe'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendor: Vendor = new Vendor();
  vendors: Vendor[] = [];

  sortProperty: string = "Name";
  sortOrder: string = "asc";

  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }
  
  
    listV(): void{
      this.VendorSvc.listV()
        .subscribe(resp => {
          console.log(resp);
        });
    }
    
    constructor(private VendorSvc: VendorService) { }
  
    ngOnInit() {
      
      this.VendorSvc.listV().subscribe(resp=> {
        this.vendors = resp.Data
      });
      
    }
}

