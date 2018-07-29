import { Component, OnInit } from '@angular/core';
import {ProductService} from '../ProductService';
import {Product} from '../Products';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginator, MatSort } from '@angular/material';
import {SortPipe} from '../../Utility/sort.pipe';
import {TransferService} from '../../Utility/Transfer.service';
import {User} from '../../UserFiles/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product = new Product();
  products: Product[] = [];
  loggedInUser: User = null;

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
  
  
    list(): void{
      this.ProductSvc.list()
        .subscribe(resp => {
          console.log(resp);
        });
    }
    
    constructor(private ProductSvc: ProductService, private Tsvc: TransferService, private router: Router) { }
  
    ngOnInit() {
      this.Tsvc.checkLogin();
      this.loggedInUser= this.Tsvc.getLoggedInUser();
      if(this.loggedInUser==null){ this.router.navigateByUrl('user/login')};
      this.ProductSvc.list().subscribe(resp=> {
        this.products = resp.Data});
      
    }
}


