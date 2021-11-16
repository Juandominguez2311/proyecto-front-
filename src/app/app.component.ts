import { Component ,OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductsService]
})
export class AppComponent implements OnInit {
  mercadoPagoVersion: any;
  title = 'app';
 
 
   
  constructor(private window: Window) {}

  ngOnInit() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js";
    document.body.appendChild(script);
    setTimeout(() => {
      this.mercadoPagoVersion = this.window["Mercadopago"].version;
    }, 1000);
  }
}
