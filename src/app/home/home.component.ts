import { Component, OnInit,Input} from '@angular/core';
import { Category, Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ProductList: Product[] = []
  public Product: Product
  public campobuscado: string;
  public prodComponent: ProductsComponent;
  @Input() itemProduct:Product;
  constructor(private servProd: ProductsService) { }
 
 

   
  ngOnInit() {
 
  }
  
    
}
