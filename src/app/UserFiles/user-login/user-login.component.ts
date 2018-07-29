import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../Utility/Transfer.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  message: string = "";
  failed: boolean = false;

  auth(): void {
    // clear the logged in user (if exists)
    this.Tsvc.clearLoggedInUser();
    this.usersvc.auth(this.user.UserName, this.user.Password)
      .subscribe(resp => {
        console.log(resp);
        if(resp.Error == "Invalid Username password combination.") {
          console.error( resp.Error);
          this.message = resp.Message;
          this.failed = true;
          return;
        } else {
          this.Tsvc.setLoggedInUser(resp.Data);
          this.router.navigateByUrl('/user/list');
        }
      });
  }

  constructor(
    private usersvc: UserService,
    private Tsvc: TransferService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

}
