import { Component, OnInit } from '@angular/core';
import {PRLI} from '../PRLI';
import {User} from '../../UserFiles/User';
import {UserService} from '../../UserFiles/user.service'
import {Product} from '../../ProductFiles/Products';
import {ProductService} from '../../ProductFiles/ProductService';
import {PRLIService} from '../PRLIService';
import {PR} from '../../PurchaseRequest/PR';
import {PrServices} from '../../PurchaseRequest/PrServices';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PRLICreateComponent implements OnInit {
  prli: PRLI = new PRLI();
  users: User[] = [];
  pRequests: PR[] = [];
  products: Product[] = [];

  

  constructor(
  private UserSvc: UserService,
  private PrliSvc: PRLIService,
  private ProductSvc: ProductService,
  private PRsvc: PrServices
  ) { }

  create(){
    console.log(this.prli);
    this.PrliSvc.create(this.prli)
    .subscribe(resp => {
      console.log(resp);});
      this.prli = new PRLI();

  }

  ngOnInit() {
    this.UserSvc.list().subscribe(resp=> {
      this.users = resp.Data
    });
    this.ProductSvc.list().subscribe(resp =>{
      this.products = resp.Data
    });
    this.PRsvc.listV().subscribe(resp =>{
      this.pRequests = resp.Data
    });


  }

}
