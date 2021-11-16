import { Component, OnInit,Input} from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-crudproductos',
  templateUrl: './crudproductos.component.html',
  styleUrls: ['./crudproductos.component.css']
})
export class CrudproductosComponent implements OnInit {

  public ProductList: Product[] = []
  public Product: Product
  public campobuscado: string;
  @Input() itemProduct:Product;
  constructor(private servProd: ProductsService) { }
 
 

   
  ngOnInit() {
    this.CargarListado();
  }
  CargarListado() {
    this.servProd.getAll()
    .subscribe(
      data => {
        this.ProductList = data;
        console.log(localStorage.getItem('token'))
      })
  }

  
  
  deleteProduct(id:number){
    console.log(id)
    this.servProd.delete(id)
    .subscribe(
      ()=> this.CargarListado(),
      error=> alert(error),
      ()=>  console.log("borro el producto"),
    );
  }
  serchByName(campobuscado) {
      
    if(this.campobuscado != null && this.campobuscado != "" ){
      this.servProd.serchByName(this.campobuscado).subscribe(
        data => {
          
          this.ProductList = data
        },
        err => console.log(err)
      );
    }else{
      this.CargarListado()
    }
  }
}
