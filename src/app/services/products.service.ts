import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL : string='https://jcommerce.herokuapp.com/product/'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    return this.http.get<Product[]>(this.apiURL,{headers});

  }
  getSingleProduct(id: Number): Observable<Product> {
    return this.http.get<Product>(this.apiURL + id);
  }

  getProductsFromCategory(catName: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL + 'category/' + catName);
  }
  createProduct(prod: any): Observable<Product>{
    const headers={
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    }
    return this.http.post<Product>(this.apiURL,prod,{headers});
  }
  update(prod:Product): Observable<boolean>{

    return this.http.put<boolean>(this.apiURL+ prod.product_id, prod);
  }
  serchByName(name:string):Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL+'name/' + name);
  }
  delete(prodId:number):Observable<any>{  
    console.log(prodId);
    return this.http.delete<any>(this.apiURL + prodId );
  }
}
