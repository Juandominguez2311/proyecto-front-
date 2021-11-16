import {Injectable} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {BehaviorSubject, Observable} from "rxjs";
import {CartModel} from "../models/cart";
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {NavigationExtras, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})


export class CartService {

  
  

  private message = new BehaviorSubject('default');
  currentMessage = this.message.asObservable();
  private ItemCount = new BehaviorSubject(0);
  count: Observable<number> = this.ItemCount.asObservable();
  private shoppingCart = new BehaviorSubject([]);
  cart = this.shoppingCart.asObservable();
  constructor() { 
    let isEmptyCart: boolean = localStorage.getItem('Cart') == null;
    this.updateCartItemCount(isEmptyCart ? 0 : JSON.parse(localStorage.getItem('Cart')).length);
    this.updateShoppingCart(isEmptyCart ? [] :JSON.parse(localStorage.getItem('Cart')));
  }

  changeMessage(message: string) {
    this.message.next(message);
  }

  updateCartItemCount(count: number){
    this.ItemCount.next(count);
  }

  updateShoppingCart(cartItems: CartModel[]){
    this.shoppingCart.next(cartItems);
  }

}