import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Observable} from "rxjs";
import {CartModel} from "../../models/cart";
import { CargarMercadopagoService} from "../../services/cargar-mercadopago.service"
import { getLocaleDayNames, getLocaleMonthNames } from '@angular/common';

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
    localStorage.clear()
  }
}
