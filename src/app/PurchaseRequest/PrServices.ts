import {JsonResponse} from '../Utility/JsonResponse';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PR} from './PR';


@Injectable({
    providedIn: 'root'
  })



export class PrServices{
   
    url = "http://localhost:58587/PurchaseRequests/";

    
  
    listV(): Observable<JsonResponse>{
      return this.http.get(this.url+"list") as Observable<JsonResponse>;
    }
    get(id: number): Observable<JsonResponse>{
      return this.http.get(this.url+"find/" + id) as Observable<JsonResponse>;
    }
    create(vendor: PR) :Observable<JsonResponse>{
      return this.http.post(this.url+"create", vendor) as Observable<JsonResponse>;
  
    }
    edit(vendor: PR) :Observable<JsonResponse>{
      return this.http.post(this.url+ "/edit", vendor) as Observable<JsonResponse>;
    }
    remove(vendor: PR) :Observable<JsonResponse>{
      return this.http.post(this.url+ "/Delete/" + vendor.Id, null) as Observable<JsonResponse>;
    }
  
    constructor(private http: HttpClient) { }
}
