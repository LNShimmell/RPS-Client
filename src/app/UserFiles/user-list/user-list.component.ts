import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginator, MatSort } from '@angular/material';
import {SortPipe} from '../../Utility/sort.pipe';
import {TransferService} from '../../Utility/Transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User = new User();
  users: User[] = [];
  loggedInUser : User = null;

  sortProperty: string = "Lastname";
  sortOrder: string = "asc";

  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }
  
  toDetails(): void{
    this.router.navigateByUrl('/user/details/' + this.loggedInUser.Id);
  }
  
    // list(): void{
    //   this.UserSvc.list()
    //     .subscribe(resp => {
    //       console.log(resp);
    //     });
    // }
    
    constructor
    (
      private UserSvc: UserService,
      private TSvc: TransferService,
      private router: Router
    )
     { }
  
    ngOnInit() {
      this.TSvc.checkLogin();
      this.loggedInUser= this.TSvc.getLoggedInUser();
      if(this.loggedInUser.IsAdmin || this.loggedInUser.IsReviewer){
        this.UserSvc.list().subscribe(resp=> {
          this.users = resp.Data
        });
      }else{
        this.toDetails();
    }
}

}

