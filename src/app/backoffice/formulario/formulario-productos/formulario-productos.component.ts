import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product } from 'src/app/models/product';
import { ProductsComponent } from 'src/app/products/products.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {
  productForm:FormGroup
  categorias:Category[]
  prodId:number;
  titulo: string;

  constructor( private fb:FormBuilder,
    private prodServ:ProductsService,
    private activatedRoute:ActivatedRoute,
    private router:Router,) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      sku: ['',],
      name: ['',],
      category: ['',], 
      quantity: ['',], 
      description: ['',], 
      image: ['',], 
      price: ['',], 
  })

  this.categorias=[
    {category_id: 1,description: "Laptop"},
    {category_id: 2,description: "Celulares"},
    {category_id: 3,description: "Monitores"},
  ]
  this.activatedRoute.params.subscribe(
    params => {
      this.prodId = params['id'];
      if (isNaN(this.prodId)) {
        //no es numerico
      
        return;
      }
      else {
        //es numerico
        var product = this.prodServ.getSingleProduct(this.prodId).subscribe(
          product => {
            this.titulo = "Modificar los datos del Producto: " + product.name ;
            this.productForm.patchValue({
              sku: product.sku,
              name: product.name,
              category: product.category,
              quantity: product.quantity,
              description: product.description,
              image: product.image,
              price: product.price,
            });
          }
        );
      }
    }
  );
}

SaveForm(){
    
  let prodFormulario: Product=Object.assign({},this.productForm.value);
  prodFormulario.product_id = +this.prodId; 

    if(prodFormulario.product_id>0){
      //editamos
      console.log(prodFormulario);
      this.prodServ.update(prodFormulario)
      .subscribe( 
                  ()=> alert("Producto Modificado"),
                  error=> alert(error)
                  
      );
    }
    else{
      //creamos
      prodFormulario.product_id=0;
      this.prodServ.createProduct(prodFormulario)
          .subscribe( 
                  ()=> alert("Producto agregado"),
                  error=> {
                            console.log(error);
                            alert("Error al crear: " + error);
                          }
          );
    }
    this.router.navigate(["/boproductos"])
    
}  
}