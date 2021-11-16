import { Component, OnInit } from '@angular/core';
import {CartModel} from "../models/cart";
import {CartService} from "../services/cart.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: CartModel[] = [];
  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartService.cart.subscribe(a => this.cart = a);
  }

}
