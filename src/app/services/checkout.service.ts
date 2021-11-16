import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ɵangular_packages_core_testing_testing_c } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class checkoutService {

  private apiURL : string='https://jcommerce.herokuapp.com/api/payment'

  constructor(private http: HttpClient) { }

  goCheckOut(data: any): Observable<any>{
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    const product ={
      prodSku:data.sku,
      prodName:data.name,
      unit_price:data.unit_price,
      quantity: 1

    }
    return this.http.post<any>(this.apiURL,product,{headers});

  }
}
