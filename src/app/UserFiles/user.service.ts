import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from  './User';
import {JsonResponse} from '../Utility/JsonResponse';
import {Observable} from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import {TransferService} from '../Utility/Transfer.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 // url = "http://localhost:58587/Users/";
 url= this.Tsvc.getServerUrl("Users");

 auth(userName: string, pw: string):Observable<JsonResponse>{
   return this.http.get(this.url+ "logIn/" + userName +"/" + pw ) as Observable<JsonResponse>;
 }
  
  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"list") as Observable<JsonResponse>;
  }
  getuser(id: number): Observable<JsonResponse>{
    return this.http.get(this.url+"find/" + id) as Observable<JsonResponse>;
  }
  create(user: User) :Observable<JsonResponse>{
    return this.http.post(this.url+"create", user) as Observable<JsonResponse>;

  }
  edit(user: User) :Observable<JsonResponse>{
    return this.http.post(this.url+ "/edit", user) as Observable<JsonResponse>;
  }
  remove(user: User) :Observable<JsonResponse>{
    return this.http.post(this.url+ "/Delete/" + user.Id, null) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient, private Tsvc: TransferService) { }
}
