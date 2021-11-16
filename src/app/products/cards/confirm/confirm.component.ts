import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";
import {CartModel} from "../../../models/cart";
import { CargarMercadopagoService} from "../../../services/cargar-mercadopago.service"
import { getLocaleDayNames } from '@angular/common';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

names : string[]
  items : any[]
  cart: CartModel[] = [];
  total: number = 0;
  constructor(public cartService: CartService , private cargarService: CargarMercadopagoService) {cargarService.Cargar(['mercadopagojsSingleproduct'])
  }

  ngOnInit() {
 
    this.cartService.cart.subscribe(a => this.cart = a);
    this.getTotal();
    console.log(localStorage.getItem('Compra'))
  }

  getCartProductItems(){
    this.cart = JSON.parse(localStorage.getItem('Compra'));
    this.items = this.cart
  }

  onRemoveProductsFromCart(productId: number){
    this.cart = this.cart.filter(a => a.product_id != productId);
    localStorage.setItem('Compra', JSON.stringify(this.cart));
    this.cartService.updateCartItemCount(this.cart.length);
    this.cartService.updateShoppingCart(this.cart);
    this.total = 0;
    this.getTotal();
  }

  onUpdateQuantity(type, productId){
    this.total = 0;
    if(type == 1){
      this.cart.forEach((element, index) => {
        if(element.product_id == productId){
          this.cart[index].quantity = element.quantity + 1;
        }
      });
    } else {
      this.cart.forEach((element, index) => {
        if(element.product_id == productId){
          this.cart[index].quantity = element.quantity - 1;
        }
      });
    }
    this.getTotal();
  }

  getTotal(){
   
    this.cart.forEach((element) => {
      this.total += (element.price*element.quantity);
    })
  }
  deleteMethod(productId:number) {
    if(confirm("Esta seguro de sacar el producto? ")) {
      this.onRemoveProductsFromCart(productId);
    }
  }
}
