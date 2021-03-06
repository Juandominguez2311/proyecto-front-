import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Observable} from "rxjs";
import {CartModel} from "../models/cart";
import { CargarMercadopagoService} from "../services/cargar-mercadopago.service"
import { getLocaleDayNames } from '@angular/common';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  names : string[]
  items : any[]
  cart: CartModel[] = [];
  total: number = 0;
  constructor(public cartService: CartService , private cargarService: CargarMercadopagoService, private productService : ProductsService) {cargarService.Cargar(['mercadopagojs'])
  }

  ngOnInit() {
    this.cartService.cart.subscribe(a => this.cart = a);
    this.getTotal();
    console.log(localStorage.getItem('Cart'))
  }

  getCartProductItems(){
    this.cart = JSON.parse(localStorage.getItem('Cart'));
    this.items = this.cart
  }

  onRemoveProductsFromCart(productId: number){
    this.cart = this.cart.filter(a => a.product_id != productId);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
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
          localStorage.setItem('Cart', JSON.stringify(this.cart));
        }
      });
    } else {
      this.cart.forEach((element, index) => {
        if(element.product_id == productId){
          this.cart[index].quantity = element.quantity - 1;
        }
      });
    }
    //cambie de aca 
    this.cart.forEach((element, index) => {
    this.productService.getSingleProduct(element.product_id)
      .subscribe(p => {
        
        this.cart[index].quantity = element.quantity
      })
      console.log(this.cart)
    })
    
//hasta aca
    this.getTotal();
  }


  getTotal(){
   
    this.cart.forEach((element) => {
      this.total += (element.price*element.quantity);
      localStorage.setItem('total',this.total.toString())
    })
  }
  deleteMethod(productId:number) {
    if(confirm("Esta seguro de eliminar el producto? ")) {
      this.onRemoveProductsFromCart(productId);
    }
  }
  deleteAll(){
    if(confirm("Esta seguro de borrar todos los producto? ")) {
        localStorage.clear()
        window.location.reload();
    }
  }
}
