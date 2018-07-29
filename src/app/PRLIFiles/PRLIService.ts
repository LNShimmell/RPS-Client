import {JsonResponse} from '../Utility/JsonResponse';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PRLI} from './PRLI';


@Injectable({
    providedIn: 'root'
  })

export class PRLIService{
url = "http://localhost:58587/PurchaseRequestLineItems/";

listOne(id: number): Observable<JsonResponse>{
  return this.http.get(this.url+"listone/" + id) as Observable<JsonResponse>;
}
  
listV(): Observable<JsonResponse>{
  return this.http.get(this.url+"list") as Observable<JsonResponse>;
}
get(id: number): Observable<JsonResponse>{
  return this.http.get(this.url+"find/" + id) as Observable<JsonResponse>;
}
create(prli: PRLI) :Observable<JsonResponse>{
  return this.http.post(this.url+"create", prli) as Observable<JsonResponse>;

}
edit(vendor: PRLI) :Observable<JsonResponse>{
  return this.http.post(this.url+ "/edit", vendor) as Observable<JsonResponse>;
}
remove(vendor: PRLI) :Observable<JsonResponse>{
  return this.http.post(this.url+ "/Delete/" + vendor.Id, null) as Observable<JsonResponse>;
}

constructor(private http: HttpClient) { }
}
