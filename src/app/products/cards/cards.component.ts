import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductsService} from "src/app/services/products.service";
import { Product } from 'src/app/models/product';
import {CartModel} from '../../models/cart'
import {checkoutService} from '../../services/checkout.service'
import { get } from 'scriptjs';
import {AppComponent} from '../../app.component'
import {map} from "rxjs/operators";
import { CargarMercadopagoService} from "../../services/cargar-mercadopago.service"
import {CartService} from '../../services/cart.service'
import { ToastrService  } from 'ngx-toastr';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  id: Number;
  product : CartModel;
  alert:boolean = false;

  public preference : any;
  constructor(private route: ActivatedRoute,
    private productService: ProductsService, 
    private checkoutService: checkoutService,
    private cargarService: CargarMercadopagoService, 
    private cartService : CartService,
     ) {

       cargarService.Cargar(['mercadopagojsSingleproduct'])
      }

    searchKey:string = "";
    init_point: any;


  ngOnInit(): void {
    
          this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.productService.getSingleProduct(this.id).subscribe(prod => {
        this.product = prod;
        this.preference = prod;
      });
  
    })
    this.buySingleProduct()
  }
  
  addToCart(){
      let product: CartModel;
      this.productService.getSingleProduct(this.id)
      .subscribe(p => {
        product = p as CartModel;
        product.quantity = 1
        let cart: CartModel[] = JSON.parse(localStorage.getItem('Cart'));
        if(cart == null){
          cart = [];
          cart.push(product);
        } else{
          let currentProduct = cart.filter(a => a.product_id == product.product_id);
          if(currentProduct.length > 0){
            cart.filter(a => {
              a.quantity = a.quantity 
            });
          } else{
            cart.push(product);
          }
        }
        this.cartService.updateCartItemCount(cart.length);
        this.cartService.updateShoppingCart(cart);
        localStorage.setItem('Cart', JSON.stringify(cart));
        this.alert= true
      });
      
  }
  buySingleProduct(){
    let product: CartModel;
      this.productService.getSingleProduct(this.id)
      .subscribe(p => {
        product = p as CartModel;
        product.quantity = 1
        let cart: CartModel[] = JSON.parse(localStorage.getItem('Cart'));
        if(cart == null){
          cart = [];
          cart.push(product);
        } else{
          let currentProduct = cart.filter(a => a.product_id == product.product_id);
          if(currentProduct.length > 0){
            cart.filter(a => {
              a.quantity = a.quantity 
            });
          } else{
            cart.push(product);
          }
        }
        this.cartService.updateCartItemCount(cart.length);
        this.cartService.updateShoppingCart(cart);
        localStorage.setItem('Cart', JSON.stringify(cart));
        console.log(localStorage.getItem('Cart'))
      })
  }
}
