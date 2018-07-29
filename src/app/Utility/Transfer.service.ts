import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../UserFiles/User';

const Url: string = 'http://localhost:58587';

@Injectable({
    providedIn: 'root'
  })

  export class TransferService {
    loggedInUser: User = null;

    getLoggedInUser(): User {
      if(this.isLoggedIn())
        return this.loggedInUser;
      return null;
    }
    getLoggedInUserId(): number {
      if(!this.isLoggedIn()) {
        return 0;
      }
      return this.getLoggedInUser().Id;
    }
    getLoggedInUserName(): string {
      if(this.isLoggedIn())
        return this.loggedInUser.Fname + " " + this.loggedInUser.Lname;
      return "Login";
    }
    isLoggedIn(): boolean {
      console.log("Is a user logged in?", (this.loggedInUser == null) ? "No" : "Yes");
      return this.loggedInUser != null;
    }
    setLoggedInUser(user: User): void {
      console.log("Set logged in user to", user);
      this.loggedInUser = user;
    }
    clearLoggedInUser(): void {
      console.log("Clear logged in user.");
      this.loggedInUser = null;
    }
    checkLogin(): void {
      if(!this.isLoggedIn()) {
        this.router.navigateByUrl("/user/login");
      }
  
    }
  
    getServerUrl(controller: string): string {
      return Url + '/' + controller + '/';
    }
  
    constructor(private router: Router) { 
      console.log("System service init: server url is", Url);
    }
  }