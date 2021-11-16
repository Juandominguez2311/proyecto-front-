import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgxMercadopagoModule} from 'ngx-mercadopago'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProductsComponent } from './products/products.component';
import { ObjToArrayPipe } from './products/objToArray.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CrudproductosComponent } from './backoffice/crudproductos/crudproductos.component';
import { FormularioProductosComponent } from './backoffice/formulario/formulario-productos/formulario-productos.component';
import { CardsComponent } from './products/cards/cards.component';
import { CargarScriptsService} from './services/cargar-scripts.service';
import { LoginComponent } from './login/login.component'
import {AuthenticationGuard} from './authentication.guard'
import {AuthService} from './services/auth.service';
import { SuccessComponent } from './feedback/success/success.component';
import { FailureComponent } from './feedback/failure/failure.component';
import { ConfirmComponent } from './products/cards/confirm/confirm.component'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductsComponent,
    ObjToArrayPipe,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    CrudproductosComponent,
    FormularioProductosComponent,
    CardsComponent,
    LoginComponent,
    SuccessComponent,
    FailureComponent,
    ConfirmComponent,
   
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMercadopagoModule.forRoot({
      publishKey: 'TEST-a82c7392-8732-4670-abdf-f1e37a2d442c',
      pathSDK: 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'productos', component:ProductsComponent},
      { path: 'productos/laptops', component:ProductsComponent},
      { path: 'productos/celulares', component:ProductsComponent},
      { path: 'productos/tvs', component:ProductsComponent},
      { path: 'productos-cards/:id', component: CardsComponent},
      { path: 'cart',component:CartComponent},
      { path: 'checkout',component:CheckoutComponent},
      { path: 'boproductos',component:CrudproductosComponent,canActivate:[AuthenticationGuard]},
      { path: 'producto-editar/:id',component:FormularioProductosComponent},
      { path: 'producto-nuevo',component:FormularioProductosComponent},
      { path: 'login',component:LoginComponent},
      { path: 'comprar-producto', component:ConfirmComponent},
      { path: 'payment/feedback/success', component:SuccessComponent},
      { path: 'payment/feedback/failure', component:SuccessComponent}
    ])
  ],
  providers: [{provide: Window, useValue: window},AuthenticationGuard,AuthService,CargarScriptsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
