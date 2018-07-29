import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { User} from '../User';
import {TransferService} from '../../Utility/Transfer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User;
  loggedInUser: User = null;

  create(){
    this.UserSvc.create(this.user)
    .subscribe(resp => {
      console.log(resp);});
  }

  constructor
  (private UserSvc: UserService,
     private Tsvc: TransferService,
     private router: Router
  
  ) { }

  ngOnInit() {
    this.Tsvc.checkLogin();
    this.loggedInUser= this.Tsvc.getLoggedInUser();
    if(!this.loggedInUser.IsAdmin){
      this.router.navigateByUrl('user/details/' + this.loggedInUser.Id);
    }
  }

}
