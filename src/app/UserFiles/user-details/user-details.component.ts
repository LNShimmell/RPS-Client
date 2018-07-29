import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {User} from '../User';
import {FormsModule} from '@angular/forms';
import {TransferService} from '../../Utility/Transfer.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User= new User();
  loggedInUser: User = null;

  constructor(private UserSvc: UserService, private route: ActivatedRoute, private Tsvc: TransferService) { }
  displaydeletebtn: boolean = false;
  displaydelete(){
  this.displaydeletebtn=!this.displaydeletebtn;
  }
  edit(){
    this.UserSvc.edit(this.user)
    .subscribe(resp => {
      console.log(resp);});
}

remove(){
  this.UserSvc.remove(this.user)
  .subscribe(resp => {
    console.log(resp);});
   this.user = new User;
}
   
  ngOnInit() {
    this.Tsvc.checkLogin();
    this.loggedInUser= this.Tsvc.getLoggedInUser();
    let Id = this.route.snapshot.params.Id
    this.UserSvc.getuser(Id)
    .subscribe(resp =>{
      this.user = resp.Data;})
  }
}