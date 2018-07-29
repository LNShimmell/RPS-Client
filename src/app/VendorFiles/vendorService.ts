import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vendor} from  './Vendor';
import {JsonResponse} from '../Utility/JsonResponse';
import {Observable} from 'rxjs';
import {VendorOrder} from './VendorOrder';



@Injectable({
    providedIn: 'root'
  })

export class VendorService {
  url = "http://localhost:58587/Vendors/";
  
  listV(): Observable<JsonResponse>{
    return this.http.get(this.url+"list") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse>{
    return this.http.get(this.url+"find/" + id) as Observable<JsonResponse>;
  }
  create(vendor: Vendor) :Observable<JsonResponse>{
    return this.http.post(this.url+"create", vendor) as Observable<JsonResponse>;

  }
  edit(vendor: Vendor) :Observable<JsonResponse>{
    return this.http.post(this.url+ "/edit", vendor) as Observable<JsonResponse>;
  }
  remove(vendor: Vendor) :Observable<JsonResponse>{
    return this.http.post(this.url+ "/Delete/" + vendor.Id, null) as Observable<JsonResponse>;
  }
  returnTotal(Id: number) :Observable<JsonResponse>{
    return this.http.get(this.url+ "MakeVendorRequest/" + Id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
