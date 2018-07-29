import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from  './Products'
import {JsonResponse} from '../Utility/JsonResponse';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

export class ProductService {
  url = "http://localhost:58587/Products/";
  
  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"list") as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse>{
    return this.http.get(this.url+"find/" + id) as Observable<JsonResponse>;
  }
  create(product: Product) :Observable<JsonResponse>{
    return this.http.post(this.url+"create", product) as Observable<JsonResponse>;

  }
  edit(product: Product) :Observable<JsonResponse>{
    return this.http.post(this.url+ "/edit", product) as Observable<JsonResponse>;
  }
  remove(product: Product) :Observable<JsonResponse>{
    return this.http.post(this.url+ "/Delete/" + product.ID, null) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
