import { Component, OnInit } from '@angular/core';
import {ProductService} from '../ProductService';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {Product} from '../Products';
import {FormsModule} from '@angular/forms';
import {Vendor} from '../../VendorFiles/Vendor';
import {VendorService} from '../../VendorFiles/vendorService'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[];

  constructor(private ProductSvc: ProductService, private route: ActivatedRoute, private Vendorsvc: VendorService) { }

  edit(){
    this.ProductSvc.edit(this.product)
    .subscribe(resp => {
      console.log(resp);});
      this.product = new Product();
}

remove(){
  this.ProductSvc.remove(this.product)
  .subscribe(resp => {
    console.log(resp);});
   this.product = new Product();
}


   
  ngOnInit() {
    this.Vendorsvc.listV().subscribe(resp=> {
      this.vendors = resp.Data
    })
    let ID = this.route.snapshot.params.Id
    this.ProductSvc.get(ID)
    .subscribe(resp =>{
      this.product = resp.Data;})
      
  }
}
