import { Component, OnInit } from '@angular/core';
import { Product} from '../Products';
import { ProductService} from '../ProductService'
import {Vendor} from '../../VendorFiles/Vendor';
import { VendorService} from '../../VendorFiles/vendorService';
import { Router} from '@angular/router'
 
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

 
  product : Product = new Product();
  vendors: Vendor[] = [];

  create(){
    this.Productsvc.create(this.product)
    .subscribe(resp => {
      console.log(resp);});
      this.product = new Product();
  }

  constructor(private Productsvc: ProductService,
    private Vendorsvc: VendorService,
    //private syssvc: SystemService,
    private router: Router
    ){ }

  ngOnInit() {
      
    this.Vendorsvc.listV().subscribe(resp=> {
      this.vendors = resp.Data
    });
    
  }

}

