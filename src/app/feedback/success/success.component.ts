import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Observable} from "rxjs";
import {CartModel} from "../../models/cart";
import { CargarMercadopagoService} from "../../services/cargar-mercadopago.service"
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  names : string[]
  items : any[]
  cart: CartModel[] = [];
  total: number = 0;
  constructor(public cartService: CartService , private cargarService: CargarMercadopagoService) {cargarService.Cargar(['mercadopagojs'])
  }

  ngOnInit() {
    this.cartService.cart.subscribe(a => this.cart = a);
    this.getTotal();
    console.log(localStorage.getItem('Cart'))
  }

  getCartProductItems(){
    this.cart = JSON.parse(localStorage.getItem('Cart'));
    if(this.cart.length <=0){
      this.cart = JSON.parse(localStorage.getItem('Compra'))
    }
    this.items = this.cart
  }

  getTotal(){
    this.total = parseInt(localStorage.getItem('total'))
  }

}
