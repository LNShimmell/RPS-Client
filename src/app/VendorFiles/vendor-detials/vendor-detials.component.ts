import { Component, OnInit } from '@angular/core';
import { Vendor } from '../Vendor';
import {VendorService} from '../vendorService';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {VendorOrder} from '../VendorOrder';
import {PRLI} from '../../PRLIFiles/PRLI';

@Component({
  selector: 'app-vendor-detials',
  templateUrl: './vendor-detials.component.html',
  styleUrls: ['./vendor-detials.component.css']
})
export class VendorDetialsComponent implements OnInit {

  vendor: Vendor= new Vendor();
  StateCodes: string[] = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 
                           'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 
                           'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 
                           'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 
                           'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 
                           'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
  vendorOrder: VendorOrder = new VendorOrder();
  venProducts: PRLI[] =[]
  names: string[] =[];
  quants: number[] = [];
  costs: number [] = [];
  array = [];
  total: number= 0;
  object: object = null;
 

  constructor(private VendorSvc: VendorService, private route: ActivatedRoute) { }
  displaydeletebtn: boolean = false;
  displaydelete(){
  this.displaydeletebtn=!this.displaydeletebtn;
  }
  edit(){
    this.VendorSvc.edit(this.vendor)
    .subscribe(resp => {
      console.log(resp);});
  }

  solve(){
    let index: number =0;
    let quant: number = 0;
    for(var product of this.venProducts){
        quant += product.Quantity
    }
  }

remove(){
  this.VendorSvc.remove(this.vendor)
  .subscribe(resp => {
    console.log(resp);});
   this.vendor = new Vendor;
  }
   
  ngOnInit() {
    let Id = this.route.snapshot.params.Id
    this.VendorSvc.get(Id)
    .subscribe(resp =>{
      this.vendor = resp.Data;});
    this.VendorSvc.returnTotal(Id)
    .subscribe(response =>{
      this.vendorOrder = response.Data;
      this.venProducts = this.vendorOrder.Prlis;
      this.total = this.vendorOrder.Total;
      this.names = this.vendorOrder.productName;
      this.quants = this.vendorOrder.Quant;
      this.costs = this.vendorOrder.Cost;
      for(let idx=0; idx<this.names.length; idx++){
          let object = {
            name:this.names[idx],
            quant:this.quants[idx],
            cost:this.costs[idx]
          }
          this.array.push(object);
      }
      console.log(this.array)
      this.VendorSvc.returnVendorOrder(Id)
      .subscribe(respon =>{
        this.object
        console.log(this.object);
      })
      // console.log(this.vendorOrder);
      // console.log(this.venProducts)
      // console.log(this.names)
      // console.log(this.quants)
      // console.log(this.costs)
    })
  }
}