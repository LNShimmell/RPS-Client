import { Component, OnInit } from '@angular/core';
import {PR} from '../PR';
import {PrServices} from '../PrServices';
import {User} from '../../UserFiles/User';
import {UserService} from '../../UserFiles/user.service';


@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PRCreateComponent implements OnInit {

  pr : PR = new PR();

  users: User[] = [];

  constructor(
    private UserSvc: UserService,
    private PrSvc: PrServices,
  ) { }
  // create(){
  //   this.Productsvc.create(this.product)
  //   .subscribe(resp => {
  //     console.log(resp);});
  //     this.product = new Product();
  // }
  create(){
    this.PrSvc.create(this.pr)
    .subscribe(resp => {
      console.log(resp);
    });
    this.pr = new PR();
  }


  ngOnInit() {
    this.UserSvc.list().subscribe(resp=> {
      this.users = resp.Data
    });
  }

}
