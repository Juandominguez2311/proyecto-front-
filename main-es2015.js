(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet>\r\n\r\n</router-outlet>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/backoffice/crudproductos/crudproductos.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backoffice/crudproductos/crudproductos.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"ProductList\">Listado de Productos</p>\n<p *ngIf=\"!(ProductList)\">No hay Productos cargados</p>\n<div class=\"row\">\n    <input class=\"form-control\" [(ngModel)]=\"campobuscado\" name=\"campobuscado\">\n    <button class=\"search-btn btn-danger\" (click)=\"serchByName(campobuscado)\">Buscar</button>\n    <button class=\"btn btn-primary\" [routerLink]='[\"/producto-nuevo/\"]'>Crear</button>\n    <button class=\"btn btn-warning\" (click)=\"CargarListado() \">Mostrar todos </button>\n</div>\n<table class=\"table table-stripe\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th>SKU </th>\n            <th>NOMBRE </th>\n            <th>Categoria </th>\n            <th>Cantidad de productos </th>\n            <th>Precio </th>\n            <th></th>\n            <th></th>\n        </tr>\n    </thead>\n    <tr *ngFor=\"let product of ProductList\">\n        <td>{{product.sku}}</td>\n        <td>{{product.name}}</td>\n        <td>{{product.category}}</td>\n        <td>{{product.quantity}}</td>\n        <td>{{product.price}}</td>\n        <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteProduct(product.product_id)\">Borrar</button>\n        </td>\n        <td>\n            <button class=\"btn btn-primary\" [routerLink]='[\"/producto-editar/\" + product.product_id]'>Editar</button>\n        </td>\n    </tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<H1> {{titulo}}</H1>\r\n<form [formGroup]=\"productForm\" (ngSubmit)=\"SaveForm()\" class=\"form-horizontal\">\r\n    <fieldset>\r\n        <div class=\"form-group\">\r\n            <label for=\"sku\" class=\"col-md-2-control-label\">SKU</label>\r\n            <div class=\"col-md-8\">\r\n\r\n                <input class=\"form-control\" id=\"sku\" type=\"text\" formControlName=\"sku\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\" class=\"col-md-2-control-label\">Nombre</label>\r\n            <div class=\"col-md-8\">\r\n\r\n                <input class=\"form-control\" id=\"name\" type=\"text\" formControlName=\"name\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"category\" class=\"col-md-2-control-label\">Categoria</label>\r\n            <div class=\"col-md-8\">\r\n\r\n                <input class=\"form-control\" id=\"category\" type=\"number\" formControlName=\"category\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"quantity\" class=\"col-md-2-control-label\">Cantidad de unidades</label>\r\n            <div class=\"col-md-8\">\r\n\r\n                <input class=\"form-control\" id=\"quantity\" type=\"number\" formControlName=\"quantity\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"description\" class=\"col-md-2-control-label\">Descripcion</label>\r\n            <div class=\"col-md-8\">\r\n\r\n                <input class=\"form-control\" id=\"description\" type=\"text\" formControlName=\"description\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"image\" class=\"col-md-2-control-label\">Imagen</label>\r\n            <div class=\"col-md-8\">\r\n\r\n                <input class=\"form-control\" id=\"image\" type=\"text\" formControlName=\"image\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"price\" class=\"col-md-2-control-label\">Precio</label>\r\n            <div class=\"col-md-8\">\r\n\r\n                <input class=\"form-control\" id=\"price\" type=\"number\" formControlName=\"price\" />\r\n            </div>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-danger\">Guardar</button>\r\n        <button class=\"btn btn-primary\" [routerLink]='[\"/boproductos\"]'>vovler</button>\r\n    </fieldset>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pb-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row\" *ngIf=\"cart.length > 0\">\r\n            <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\r\n\r\n                <div class=\"card shopping-cart\">\r\n\r\n                    <div class=\"card-body\">\r\n                        <!-- PRODUCT -->\r\n                        <div class=\"row\" *ngFor=\"let product of cart\">\r\n                            <div class=\"col-12 col-sm-12 col-md-2 text-center\">\r\n                                <img class=\"img-responsive\" [src]=\"product?.image\" height=\"80\">\r\n                            </div>\r\n                            <div class=\"col-12 text-sm-center col-sm-12 text-md-left col-md-5\">\r\n                                <h2 class=\"product-name\" id=\"name\">{{product?.name}}</h2>\r\n                                <p class=\"product-sku\" id=\"sku\" style=\"visibility: hidden\">SKU: {{product?.sku}}</p>\r\n                            </div>\r\n                            <div class=\"col-12 col-sm-12 text-sm-center col-md-4 text-md-right row\">\r\n                                <div class=\"col-3 col-sm-3 col-md-6 text-md-right\" style=\"padding-top: 5px\">\r\n                                    <div class=\"price-wrap\">\r\n                                        <table>\r\n                                            <tr>\r\n                                                <var class=\"price\">{{(product.price * product.quantity)}}</var>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <small class=\"text-muted\">({{product.price}} x producto)</small>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-4 col-sm-4 col-md-4\">\r\n                                    <div class=\"quantity\">\r\n                                        <table>\r\n                                            <tr>\r\n                                                <td><input type=\"button\" value=\"+\" class=\"plus\" (click)=\"onUpdateQuantity(1,  product.product_id)\"></td>\r\n                                                <td><input type=\"number\" id=\"quantity\" step=\"1\" max=\"99\" min=\"1\" [value]=\"product?.quantity\" title=\"Qty\" class=\"qty\" size=\"4\"></td>\r\n                                                <td><input type=\"button\" value=\"-\" class=\"minus\" [disabled]=\"product.quantity == 1\" (click)=\"onUpdateQuantity(0, product.product_id)\"></td>\r\n                                                <td><button type=\"button\" class=\"btn btn-outline-danger btn-xs\" (click)=\"deleteMethod(product.product_id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </button></td>\r\n                                            </tr>\r\n                                        </table>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <!-- END PRODUCT -->\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n\r\n                        <div class=\"float-right\" style=\"margin: 10px\">\r\n\r\n                            <div class=\"float-left\" id=\"price\" value=\"total?\" style=\"margin: 17px\">\r\n                                Total price: <span id=\"unit-price\">{{total}}</span>\r\n                            </div>\r\n                            <div class=\"float-left\" style=\"margin: 17px\">\r\n                                <span style=\"visibility: hidden\" id=\"name\">Jcommerce</span>\r\n                            </div>\r\n                            <button type=\"button\" class=\"mercadopago-button btn btn-primary btn-sm btn-block\" id=\"mercadopago-button\">\r\n                                COMPRAR\r\n                               </button>\r\n                            <a class=\"btn btn-warning btn-sm btn-block\" [routerLink]=\"['/productos']\" role=\"button\">Seguir Comprando</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"cart.length == 0\">\r\n            <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\r\n                <div class=\"jumbotron text-xs-center\">\r\n                    <h1 class=\"display-3\">Todavia no tiene productos</h1>\r\n                    <hr>\r\n                    <p class=\"lead\">\r\n                        <a class=\"btn btn-warning btn-lg btn-block\" [routerLink]=\"['/productos']\" role=\"button\">Nuestros Productos</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>checkout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/failure/failure.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/failure/failure.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Su compra no se pudo completar</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/success/success.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/success/success.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"jumbotron text-center\">\r\n                <h1 class=\"display-3\">Muchas Gracias por su Compra!</h1>\r\n            </div>\r\n\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Imagen</th>\r\n                        <th>Nombre</th>\r\n                        <th>Precio</th>\r\n                        <th>Cantidad</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let p of cart\">\r\n                        <td>\r\n                            <img [src]=\"p.image\" alt=\"{{p.title}}\" class=\"img-thumbnail\" width=\"100px\">\r\n                        </td>\r\n                        <td>{{p.name}}</td>\r\n                        <td>{{p.price | currency:'USD'}}</td>\r\n                        <td>{{p.quantity}}</td>\r\n                    </tr>\r\n\r\n                    <tr class=\"border-0\">\r\n                        <td style=\"border: none;\"></td>\r\n                        <td></td>\r\n                        <td>TOTAL</td>\r\n                        <td>{{total | currency:'USD'}}</td>\r\n\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- FOOTER -->\n<footer id=\"footer\">\n    <!-- top footer -->\n    <div class=\"section\">\n        <!-- container -->\n        <div class=\"container\">\n            <!-- row -->\n            <div class=\"row\">\n                <div class=\"col-md-3 col-xs-6\">\n                    <div class=\"footer\">\n                        <h3 class=\"footer-title\">Nosotros</h3>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-xs-6\">\n                    <div class=\"footer\">\n                        <h3 class=\"footer-title\">Contacto</h3>\n                        <ul class=\"footer-links\">\n                            <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i>Lavalle 648</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-phone\"></i>0810-222-8148</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>juan.ignacio.dominguez@istea.com.ar</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!-- /row -->\n        </div>\n        <!-- /container -->\n    </div>\n    <!-- /top footer -->\n\n</footer>\n<!-- /FOOTER -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- HEADER -->\n<header>\n    <!-- TOP HEADER -->\n    <div id=\"top-header\">\n        <div class=\"container\">\n            <!--<img src=\"../../assets/img/JCommerceChico.png\" width=\"400px\" height=\"150px\" >-->\n            <ul class=\"header-links pull-left\">\n                <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i>Lavalle 648</a></li>\n                <li><a href=\"#\"><i class=\"fa fa-phone\"></i>0810-222-8148</a></li>\n                <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>juan.ignacio.dominguez@istea.com.ar</a></li>\n                <li><a href=\"http://localhost:4200/\">JCommerce</a></li>\n\n            </ul>\n\n            <ul class=\"header-links pull-right\">\n                <li><span class=\"badge rounded-pill badge-notification bg-danger ms-2\" *ngIf=\"cart.length > 0\">{{cart.length}}</span><a href=\"http://localhost:4200/cart\"><i class=\"fa fa-shopping-cart\"></i> Carrito</a></li>\n                <li><a href=\"http://localhost:4200/login\"><i class=\"fa fa-user-o\"></i> Ingresar</a></li>\n            </ul>\n        </div>\n    </div>\n    <!-- /TOP HEADER -->\n\n    <!-- MAIN HEADER -->\n    <div id=\"header\">\n        <!-- container -->\n        <div class=\"container\">\n            <!-- row -->\n            <div class=\"row\">\n            </div>\n            <!-- row -->\n        </div>\n        <!-- container -->\n    </div>\n    <!-- /MAIN HEADER -->\n</header>\n<!-- /HEADER -->\n\n<!-- NAVIGATION -->\n<nav id=\"navigation\">\n    <!-- container -->\n    <div class=\"container\">\n        <!-- responsive-nav -->\n        <div id=\"responsive-nav\">\n            <!-- NAV -->\n\n            <!-- /NAV -->\n        </div>\n        <!-- /responsive-nav -->\n    </div>\n    <!-- /container -->\n</nav>\n<!-- /NAVIGATION -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- SECTION -->\r\n<div class=\"section\">\r\n    <!-- container -->\r\n    <div class=\"container\">\r\n        <!-- row -->\r\n\r\n        <div class=\"row\" #options>\r\n            <!-- shop -->\r\n\r\n            <div class=\"col-md-4 col-xs-6\">\r\n\r\n                <div class=\"shop\">\r\n                    <div class=\"shop-img\">\r\n                        <img src=\"https://images.fravega.com/f300/c5b71e73eb05f01c66ff3ecd20e85332.jpg.webp\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"shop-body\">\r\n                        <h3>Televisores<br></h3>\r\n                        <a [routerLink]='[\"/productos/tvs\"]' onclick=\" getByCategoryHome(option.value)\" value=\"1\" class=\"cta-btn\">Comprar ahora <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- shop -->\r\n            <div class=\"col-md-4 col-xs-6\">\r\n                <div class=\"shop\">\r\n                    <div class=\"shop-img\">\r\n                        <img src=\"https://images.fravega.com/f300/ab427d006591e6e75c8d97bc64652b0a.jpg.webp\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"shop-body\">\r\n                        <h3>Laptops<br></h3>\r\n                        <a href=\"http://localhost:4200/productos/laptops\" value=\"2\" class=\"cta-btn\">Comprar ahora <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /shop -->\r\n\r\n            <!-- shop -->\r\n            <div class=\"col-md-4 col-xs-6\">\r\n                <div class=\"shop\">\r\n                    <div class=\"shop-img\">\r\n                        <img src=\"https://images.fravega.com/f300/71e01c52132c7a11f3e76f2af27ca91e.jpg.webp\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"shop-body\">\r\n                        <h3>Celulares<br></h3>\r\n                        <a href=\"http://localhost:4200/productos/celulares\" value=\"3\" class=\"cta-btn\">Comprar ahora <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /shop -->\r\n\r\n\r\n            <!-- /shop -->\r\n        </div>\r\n        <!-- /row -->\r\n    </div>\r\n    <!-- /container -->\r\n</div>\r\n<!-- /SECTION -->\r\n\r\n\r\n<!-- NEWSLETTER -->\r\n<div id=\"newsletter\" class=\"section\">\r\n    <!-- container -->\r\n    <div class=\"container\">\r\n        <!-- row -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"newsletter\">\r\n                    <p>Registrese ahora para la <strong>NEWSLETTER</strong></p>\r\n                    <form>\r\n                        <input class=\"input\" type=\"email\" placeholder=\"Ingrese su email\">\r\n                        <button class=\"newsletter-btn\"><i class=\"fa fa-envelope\"></i> Suscribirse</button>\r\n                    </form>\r\n                    <ul class=\"newsletter-follow\">\r\n                        <li>\r\n                            <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\"><i class=\"fa fa-instagram\"></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\"><i class=\"fa fa-pinterest\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /row -->\r\n    </div>\r\n    <!-- /container -->\r\n</div>\r\n<!-- /NEWSLETTER -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <div id=\"LoginScreen\">\n            <button id=\"login\" (click)=\"onLoginGoogle()\">Login with Google</button>\n        </div>\n        <div id=\"boproductos\">\n            <button class=\"btn btn-primary\" [routerLink]='[\"/boproductos\"]'>Ir al Back Office</button>\n        </div>\n\n        <div id=\"dashboard\">\n            <div id=\"userDetails\"></div>\n            <button id=\"logout\">Logout</button>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">ProyectoFinalFront</a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\" [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex justify-content-end\" [ngClass]=\"{ show: isExpanded }\">\r\n                <ul class=\"navbar-nav flex-grow\">\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/productos']\">Productos</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/cards/cards.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/cards/cards.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"alert\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n    <strong>Producto {{product?.name}} </strong> agregado al carrito.\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"body\">\n\n    <div class=\"col-md-5 col-md-push-2\">\n        <div id=\"product-main-img\">\n            <div class=\"product-preview\">\n                <img class=\"imagen\" [src]=\"product?.image\" alt=\"\">\n            </div>\n        </div>\n    </div>\n    <!-- /Product main img -->\n    <!-- Product details -->\n    <div class=\"col-md-5\">\n        <div class=\"product-details\">\n            <h2 class=\"product-name\" id=\"name\">{{product?.name}}</h2>\n            <div>\n                <div class=\"product-rating\">\n                    <i class=\"fa fa-star\"></i>\n                    <i class=\"fa fa-star\"></i>\n                    <i class=\"fa fa-star\"></i>\n                    <i class=\"fa fa-star\"></i>\n                    <i class=\"fa fa-star-o\"></i>\n                </div>\n                <a class=\"review-link\" href=\"#\">10 Reseñas(s)</a>\n            </div>\n            <div>\n                <b>Precio:</b> $ <span id=\"unit-price\">{{product?.price}}</span>\n                <span class=\"product-available\" id=\"qt\" *ngIf=\"(product?.quantity > 0)\">Hay Stock</span>\n                <span class=\"product-available\" *ngIf=\"!(product?.quantity > 0) \">No hay Stock</span>\n            </div>\n            <p>{{product?.description}}</p>\n            <p class=\"product-sku\" style=\"visibility: hidden;\" id=\"sku\">SKU: {{product?.sku}}</p>\n            <input type=\"number\" id=\"quantity\" [value]=\"1\" style=\"visibility: hidden;\">\n\n            <button *ngIf=\"product?.quantity>= 1\" type=\"button\" class=\"mercadopago-button btn-sm btn-block\" [routerLink]='[\"/comprar-producto\"]'>COMPRAR\n                </button>\n            <button (click)=\"addToCart(product?.id)\" *ngIf=\"product?.quantity >= 1\" class=\"btn-danger btn-sm btn-block\"><i\n                class=\"fa fa-shopping-cart\"></i>Agregar al carrito\n            </button>\n\n            <button class=\"btn-warning btn-sm btn-block\" [routerLink]='[\"/productos\"]'>Volver </button>\n\n            <ul class=\"product-links\">\n                <li>Share:</li>\n                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li>\n            </ul>\n\n\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/cards/confirm/confirm.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/cards/confirm/confirm.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pb-5\">\n    <div class=\"container\">\n        <div class=\"row\" *ngIf=\"cart.length > 0\">\n            <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\n\n                <div class=\"card shopping-cart\">\n\n                    <div class=\"card-body\">\n                        <!-- PRODUCT -->\n                        <div class=\"row\" *ngFor=\"let product of cart\">\n                            <div class=\"col-12 col-sm-12 col-md-2 text-center\">\n                                <img class=\"img-responsive\" [src]=\"product?.image\" height=\"80\">\n                            </div>\n                            <div class=\"col-12 text-sm-center col-sm-12 text-md-left col-md-5\">\n                                <h2 class=\"product-name\" id=\"name\">{{product?.name}}</h2>\n                                <p class=\"product-sku\" id=\"sku\" style=\"visibility: hidden\">SKU: {{product?.sku}}</p>\n                            </div>\n                            <div class=\"col-12 col-sm-12 text-sm-center col-md-4 text-md-right row\">\n                                <div class=\"col-3 col-sm-3 col-md-6 text-md-right\" style=\"padding-top: 5px\">\n                                    <div class=\"price-wrap\">\n                                        <var class=\"price\">{{(product.price * product.quantity)}}</var>\n                                        <small class=\"text-muted\">({{product.price}} x producto)</small>\n                                    </div>\n                                </div>\n                                <div class=\"col-4 col-sm-4 col-md-4\">\n                                    <div class=\"quantity\">\n                                        <table>\n                                            <tr>\n                                                <td><input type=\"button\" value=\"+\" class=\"plus\" (click)=\"onUpdateQuantity(1,  product.product_id)\"></td>\n                                                <td><input type=\"number\" id=\"quantity\" step=\"1\" max=\"99\" min=\"1\" [value]=\"product?.quantity\" title=\"Qty\" class=\"qty\" size=\"4\"></td>\n                                                <td><input type=\"button\" value=\"-\" class=\"minus\" [disabled]=\"product.quantity == 1\" (click)=\"onUpdateQuantity(0, product.product_id)\"></td>\n                                                <td><button type=\"button\" class=\"btn btn-outline-danger btn-xs\" (click)=\"deleteMethod(product.product_id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </button></td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- END PRODUCT -->\n                        </div>\n                        <div class=\"card-footer\">\n\n                            <div class=\"float-right\" style=\"margin: 10px\">\n\n                                <div class=\"float-left\" id=\"price\" value=\"total?\" style=\"margin: 17px\">\n                                    Total price: <span id=\"unit-price\">{{total}}</span>\n                                </div>\n                                <div class=\"float-left\" style=\"margin: 17px\">\n                                    <span style=\"visibility: hidden\" id=\"name\">Jcommerce</span>\n                                </div>\n                                <button type=\"button\" class=\"mercadopago-button btn btn-primary btn-sm btn-block\" id=\"mercadopago-button\">\n                                COMPRAR\n                               </button>\n                                <a class=\"btn btn-warning btn-sm btn-block\" [routerLink]=\"['/productos']\" role=\"button\">Seguir Comprando</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"cart.length == 0\">\n                <div class=\"col-lg-12 p-5 bg-white rounded shadow-sm mb-5\">\n                    <div class=\"jumbotron text-xs-center\">\n                        <h1 class=\"display-3\">Todavia no tiene productos</h1>\n                        <hr>\n                        <p class=\"lead\">\n                            <a class=\"btn btn-warning btn-lg btn-block\" [routerLink]=\"['/productos']\" role=\"button\">Nuestros Productos</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class body>\n    <!-- SEARCH BAR -->\n    <div class=\"col-md-6\">\n        <div class=\"header-search\">\n            <form>\n                <select [routerLink]='[\"/productos\"]' class=\"input-select\" (click)=\"getByCategory(option.value)\" #option>\n          <option  value=\"0\">Categorias</option>\n          <option [routerLink]='[\"/productos/tvs\"]' value=\"1\">Televisores</option>\n          <option [routerLink]='[\"/productos/laptops\"]' value=\"2\">Laptops</option>\n          <option [routerLink]='[\"/productos/celulares\"]' value=\"3\">Celulares</option>\n          </select>\n                <input class=\"input\" placeholder=\"Busque el producto\" [(ngModel)]=\"campobuscado\" name=\"campobuscado\">\n                <button class=\"search-btn\" (click)=\"serchByName(campobuscado)\">Buscar</button>\n            </form>\n        </div>\n    </div>\n    <!-- /SEARCH BAR -->\n\n\n    <div class=\"col-md-12\" class=\"global\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-3\" *ngFor=\"let p of ProductList\">\n                <div class=\"card my-2\">\n                    <img [src]=\"p.image\" alt=\"{{p.name}}\" width=auto height=auto class=\"card-img-top\" [routerLink]='[\"/productos-cards/\" + p.product_id]' style=\"cursor:pointer;\">\n                    <div class=\"card-header\">\n                        <div class=\"card-title\">\n                            <p>{{p.name | titlecase}}</p>\n\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <p class=\"lead\">{{p.price | currency:'USD'}}</p>\n                    </div>\n                    <div value=\"p.sku\"></div>\n\n                    <div>\n                        <div>\n                            <form action=\"/procesar-pago\" method=\"POST\">\n                                <button type=\"button\" [routerLink]='[\"/productos-cards/\" + p.product_id]' class=\"mercadopago-button btn-sm btn-block\" id=\"mercadopago-button\" [class.disabled]=\"p.quantity < 1\" [class.btn-outline-danger]=\"p.quantity < 1\" (click)=\"addToCart(product?.id)\"\n                                    [disabled]=\"p.quantity < 1\">\n                                    {{ p.quantity < 1 ? \"NO STOCK\" : \"Ver Producto\"}}\n                                </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AppComponent = class AppComponent {
    constructor(window) {
        this.window = window;
        this.title = 'app';
    }
    ngOnInit() {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js";
        document.body.appendChild(script);
        setTimeout(() => {
            this.mercadoPagoVersion = this.window["Mercadopago"].version;
        }, 1000);
    }
};
AppComponent.ctorParameters = () => [
    { type: Window }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]]
    }),
    __metadata("design:paramtypes", [Window])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_mercadopago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mercadopago */ "./node_modules/ngx-mercadopago/fesm2015/ngx-mercadopago.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_objToArray_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/objToArray.pipe */ "./src/app/products/objToArray.pipe.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _backoffice_crudproductos_crudproductos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./backoffice/crudproductos/crudproductos.component */ "./src/app/backoffice/crudproductos/crudproductos.component.ts");
/* harmony import */ var _backoffice_formulario_formulario_productos_formulario_productos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./backoffice/formulario/formulario-productos/formulario-productos.component */ "./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.ts");
/* harmony import */ var _products_cards_cards_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/cards/cards.component */ "./src/app/products/cards/cards.component.ts");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/cargar-scripts.service */ "./src/app/services/cargar-scripts.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/authentication.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _feedback_success_success_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./feedback/success/success.component */ "./src/app/feedback/success/success.component.ts");
/* harmony import */ var _feedback_failure_failure_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./feedback/failure/failure.component */ "./src/app/feedback/failure/failure.component.ts");
/* harmony import */ var _products_cards_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./products/cards/confirm/confirm.component */ "./src/app/products/cards/confirm/confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
            _products_objToArray_pipe__WEBPACK_IMPORTED_MODULE_12__["ObjToArrayPipe"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
            _backoffice_crudproductos_crudproductos_component__WEBPACK_IMPORTED_MODULE_17__["CrudproductosComponent"],
            _backoffice_formulario_formulario_productos_formulario_productos_component__WEBPACK_IMPORTED_MODULE_18__["FormularioProductosComponent"],
            _products_cards_cards_component__WEBPACK_IMPORTED_MODULE_19__["CardsComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            _feedback_success_success_component__WEBPACK_IMPORTED_MODULE_24__["SuccessComponent"],
            _feedback_failure_failure_component__WEBPACK_IMPORTED_MODULE_25__["FailureComponent"],
            _products_cards_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_mercadopago__WEBPACK_IMPORTED_MODULE_5__["NgxMercadopagoModule"].forRoot({
                publishKey: 'TEST-a82c7392-8732-4670-abdf-f1e37a2d442c',
                pathSDK: 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"] },
                { path: 'productos', component: _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"] },
                { path: 'productos/laptops', component: _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"] },
                { path: 'productos/celulares', component: _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"] },
                { path: 'productos/tvs', component: _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"] },
                { path: 'productos-cards/:id', component: _products_cards_cards_component__WEBPACK_IMPORTED_MODULE_19__["CardsComponent"] },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"] },
                { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"] },
                { path: 'boproductos', component: _backoffice_crudproductos_crudproductos_component__WEBPACK_IMPORTED_MODULE_17__["CrudproductosComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_22__["AuthenticationGuard"]] },
                { path: 'producto-editar/:id', component: _backoffice_formulario_formulario_productos_formulario_productos_component__WEBPACK_IMPORTED_MODULE_18__["FormularioProductosComponent"] },
                { path: 'producto-nuevo', component: _backoffice_formulario_formulario_productos_formulario_productos_component__WEBPACK_IMPORTED_MODULE_18__["FormularioProductosComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
                { path: 'comprar-producto', component: _products_cards_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmComponent"] },
                { path: 'payment/feedback/success', component: _feedback_success_success_component__WEBPACK_IMPORTED_MODULE_24__["SuccessComponent"] },
                { path: 'payment/feedback/failure', component: _feedback_success_success_component__WEBPACK_IMPORTED_MODULE_24__["SuccessComponent"] }
            ])
        ],
        providers: [{ provide: Window, useValue: window }, _authentication_guard__WEBPACK_IMPORTED_MODULE_22__["AuthenticationGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_20__["CargarScriptsService"],],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/authentication.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthenticationGuard = class AuthenticationGuard {
    constructor(authServ, router) {
        this.authServ = authServ;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authServ.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            alert("No tienes permisos para acceder a esta seccion");
            return false;
        }
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthenticationGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/backoffice/crudproductos/crudproductos.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/backoffice/crudproductos/crudproductos.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvY3J1ZHByb2R1Y3Rvcy9jcnVkcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/backoffice/crudproductos/crudproductos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/backoffice/crudproductos/crudproductos.component.ts ***!
  \*********************************************************************/
/*! exports provided: CrudproductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudproductosComponent", function() { return CrudproductosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CrudproductosComponent = class CrudproductosComponent {
    constructor(servProd) {
        this.servProd = servProd;
        this.ProductList = [];
    }
    ngOnInit() {
        this.CargarListado();
    }
    CargarListado() {
        this.servProd.getAll()
            .subscribe(data => {
            this.ProductList = data;
            console.log(localStorage.getItem('token'));
        });
    }
    deleteProduct(id) {
        console.log(id);
        this.servProd.delete(id)
            .subscribe(() => this.CargarListado(), error => alert(error), () => console.log("borro el producto"));
    }
    serchByName(campobuscado) {
        if (this.campobuscado != null && this.campobuscado != "") {
            this.servProd.serchByName(this.campobuscado).subscribe(data => {
                this.ProductList = data;
            }, err => console.log(err));
        }
        else {
            this.CargarListado();
        }
    }
};
CrudproductosComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], CrudproductosComponent.prototype, "itemProduct", void 0);
CrudproductosComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-crudproductos',
        template: __importDefault(__webpack_require__(/*! raw-loader!./crudproductos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/backoffice/crudproductos/crudproductos.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./crudproductos.component.css */ "./src/app/backoffice/crudproductos/crudproductos.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
], CrudproductosComponent);



/***/ }),

/***/ "./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvZm9ybXVsYXJpby9mb3JtdWxhcmlvLXByb2R1Y3Rvcy9mb3JtdWxhcmlvLXByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FormularioProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioProductosComponent", function() { return FormularioProductosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let FormularioProductosComponent = class FormularioProductosComponent {
    constructor(fb, prodServ, activatedRoute, router) {
        this.fb = fb;
        this.prodServ = prodServ;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.productForm = this.fb.group({
            sku: ['',],
            name: ['',],
            category: ['',],
            quantity: ['',],
            description: ['',],
            image: ['',],
            price: ['',],
        });
        this.categorias = [
            { category_id: 1, description: "Laptop" },
            { category_id: 2, description: "Celulares" },
            { category_id: 3, description: "Monitores" },
        ];
        this.activatedRoute.params.subscribe(params => {
            this.prodId = params['id'];
            if (isNaN(this.prodId)) {
                //no es numerico
                return;
            }
            else {
                //es numerico
                var product = this.prodServ.getSingleProduct(this.prodId).subscribe(product => {
                    this.titulo = "Modificar los datos del Producto: " + product.name;
                    this.productForm.patchValue({
                        sku: product.sku,
                        name: product.name,
                        category: product.category,
                        quantity: product.quantity,
                        description: product.description,
                        image: product.image,
                        price: product.price,
                    });
                });
            }
        });
    }
    SaveForm() {
        let prodFormulario = Object.assign({}, this.productForm.value);
        prodFormulario.product_id = +this.prodId;
        if (prodFormulario.product_id > 0) {
            //editamos
            console.log(prodFormulario);
            this.prodServ.update(prodFormulario)
                .subscribe(() => alert("Producto Modificado"), error => alert(error));
        }
        else {
            //creamos
            prodFormulario.product_id = 0;
            this.prodServ.createProduct(prodFormulario)
                .subscribe(() => alert("Producto agregado"), error => {
                console.log(error);
                alert("Error al crear: " + error);
            });
        }
        this.router.navigate(["/boproductos"]);
    }
};
FormularioProductosComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FormularioProductosComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-formulario-productos',
        template: __importDefault(__webpack_require__(/*! raw-loader!./formulario-productos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./formulario-productos.component.css */ "./src/app/backoffice/formulario/formulario-productos/formulario-productos.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], FormularioProductosComponent);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cargar-mercadopago.service */ "./src/app/services/cargar-mercadopago.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CartComponent = class CartComponent {
    constructor(cartService, cargarService) {
        this.cartService = cartService;
        this.cargarService = cargarService;
        this.cart = [];
        this.total = 0;
        cargarService.Cargar(['mercadopagojs']);
    }
    ngOnInit() {
        this.cartService.cart.subscribe(a => this.cart = a);
        this.getTotal();
        console.log(localStorage.getItem('Cart'));
    }
    getCartProductItems() {
        this.cart = JSON.parse(localStorage.getItem('Cart'));
        this.items = this.cart;
    }
    onRemoveProductsFromCart(productId) {
        this.cart = this.cart.filter(a => a.product_id != productId);
        localStorage.setItem('Cart', JSON.stringify(this.cart));
        this.cartService.updateCartItemCount(this.cart.length);
        this.cartService.updateShoppingCart(this.cart);
        this.total = 0;
        this.getTotal();
    }
    onUpdateQuantity(type, productId) {
        this.total = 0;
        if (type == 1) {
            this.cart.forEach((element, index) => {
                if (element.product_id == productId) {
                    this.cart[index].quantity = element.quantity + 1;
                }
            });
        }
        else {
            this.cart.forEach((element, index) => {
                if (element.product_id == productId) {
                    this.cart[index].quantity = element.quantity - 1;
                }
            });
        }
        this.getTotal();
    }
    getTotal() {
        this.cart.forEach((element) => {
            this.total += (element.price * element.quantity);
            localStorage.setItem('total', this.total.toString());
        });
    }
    deleteMethod(productId) {
        if (confirm("Esta seguro de sacar el producto? ")) {
            this.onRemoveProductsFromCart(productId);
        }
    }
    deleteAll() {
        if (confirm("Esta seguro de borrar todos los producto? ")) {
            localStorage.clear();
            window.location.reload();
        }
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] },
    { type: _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__["CargarMercadopagoService"] }
];
CartComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cart',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__["CargarMercadopagoService"]])
], CartComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CheckoutComponent = class CheckoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-checkout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/feedback/failure/failure.component.css":
/*!********************************************************!*\
  !*** ./src/app/feedback/failure/failure.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZhaWx1cmUvZmFpbHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/feedback/failure/failure.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/feedback/failure/failure.component.ts ***!
  \*******************************************************/
/*! exports provided: FailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureComponent", function() { return FailureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FailureComponent = class FailureComponent {
    constructor() { }
    ngOnInit() {
    }
};
FailureComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-failure',
        template: __importDefault(__webpack_require__(/*! raw-loader!./failure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/failure/failure.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./failure.component.css */ "./src/app/feedback/failure/failure.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], FailureComponent);



/***/ }),

/***/ "./src/app/feedback/success/success.component.css":
/*!********************************************************!*\
  !*** ./src/app/feedback/success/success.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/feedback/success/success.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/feedback/success/success.component.ts ***!
  \*******************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cargar-mercadopago.service */ "./src/app/services/cargar-mercadopago.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let SuccessComponent = class SuccessComponent {
    constructor(cartService, cargarService) {
        this.cartService = cartService;
        this.cargarService = cargarService;
        this.cart = [];
        this.total = 0;
        cargarService.Cargar(['mercadopagojs']);
    }
    ngOnInit() {
        this.cartService.cart.subscribe(a => this.cart = a);
        this.getTotal();
        console.log(localStorage.getItem('Cart'));
    }
    getCartProductItems() {
        this.cart = JSON.parse(localStorage.getItem('Cart'));
        if (this.cart.length <= 0) {
            this.cart = JSON.parse(localStorage.getItem('Compra'));
        }
        this.items = this.cart;
    }
    getTotal() {
        this.total = parseInt(localStorage.getItem('total'));
    }
};
SuccessComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] },
    { type: _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__["CargarMercadopagoService"] }
];
SuccessComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-success',
        template: __importDefault(__webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/success/success.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./success.component.css */ "./src/app/feedback/success/success.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__["CargarMercadopagoService"]])
], SuccessComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HeaderComponent = class HeaderComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cart = [];
    }
    ngOnInit() {
        this.cartService.cart.subscribe(a => this.cart = a);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }
];
HeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Animate CSS*/\r\n\r\n@charset \"UTF-8\";\r\n\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both\r\n}\r\n\r\n.animated.infinite {\r\n    -webkit-animation-iteration-count: infinite;\r\n    animation-iteration-count: infinite\r\n}\r\n\r\n.animated.hinge {\r\n    -webkit-animation-duration: 2s;\r\n    animation-duration: 2s\r\n}\r\n\r\n.pulse {\r\n    -webkit-animation-name: pulse_animation;\r\n            animation-name: pulse_animation;\r\n    -webkit-animation-duration: 14s!important;\r\n            animation-duration: 14s!important;\r\n    transform-origin: 70% 70%;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n    0%,\r\n    20%,\r\n    50%,\r\n    80%,\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n    40% {\r\n        transform: translateY(-30px)\r\n    }\r\n    60% {\r\n        transform: translateY(-15px)\r\n    }\r\n}\r\n\r\n@keyframes bounce {\r\n    0%,\r\n    20%,\r\n    50%,\r\n    80%,\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n    40% {\r\n        transform: translateY(-30px)\r\n    }\r\n    60% {\r\n        transform: translateY(-15px)\r\n    }\r\n}\r\n\r\n.bounce {\r\n    -webkit-animation-name: bounce;\r\n    animation-name: bounce\r\n}\r\n\r\n@-webkit-keyframes flash {\r\n    0%,\r\n    50%,\r\n    100% {\r\n        opacity: 1\r\n    }\r\n    25%,\r\n    75% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes flash {\r\n    0%,\r\n    50%,\r\n    100% {\r\n        opacity: 1\r\n    }\r\n    25%,\r\n    75% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.flash {\r\n    -webkit-animation-name: flash;\r\n    animation-name: flash\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    50% {\r\n        transform: scale(1.1)\r\n    }\r\n    100% {\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n@keyframes pulse {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    50% {\r\n        transform: scale(1.1)\r\n    }\r\n    100% {\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n.pulse {\r\n    -webkit-animation-name: pulse;\r\n    animation-name: pulse\r\n}\r\n\r\n@-webkit-keyframes rubberBand {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    30% {\r\n        transform: scaleX(1.25) scaleY(.75)\r\n    }\r\n    40% {\r\n        transform: scaleX(.75) scaleY(1.25)\r\n    }\r\n    60% {\r\n        transform: scaleX(1.15) scaleY(.85)\r\n    }\r\n    100% {\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n@keyframes rubberBand {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    30% {\r\n        transform: scaleX(1.25) scaleY(.75)\r\n    }\r\n    40% {\r\n        transform: scaleX(.75) scaleY(1.25)\r\n    }\r\n    60% {\r\n        transform: scaleX(1.15) scaleY(.85)\r\n    }\r\n    100% {\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n.rubberBand {\r\n    -webkit-animation-name: rubberBand;\r\n    animation-name: rubberBand\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n    0%,\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n    10%,\r\n    30%,\r\n    50%,\r\n    70%,\r\n    90% {\r\n        transform: translateX(-10px)\r\n    }\r\n    20%,\r\n    40%,\r\n    60%,\r\n    80% {\r\n        transform: translateX(10px)\r\n    }\r\n}\r\n\r\n@keyframes shake {\r\n    0%,\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n    10%,\r\n    30%,\r\n    50%,\r\n    70%,\r\n    90% {\r\n        transform: translateX(-10px)\r\n    }\r\n    20%,\r\n    40%,\r\n    60%,\r\n    80% {\r\n        transform: translateX(10px)\r\n    }\r\n}\r\n\r\n.shake {\r\n    -webkit-animation-name: shake;\r\n    animation-name: shake\r\n}\r\n\r\n@-webkit-keyframes swing {\r\n    20% {\r\n        transform: rotate(15deg)\r\n    }\r\n    40% {\r\n        transform: rotate(-10deg)\r\n    }\r\n    60% {\r\n        transform: rotate(5deg)\r\n    }\r\n    80% {\r\n        transform: rotate(-5deg)\r\n    }\r\n    100% {\r\n        transform: rotate(0deg)\r\n    }\r\n}\r\n\r\n@keyframes swing {\r\n    20% {\r\n        transform: rotate(15deg)\r\n    }\r\n    40% {\r\n        transform: rotate(-10deg)\r\n    }\r\n    60% {\r\n        transform: rotate(5deg)\r\n    }\r\n    80% {\r\n        transform: rotate(-5deg)\r\n    }\r\n    100% {\r\n        transform: rotate(0deg)\r\n    }\r\n}\r\n\r\n.swing {\r\n    transform-origin: top center;\r\n    -webkit-animation-name: swing;\r\n    animation-name: swing\r\n}\r\n\r\n@-webkit-keyframes tada {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    10%,\r\n    20% {\r\n        transform: scale(.9) rotate(-3deg)\r\n    }\r\n    30%,\r\n    50%,\r\n    70%,\r\n    90% {\r\n        transform: scale(1.1) rotate(3deg)\r\n    }\r\n    40%,\r\n    60%,\r\n    80% {\r\n        transform: scale(1.1) rotate(-3deg)\r\n    }\r\n    100% {\r\n        transform: scale(1) rotate(0)\r\n    }\r\n}\r\n\r\n@keyframes tada {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    10%,\r\n    20% {\r\n        transform: scale(.9) rotate(-3deg)\r\n    }\r\n    30%,\r\n    50%,\r\n    70%,\r\n    90% {\r\n        transform: scale(1.1) rotate(3deg)\r\n    }\r\n    40%,\r\n    60%,\r\n    80% {\r\n        transform: scale(1.1) rotate(-3deg)\r\n    }\r\n    100% {\r\n        transform: scale(1) rotate(0)\r\n    }\r\n}\r\n\r\n.tada {\r\n    -webkit-animation-name: tada;\r\n    animation-name: tada\r\n}\r\n\r\n@-webkit-keyframes wobble {\r\n    0% {\r\n        transform: translateX(0%)\r\n    }\r\n    15% {\r\n        transform: translateX(-25%) rotate(-5deg)\r\n    }\r\n    30% {\r\n        transform: translateX(20%) rotate(3deg)\r\n    }\r\n    45% {\r\n        transform: translateX(-15%) rotate(-3deg)\r\n    }\r\n    60% {\r\n        transform: translateX(10%) rotate(2deg)\r\n    }\r\n    75% {\r\n        transform: translateX(-5%) rotate(-1deg)\r\n    }\r\n    100% {\r\n        transform: translateX(0%)\r\n    }\r\n}\r\n\r\n@keyframes wobble {\r\n    0% {\r\n        transform: translateX(0%)\r\n    }\r\n    15% {\r\n        transform: translateX(-25%) rotate(-5deg)\r\n    }\r\n    30% {\r\n        transform: translateX(20%) rotate(3deg)\r\n    }\r\n    45% {\r\n        transform: translateX(-15%) rotate(-3deg)\r\n    }\r\n    60% {\r\n        transform: translateX(10%) rotate(2deg)\r\n    }\r\n    75% {\r\n        transform: translateX(-5%) rotate(-1deg)\r\n    }\r\n    100% {\r\n        transform: translateX(0%)\r\n    }\r\n}\r\n\r\n.wobble {\r\n    -webkit-animation-name: wobble;\r\n    animation-name: wobble\r\n}\r\n\r\n@-webkit-keyframes bounceIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        transform: scale(1.05)\r\n    }\r\n    70% {\r\n        transform: scale(.9)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n@keyframes bounceIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        transform: scale(1.05)\r\n    }\r\n    70% {\r\n        transform: scale(.9)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n.bounceIn {\r\n    -webkit-animation-name: bounceIn;\r\n    animation-name: bounceIn\r\n}\r\n\r\n@-webkit-keyframes bounceInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateY(30px)\r\n    }\r\n    80% {\r\n        transform: translateY(-10px)\r\n    }\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes bounceInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateY(30px)\r\n    }\r\n    80% {\r\n        transform: translateY(-10px)\r\n    }\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.bounceInDown {\r\n    -webkit-animation-name: bounceInDown;\r\n    animation-name: bounceInDown\r\n}\r\n\r\n@-webkit-keyframes bounceInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateX(30px)\r\n    }\r\n    80% {\r\n        transform: translateX(-10px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes bounceInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateX(30px)\r\n    }\r\n    80% {\r\n        transform: translateX(-10px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.bounceInLeft {\r\n    -webkit-animation-name: bounceInLeft;\r\n    animation-name: bounceInLeft\r\n}\r\n\r\n@-webkit-keyframes bounceInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateX(-30px)\r\n    }\r\n    80% {\r\n        transform: translateX(10px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes bounceInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateX(-30px)\r\n    }\r\n    80% {\r\n        transform: translateX(10px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.bounceInRight {\r\n    -webkit-animation-name: bounceInRight;\r\n    animation-name: bounceInRight\r\n}\r\n\r\n@-webkit-keyframes bounceInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateY(-30px)\r\n    }\r\n    80% {\r\n        transform: translateY(10px)\r\n    }\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes bounceInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: translateY(-30px)\r\n    }\r\n    80% {\r\n        transform: translateY(10px)\r\n    }\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.bounceInUp {\r\n    -webkit-animation-name: bounceInUp;\r\n    animation-name: bounceInUp\r\n}\r\n\r\n@-webkit-keyframes bounceOut {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    25% {\r\n        transform: scale(.95)\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        transform: scale(1.1)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n}\r\n\r\n@keyframes bounceOut {\r\n    0% {\r\n        transform: scale(1)\r\n    }\r\n    25% {\r\n        transform: scale(.95)\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        transform: scale(1.1)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n}\r\n\r\n.bounceOut {\r\n    -webkit-animation-name: bounceOut;\r\n    animation-name: bounceOut\r\n}\r\n\r\n@-webkit-keyframes bounceOutDown {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateY(-20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n}\r\n\r\n@keyframes bounceOutDown {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateY(-20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n}\r\n\r\n.bounceOutDown {\r\n    -webkit-animation-name: bounceOutDown;\r\n    animation-name: bounceOutDown\r\n}\r\n\r\n@-webkit-keyframes bounceOutLeft {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateX(20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n}\r\n\r\n@keyframes bounceOutLeft {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateX(20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n}\r\n\r\n.bounceOutLeft {\r\n    -webkit-animation-name: bounceOutLeft;\r\n    animation-name: bounceOutLeft\r\n}\r\n\r\n@-webkit-keyframes bounceOutRight {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateX(-20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n}\r\n\r\n@keyframes bounceOutRight {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateX(-20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n}\r\n\r\n.bounceOutRight {\r\n    -webkit-animation-name: bounceOutRight;\r\n    animation-name: bounceOutRight\r\n}\r\n\r\n@-webkit-keyframes bounceOutUp {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateY(20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n}\r\n\r\n@keyframes bounceOutUp {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    20% {\r\n        opacity: 1;\r\n        transform: translateY(20px)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n}\r\n\r\n.bounceOutUp {\r\n    -webkit-animation-name: bounceOutUp;\r\n    animation-name: bounceOutUp\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n    0% {\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.fadeIn {\r\n    -webkit-animation-name: fadeIn;\r\n    animation-name: fadeIn\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown\r\n}\r\n\r\n@-webkit-keyframes fadeInDownBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInDownBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.fadeInDownBig {\r\n    -webkit-animation-name: fadeInDownBig;\r\n    animation-name: fadeInDownBig\r\n}\r\n\r\n@-webkit-keyframes fadeInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.fadeInLeft {\r\n    -webkit-animation-name: fadeInLeft;\r\n    animation-name: fadeInLeft\r\n}\r\n\r\n@-webkit-keyframes fadeInLeftBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInLeftBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.fadeInLeftBig {\r\n    -webkit-animation-name: fadeInLeftBig;\r\n    animation-name: fadeInLeftBig\r\n}\r\n\r\n@-webkit-keyframes fadeInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.fadeInRight {\r\n    -webkit-animation-name: fadeInRight;\r\n    animation-name: fadeInRight\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.fadeInRightBig {\r\n    -webkit-animation-name: fadeInRightBig;\r\n    animation-name: fadeInRightBig\r\n}\r\n\r\n@-webkit-keyframes fadeInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(20px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.fadeInUp {\r\n    -webkit-animation-name: fadeInUp;\r\n    animation-name: fadeInUp\r\n}\r\n\r\n@-webkit-keyframes fadeInUpBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes fadeInUpBig {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.fadeInUpBig {\r\n    -webkit-animation-name: fadeInUpBig;\r\n    animation-name: fadeInUpBig\r\n}\r\n\r\n@-webkit-keyframes fadeOut {\r\n    0% {\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.fadeOut {\r\n    -webkit-animation-name: fadeOut;\r\n    animation-name: fadeOut\r\n}\r\n\r\n@-webkit-keyframes fadeOutDown {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(20px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutDown {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(20px)\r\n    }\r\n}\r\n\r\n.fadeOutDown {\r\n    -webkit-animation-name: fadeOutDown;\r\n    animation-name: fadeOutDown\r\n}\r\n\r\n@-webkit-keyframes fadeOutDownBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutDownBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n}\r\n\r\n.fadeOutDownBig {\r\n    -webkit-animation-name: fadeOutDownBig;\r\n    animation-name: fadeOutDownBig\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeft {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-20px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutLeft {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-20px)\r\n    }\r\n}\r\n\r\n.fadeOutLeft {\r\n    -webkit-animation-name: fadeOutLeft;\r\n    animation-name: fadeOutLeft\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeftBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutLeftBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n}\r\n\r\n.fadeOutLeftBig {\r\n    -webkit-animation-name: fadeOutLeftBig;\r\n    animation-name: fadeOutLeftBig\r\n}\r\n\r\n@-webkit-keyframes fadeOutRight {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(20px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutRight {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(20px)\r\n    }\r\n}\r\n\r\n.fadeOutRight {\r\n    -webkit-animation-name: fadeOutRight;\r\n    animation-name: fadeOutRight\r\n}\r\n\r\n@-webkit-keyframes fadeOutRightBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutRightBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n}\r\n\r\n.fadeOutRightBig {\r\n    -webkit-animation-name: fadeOutRightBig;\r\n    animation-name: fadeOutRightBig\r\n}\r\n\r\n@-webkit-keyframes fadeOutUp {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-20px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutUp {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-20px)\r\n    }\r\n}\r\n\r\n.fadeOutUp {\r\n    -webkit-animation-name: fadeOutUp;\r\n    animation-name: fadeOutUp\r\n}\r\n\r\n@-webkit-keyframes fadeOutUpBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n}\r\n\r\n@keyframes fadeOutUpBig {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n}\r\n\r\n.fadeOutUpBig {\r\n    -webkit-animation-name: fadeOutUpBig;\r\n    animation-name: fadeOutUpBig\r\n}\r\n\r\n@-webkit-keyframes flip {\r\n    0% {\r\n        transform: perspective(400px) translateZ(0) rotateY(-360deg) scale(1);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n    40% {\r\n        transform: perspective(400px) translateZ(150px) rotateY(-190deg) scale(1);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n    50% {\r\n        transform: perspective(400px) translateZ(150px) rotateY(-170deg) scale(1);\r\n        -webkit-animation-timing-function: ease-in;\r\n        animation-timing-function: ease-in\r\n    }\r\n    80% {\r\n        transform: perspective(400px) translateZ(0) rotateY(0deg) scale(.95);\r\n        -webkit-animation-timing-function: ease-in;\r\n        animation-timing-function: ease-in\r\n    }\r\n    100% {\r\n        transform: perspective(400px) translateZ(0) rotateY(0deg) scale(1);\r\n        -webkit-animation-timing-function: ease-in;\r\n        animation-timing-function: ease-in\r\n    }\r\n}\r\n\r\n@keyframes flip {\r\n    0% {\r\n        transform: perspective(400px) translateZ(0) rotateY(-360deg) scale(1);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n    40% {\r\n        transform: perspective(400px) translateZ(150px) rotateY(-190deg) scale(1);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n    50% {\r\n        transform: perspective(400px) translateZ(150px) rotateY(-170deg) scale(1);\r\n        -webkit-animation-timing-function: ease-in;\r\n        animation-timing-function: ease-in\r\n    }\r\n    80% {\r\n        transform: perspective(400px) translateZ(0) rotateY(0deg) scale(.95);\r\n        -webkit-animation-timing-function: ease-in;\r\n        animation-timing-function: ease-in\r\n    }\r\n    100% {\r\n        transform: perspective(400px) translateZ(0) rotateY(0deg) scale(1);\r\n        -webkit-animation-timing-function: ease-in;\r\n        animation-timing-function: ease-in\r\n    }\r\n}\r\n\r\n.animated.flip {\r\n    -webkit-backface-visibility: visible;\r\n    backface-visibility: visible;\r\n    -webkit-animation-name: flip;\r\n    animation-name: flip\r\n}\r\n\r\n@-webkit-keyframes flipInX {\r\n    0% {\r\n        transform: perspective(400px) rotateX(90deg);\r\n        opacity: 0\r\n    }\r\n    40% {\r\n        transform: perspective(400px) rotateX(-10deg)\r\n    }\r\n    70% {\r\n        transform: perspective(400px) rotateX(10deg)\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateX(0deg);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes flipInX {\r\n    0% {\r\n        transform: perspective(400px) rotateX(90deg);\r\n        opacity: 0\r\n    }\r\n    40% {\r\n        transform: perspective(400px) rotateX(-10deg)\r\n    }\r\n    70% {\r\n        transform: perspective(400px) rotateX(10deg)\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateX(0deg);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.flipInX {\r\n    -webkit-backface-visibility: visible!important;\r\n    backface-visibility: visible!important;\r\n    -webkit-animation-name: flipInX;\r\n    animation-name: flipInX\r\n}\r\n\r\n@-webkit-keyframes flipInY {\r\n    0% {\r\n        transform: perspective(400px) rotateY(90deg);\r\n        opacity: 0\r\n    }\r\n    40% {\r\n        transform: perspective(400px) rotateY(-10deg)\r\n    }\r\n    70% {\r\n        transform: perspective(400px) rotateY(10deg)\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateY(0deg);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes flipInY {\r\n    0% {\r\n        transform: perspective(400px) rotateY(90deg);\r\n        opacity: 0\r\n    }\r\n    40% {\r\n        transform: perspective(400px) rotateY(-10deg)\r\n    }\r\n    70% {\r\n        transform: perspective(400px) rotateY(10deg)\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateY(0deg);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.flipInY {\r\n    -webkit-backface-visibility: visible!important;\r\n    backface-visibility: visible!important;\r\n    -webkit-animation-name: flipInY;\r\n    animation-name: flipInY\r\n}\r\n\r\n@-webkit-keyframes flipOutX {\r\n    0% {\r\n        transform: perspective(400px) rotateX(0deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateX(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes flipOutX {\r\n    0% {\r\n        transform: perspective(400px) rotateX(0deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateX(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.flipOutX {\r\n    -webkit-animation-name: flipOutX;\r\n    animation-name: flipOutX;\r\n    -webkit-backface-visibility: visible!important;\r\n    backface-visibility: visible!important\r\n}\r\n\r\n@-webkit-keyframes flipOutY {\r\n    0% {\r\n        transform: perspective(400px) rotateY(0deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateY(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes flipOutY {\r\n    0% {\r\n        transform: perspective(400px) rotateY(0deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: perspective(400px) rotateY(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.flipOutY {\r\n    -webkit-backface-visibility: visible!important;\r\n    backface-visibility: visible!important;\r\n    -webkit-animation-name: flipOutY;\r\n    animation-name: flipOutY\r\n}\r\n\r\n@-webkit-keyframes lightSpeedIn {\r\n    0% {\r\n        transform: translateX(100%) skewX(-30deg);\r\n        opacity: 0\r\n    }\r\n    60% {\r\n        transform: translateX(-20%) skewX(30deg);\r\n        opacity: 1\r\n    }\r\n    80% {\r\n        transform: translateX(0%) skewX(-15deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: translateX(0%) skewX(0deg);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes lightSpeedIn {\r\n    0% {\r\n        transform: translateX(100%) skewX(-30deg);\r\n        opacity: 0\r\n    }\r\n    60% {\r\n        transform: translateX(-20%) skewX(30deg);\r\n        opacity: 1\r\n    }\r\n    80% {\r\n        transform: translateX(0%) skewX(-15deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: translateX(0%) skewX(0deg);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.lightSpeedIn {\r\n    -webkit-animation-name: lightSpeedIn;\r\n    animation-name: lightSpeedIn;\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out\r\n}\r\n\r\n@-webkit-keyframes lightSpeedOut {\r\n    0% {\r\n        transform: translateX(0%) skewX(0deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: translateX(100%) skewX(-30deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes lightSpeedOut {\r\n    0% {\r\n        transform: translateX(0%) skewX(0deg);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: translateX(100%) skewX(-30deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.lightSpeedOut {\r\n    -webkit-animation-name: lightSpeedOut;\r\n    animation-name: lightSpeedOut;\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in\r\n}\r\n\r\n@-webkit-keyframes rotateIn {\r\n    0% {\r\n        transform-origin: center center;\r\n        transform: rotate(-200deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: center center;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes rotateIn {\r\n    0% {\r\n        transform-origin: center center;\r\n        transform: rotate(-200deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: center center;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.rotateIn {\r\n    -webkit-animation-name: rotateIn;\r\n    animation-name: rotateIn\r\n}\r\n\r\n@-webkit-keyframes rotateInDownLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes rotateInDownLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.rotateInDownLeft {\r\n    -webkit-animation-name: rotateInDownLeft;\r\n    animation-name: rotateInDownLeft\r\n}\r\n\r\n@-webkit-keyframes rotateInDownRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes rotateInDownRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.rotateInDownRight {\r\n    -webkit-animation-name: rotateInDownRight;\r\n    animation-name: rotateInDownRight\r\n}\r\n\r\n@-webkit-keyframes rotateInUpLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes rotateInUpLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.rotateInUpLeft {\r\n    -webkit-animation-name: rotateInUpLeft;\r\n    animation-name: rotateInUpLeft\r\n}\r\n\r\n@-webkit-keyframes rotateInUpRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes rotateInUpRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.rotateInUpRight {\r\n    -webkit-animation-name: rotateInUpRight;\r\n    animation-name: rotateInUpRight\r\n}\r\n\r\n@-webkit-keyframes rotateOut {\r\n    0% {\r\n        transform-origin: center center;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: center center;\r\n        transform: rotate(200deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes rotateOut {\r\n    0% {\r\n        transform-origin: center center;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: center center;\r\n        transform: rotate(200deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.rotateOut {\r\n    -webkit-animation-name: rotateOut;\r\n    animation-name: rotateOut\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes rotateOutDownLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.rotateOutDownLeft {\r\n    -webkit-animation-name: rotateOutDownLeft;\r\n    animation-name: rotateOutDownLeft\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes rotateOutDownRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.rotateOutDownRight {\r\n    -webkit-animation-name: rotateOutDownRight;\r\n    animation-name: rotateOutDownRight\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes rotateOutUpLeft {\r\n    0% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: left bottom;\r\n        transform: rotate(-90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.rotateOutUpLeft {\r\n    -webkit-animation-name: rotateOutUpLeft;\r\n    animation-name: rotateOutUpLeft\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes rotateOutUpRight {\r\n    0% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(0);\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform-origin: right bottom;\r\n        transform: rotate(90deg);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.rotateOutUpRight {\r\n    -webkit-animation-name: rotateOutUpRight;\r\n    animation-name: rotateOutUpRight\r\n}\r\n\r\n@-webkit-keyframes slideInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes slideInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n    100% {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.slideInDown {\r\n    -webkit-animation-name: slideInDown;\r\n    animation-name: slideInDown\r\n}\r\n\r\n@-webkit-keyframes slideInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes slideInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.slideInLeft {\r\n    -webkit-animation-name: slideInLeft;\r\n    animation-name: slideInLeft\r\n}\r\n\r\n@-webkit-keyframes slideInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes slideInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n    100% {\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.slideInRight {\r\n    -webkit-animation-name: slideInRight;\r\n    animation-name: slideInRight\r\n}\r\n\r\n@-webkit-keyframes slideOutLeft {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n}\r\n\r\n@keyframes slideOutLeft {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-2000px)\r\n    }\r\n}\r\n\r\n.slideOutLeft {\r\n    -webkit-animation-name: slideOutLeft;\r\n    animation-name: slideOutLeft\r\n}\r\n\r\n@-webkit-keyframes slideOutRight {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n}\r\n\r\n@keyframes slideOutRight {\r\n    0% {\r\n        transform: translateX(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(2000px)\r\n    }\r\n}\r\n\r\n.slideOutRight {\r\n    -webkit-animation-name: slideOutRight;\r\n    animation-name: slideOutRight\r\n}\r\n\r\n@-webkit-keyframes slideOutUp {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n}\r\n\r\n@keyframes slideOutUp {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(-2000px)\r\n    }\r\n}\r\n\r\n.slideOutUp {\r\n    -webkit-animation-name: slideOutUp;\r\n    animation-name: slideOutUp\r\n}\r\n\r\n@-webkit-keyframes slideInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes slideInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n.slideInUp {\r\n    -webkit-animation-name: slideInUp;\r\n    animation-name: slideInUp\r\n}\r\n\r\n@-webkit-keyframes slideOutDown {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n}\r\n\r\n@keyframes slideOutDown {\r\n    0% {\r\n        transform: translateY(0)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateY(2000px)\r\n    }\r\n}\r\n\r\n.slideOutDown {\r\n    -webkit-animation-name: slideOutDown;\r\n    animation-name: slideOutDown\r\n}\r\n\r\n@-webkit-keyframes hinge {\r\n    0% {\r\n        transform: rotate(0);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    20%,\r\n    60% {\r\n        transform: rotate(80deg);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    40% {\r\n        transform: rotate(60deg);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    80% {\r\n        transform: rotate(60deg) translateY(0);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out;\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: translateY(700px);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes hinge {\r\n    0% {\r\n        transform: rotate(0);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    20%,\r\n    60% {\r\n        transform: rotate(80deg);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    40% {\r\n        transform: rotate(60deg);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    80% {\r\n        transform: rotate(60deg) translateY(0);\r\n        transform-origin: top left;\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out;\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        transform: translateY(700px);\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.hinge {\r\n    -webkit-animation-name: hinge;\r\n    animation-name: hinge\r\n}\r\n\r\n@-webkit-keyframes rollIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-100%) rotate(-120deg)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0) rotate(0deg)\r\n    }\r\n}\r\n\r\n@keyframes rollIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-100%) rotate(-120deg)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0) rotate(0deg)\r\n    }\r\n}\r\n\r\n.rollIn {\r\n    -webkit-animation-name: rollIn;\r\n    animation-name: rollIn\r\n}\r\n\r\n@-webkit-keyframes rollOut {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0) rotate(0deg)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(100%) rotate(120deg)\r\n    }\r\n}\r\n\r\n@keyframes rollOut {\r\n    0% {\r\n        opacity: 1;\r\n        transform: translateX(0) rotate(0deg)\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(100%) rotate(120deg)\r\n    }\r\n}\r\n\r\n.rollOut {\r\n    -webkit-animation-name: rollOut;\r\n    animation-name: rollOut\r\n}\r\n\r\n@-webkit-keyframes zoomIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n    50% {\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes zoomIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n    50% {\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n.zoomIn {\r\n    -webkit-animation-name: zoomIn;\r\n    animation-name: zoomIn\r\n}\r\n\r\n@-webkit-keyframes zoomInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(-2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(60px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n@keyframes zoomInDown {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(-2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(60px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n.zoomInDown {\r\n    -webkit-animation-name: zoomInDown;\r\n    animation-name: zoomInDown\r\n}\r\n\r\n@-webkit-keyframes zoomInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(-2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(48px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n@keyframes zoomInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(-2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(48px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n.zoomInLeft {\r\n    -webkit-animation-name: zoomInLeft;\r\n    animation-name: zoomInLeft\r\n}\r\n\r\n@-webkit-keyframes zoomInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(-48px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n@keyframes zoomInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(-48px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n.zoomInRight {\r\n    -webkit-animation-name: zoomInRight;\r\n    animation-name: zoomInRight\r\n}\r\n\r\n@-webkit-keyframes zoomInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(-60px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n@keyframes zoomInUp {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(2000px);\r\n        -webkit-animation-timing-function: ease-in-out;\r\n        animation-timing-function: ease-in-out\r\n    }\r\n    60% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(-60px);\r\n        -webkit-animation-timing-function: ease-out;\r\n        animation-timing-function: ease-out\r\n    }\r\n}\r\n\r\n.zoomInUp {\r\n    -webkit-animation-name: zoomInUp;\r\n    animation-name: zoomInUp\r\n}\r\n\r\n@-webkit-keyframes zoomOut {\r\n    0% {\r\n        opacity: 1;\r\n        transform: scale(1)\r\n    }\r\n    50% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes zoomOut {\r\n    0% {\r\n        opacity: 1;\r\n        transform: scale(1)\r\n    }\r\n    50% {\r\n        opacity: 0;\r\n        transform: scale(.3)\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.zoomOut {\r\n    -webkit-animation-name: zoomOut;\r\n    animation-name: zoomOut\r\n}\r\n\r\n@-webkit-keyframes zoomOutDown {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(-60px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(2000px);\r\n        transform-origin: center bottom\r\n    }\r\n}\r\n\r\n@keyframes zoomOutDown {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(-60px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(2000px);\r\n        transform-origin: center bottom\r\n    }\r\n}\r\n\r\n.zoomOutDown {\r\n    -webkit-animation-name: zoomOutDown;\r\n    animation-name: zoomOutDown\r\n}\r\n\r\n@-webkit-keyframes zoomOutLeft {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(42px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(-2000px);\r\n        transform-origin: left center\r\n    }\r\n}\r\n\r\n@keyframes zoomOutLeft {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(42px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(-2000px);\r\n        transform-origin: left center\r\n    }\r\n}\r\n\r\n.zoomOutLeft {\r\n    -webkit-animation-name: zoomOutLeft;\r\n    animation-name: zoomOutLeft\r\n}\r\n\r\n@-webkit-keyframes zoomOutRight {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(-42px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(2000px);\r\n        transform-origin: right center\r\n    }\r\n}\r\n\r\n@keyframes zoomOutRight {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateX(-42px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateX(2000px);\r\n        transform-origin: right center\r\n    }\r\n}\r\n\r\n.zoomOutRight {\r\n    -webkit-animation-name: zoomOutRight;\r\n    animation-name: zoomOutRight\r\n}\r\n\r\n@-webkit-keyframes zoomOutUp {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(60px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(-2000px);\r\n        transform-origin: center top\r\n    }\r\n}\r\n\r\n@keyframes zoomOutUp {\r\n    40% {\r\n        opacity: 1;\r\n        transform: scale(.475) translateY(60px);\r\n        -webkit-animation-timing-function: linear;\r\n        animation-timing-function: linear\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: scale(.1) translateY(-2000px);\r\n        transform-origin: center top\r\n    }\r\n}\r\n\r\n.zoomOutUp {\r\n    -webkit-animation-name: zoomOutUp;\r\n    animation-name: zoomOutUp\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZixnQkFBZ0I7O0FBQ2hCO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakM7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQztBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMseUNBQWdDO1lBQWhDO0FBQ0o7O0FBRUE7SUFDSTs7Ozs7UUFNSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTs7Ozs7UUFPSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJOzs7UUFHSTtJQUNKO0lBQ0E7O1FBRUk7SUFDSjtBQUNKOztBQUVBO0lBQ0k7OztRQUdJO0lBQ0o7SUFDQTs7UUFFSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJOztRQUdJO0lBQ0o7SUFDQTs7Ozs7UUFNSTtJQUNKO0lBQ0E7Ozs7UUFLSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTs7UUFJSTtJQUNKO0lBQ0E7Ozs7O1FBT0k7SUFDSjtJQUNBOzs7O1FBTUk7SUFDSjtBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUVJO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBR0k7SUFDSjtJQUNBO1FBR0k7SUFDSjtJQUNBO1FBR0k7SUFDSjtJQUNBO1FBR0k7SUFDSjtJQUNBO1FBR0k7SUFDSjtBQUNKOztBQUVBO0lBR0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7UUFFSTtJQUNKO0lBQ0E7O1FBR0k7SUFDSjtJQUNBOzs7O1FBS0k7SUFDSjtJQUNBOzs7UUFJSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUdJO0lBQ0o7SUFDQTs7UUFJSTtJQUNKO0lBQ0E7Ozs7UUFNSTtJQUNKO0lBQ0E7OztRQUtJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBRVY7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUVWO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFFVjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFHVjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBR1Y7SUFDSjtJQUNBO1FBR0k7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUdWO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBRVY7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUVWO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUdWO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFHVjtJQUNKO0lBQ0E7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUVWO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFFVjtJQUNKO0lBQ0E7UUFFSTtJQUNKO0lBQ0E7UUFFSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFHVjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBR1Y7SUFDSjtJQUNBO1FBR0k7SUFDSjtJQUNBO1FBR0k7SUFDSjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFFVjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBRVY7SUFDSjtJQUNBO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBR1Y7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUdWO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBRVY7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUVWO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7SUFDQTtRQUVJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUdWO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFHVjtJQUNKO0lBQ0E7UUFHSTtJQUNKO0lBQ0E7UUFHSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJO1FBRUk7SUFDSjtJQUNBO1FBRUk7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUVWO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFFVjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUdJO0lBQ0o7SUFDQTtRQUdJO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFHVjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBR1Y7SUFDSjtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSTtRQUVJO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFFVjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBRVY7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFHSTtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBR1Y7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUdWO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQztBQUNKOztBQUVBO0lBQ0k7UUFFSTtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBRVY7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUVWO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBR0k7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUdWO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFHVjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckM7QUFDSjs7QUFFQTtJQUNJO1FBRUk7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUVWO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFFVjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUdJO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFHVjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBR1Y7SUFDSjtBQUNKOztBQUVBO0lB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QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUVWLHVDQUF1QztRQUN2Qyx5Q0FBeUM7UUFDekM7SUFDSjtJQUNBO1FBQ0ksVUFBVTtRQUVWLHdDQUF3QztRQUV4QztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFHVix1Q0FBdUM7UUFDdkMseUNBQXlDO1FBQ3pDO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFHVix3Q0FBd0M7UUFHeEM7SUFDSjtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFuaW1hdGUgQ1NTKi9cclxuXHJcbkBjaGFyc2V0IFwiVVRGLThcIjtcclxuLmFuaW1hdGVkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoXHJcbn1cclxuXHJcbi5hbmltYXRlZC5pbmZpbml0ZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGVcclxufVxyXG5cclxuLmFuaW1hdGVkLmhpbmdlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnNcclxufVxyXG5cclxuLnB1bHNlIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBwdWxzZV9hbmltYXRpb247XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE0cyFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXJcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgICAwJSxcclxuICAgIDIwJSxcclxuICAgIDUwJSxcclxuICAgIDgwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KVxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgICAwJSxcclxuICAgIDIwJSxcclxuICAgIDUwJSxcclxuICAgIDgwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpXHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3VuY2Uge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2gge1xyXG4gICAgMCUsXHJcbiAgICA1MCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAyNSUsXHJcbiAgICA3NSUge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGFzaCB7XHJcbiAgICAwJSxcclxuICAgIDUwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDI1JSxcclxuICAgIDc1JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG4uZmxhc2gge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxhc2g7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmxhc2hcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHVsc2Uge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcHVsc2VcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS4yNSkgc2NhbGVZKC43NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yNSkgc2NhbGVZKC43NSlcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCguNzUpIHNjYWxlWSgxLjI1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCguNzUpIHNjYWxlWSgxLjI1KVxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMTUpIHNjYWxlWSguODUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMTUpIHNjYWxlWSguODUpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS4yNSkgc2NhbGVZKC43NSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDEuMjUpIHNjYWxlWSguNzUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMjUpIHNjYWxlWSguNzUpXHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLjc1KSBzY2FsZVkoMS4yNSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKC43NSkgc2NhbGVZKDEuMjUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC43NSkgc2NhbGVZKDEuMjUpXHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS4xNSkgc2NhbGVZKC44NSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDEuMTUpIHNjYWxlWSguODUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMTUpIHNjYWxlWSguODUpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG59XHJcblxyXG4ucnViYmVyQmFuZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJ1YmJlckJhbmRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbiAgICAxMCUsXHJcbiAgICAzMCUsXHJcbiAgICA1MCUsXHJcbiAgICA3MCUsXHJcbiAgICA5MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpXHJcbiAgICB9XHJcbiAgICAyMCUsXHJcbiAgICA0MCUsXHJcbiAgICA2MCUsXHJcbiAgICA4MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDEwJSxcclxuICAgIDMwJSxcclxuICAgIDUwJSxcclxuICAgIDcwJSxcclxuICAgIDkwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweClcclxuICAgIH1cclxuICAgIDIwJSxcclxuICAgIDQwJSxcclxuICAgIDYwJSxcclxuICAgIDgwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweClcclxuICAgIH1cclxufVxyXG5cclxuLnNoYWtlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZyB7XHJcbiAgICAyMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKVxyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKVxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpXHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN3aW5nIHtcclxuICAgIDIwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZylcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZylcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZylcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZylcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5zd2luZyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzd2luZztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzd2luZ1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGFkYSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcclxuICAgIH1cclxuICAgIDEwJSxcclxuICAgIDIwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45KSByb3RhdGUoLTNkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpIHJvdGF0ZSgtM2RlZylcclxuICAgIH1cclxuICAgIDMwJSxcclxuICAgIDUwJSxcclxuICAgIDcwJSxcclxuICAgIDkwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDNkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoM2RlZylcclxuICAgIH1cclxuICAgIDQwJSxcclxuICAgIDYwJSxcclxuICAgIDgwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC0zZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC0zZGVnKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRhZGEge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbiAgICAxMCUsXHJcbiAgICAyMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSkgcm90YXRlKC0zZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOSkgcm90YXRlKC0zZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45KSByb3RhdGUoLTNkZWcpXHJcbiAgICB9XHJcbiAgICAzMCUsXHJcbiAgICA1MCUsXHJcbiAgICA3MCUsXHJcbiAgICA5MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgzZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgzZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDNkZWcpXHJcbiAgICB9XHJcbiAgICA0MCUsXHJcbiAgICA2MCUsXHJcbiAgICA4MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtM2RlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTNkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTNkZWcpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKVxyXG4gICAgfVxyXG59XHJcblxyXG4udGFkYSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB0YWRhO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRhZGFcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSlcclxuICAgIH1cclxuICAgIDE1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgcm90YXRlKC01ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgcm90YXRlKC01ZGVnKVxyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpIHJvdGF0ZSgzZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKSByb3RhdGUoM2RlZylcclxuICAgIH1cclxuICAgIDQ1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgcm90YXRlKC0zZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgcm90YXRlKC0zZGVnKVxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpIHJvdGF0ZSgyZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKSByb3RhdGUoMmRlZylcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKSByb3RhdGUoLTFkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpIHJvdGF0ZSgtMWRlZylcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd29iYmxlIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKVxyXG4gICAgfVxyXG4gICAgMTUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKSByb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgcm90YXRlKC01ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgcm90YXRlKC01ZGVnKVxyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpIHJvdGF0ZSgzZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSkgcm90YXRlKDNkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpIHJvdGF0ZSgzZGVnKVxyXG4gICAgfVxyXG4gICAgNDUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUlKSByb3RhdGUoLTNkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgcm90YXRlKC0zZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgcm90YXRlKC0zZGVnKVxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpIHJvdGF0ZSgyZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSkgcm90YXRlKDJkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpIHJvdGF0ZSgyZGVnKVxyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSkgcm90YXRlKC0xZGVnKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSlcclxuICAgIH1cclxufVxyXG5cclxuLndvYmJsZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogd29iYmxlXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpXHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpXHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSlcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcclxuICAgIH1cclxufVxyXG5cclxuLmJvdW5jZUluIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpXHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpXHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweClcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KVxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuLmJvdW5jZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5Eb3duXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpXHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpXHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweClcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KVxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxufVxyXG5cclxuLmJvdW5jZUluTGVmdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkxlZnQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweClcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KVxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweClcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KVxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxufVxyXG5cclxuLmJvdW5jZUluUmlnaHQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweClcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KVxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweClcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KVxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuLmJvdW5jZUluVXAge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KVxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KVxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3VuY2VPdXQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0RG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuLmJvdW5jZU91dERvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXREb3duXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlT3V0TGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm91bmNlT3V0TGVmdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRMZWZ0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dExlZnRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuLmJvdW5jZU91dFJpZ2h0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRVcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG4gICAgMjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3VuY2VPdXRVcCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRVcDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRVcFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlSW5Eb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93blxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93bkJpZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93bkJpZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFkZUluRG93bkJpZyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duQmlnO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWdcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFkZUluTGVmdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxufVxyXG5cclxuLmZhZGVJbkxlZnRCaWcge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0QmlnXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxufVxyXG5cclxuLmZhZGVJblJpZ2h0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodEJpZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlSW5SaWdodEJpZyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodEJpZztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodEJpZ1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlSW5VcCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXBCaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5VcEJpZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFkZUluVXBCaWcge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWdcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlT3V0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXREb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlT3V0RG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93blxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0RG93bkJpZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFkZU91dERvd25CaWcge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dERvd25CaWc7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd25CaWdcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlT3V0TGVmdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0QmlnIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlT3V0TGVmdEJpZyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdEJpZztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdEJpZ1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweClcclxuICAgIH1cclxufVxyXG5cclxuLmZhZGVPdXRSaWdodCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuLmZhZGVPdXRSaWdodEJpZyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHRCaWc7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWRlT3V0VXAge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0VXBCaWcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuLmZhZGVPdXRVcEJpZyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXBCaWc7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dFVwQmlnXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgtMzYwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoLTM2MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE5MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTkwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTcwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xNzBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluXHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpIHNjYWxlKC45NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpIHNjYWxlKC45NSk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW5cclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pblxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsaXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0zNjBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoLTM2MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0zNjBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXRcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xOTBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xOTBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE5MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE3MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE3MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTcwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pblxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKSBzY2FsZSguOTUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZykgc2NhbGUoLjk1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZykgc2NhbGUoLjk1KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pblxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKSBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW5cclxuICAgIH1cclxufVxyXG5cclxuLmFuaW1hdGVkLmZsaXAge1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwSW5YIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpXHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZylcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwSW5YIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpXHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGlwSW5YIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmxpcEluWFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcEluWSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTEwZGVnKVxyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxpcEluWSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTEwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTEwZGVnKVxyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDEwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDEwZGVnKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmxpcEluWSB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xyXG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwSW5ZO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsaXBJbllcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwT3V0WCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG4uZmxpcE91dFgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmxpcE91dFg7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xyXG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRZIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwT3V0WSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG4uZmxpcE91dFkge1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcclxuICAgIC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmxpcE91dFlcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tld1goLTMwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tld1goLTMwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpIHNrZXdYKDMwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSkgc2tld1goMzBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHNrZXdYKC0xNWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSBza2V3WCgtMTVkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSBza2V3WCgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHNrZXdYKDBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsaWdodFNwZWVkSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHNrZXdYKC0zMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSBza2V3WCgtMzBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSBza2V3WCgtMzBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSkgc2tld1goMzBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSkgc2tld1goMzBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKSBza2V3WCgzMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2tld1goLTE1ZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSBza2V3WCgtMTVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2tld1goLTE1ZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2tld1goMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2tld1goMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSBza2V3WCgwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbi5saWdodFNwZWVkSW4ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRJbjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHNrZXdYKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2tld1goMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tld1goLTMwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tld1goLTMwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGlnaHRTcGVlZE91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHNrZXdYKDBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHNrZXdYKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2tld1goMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tld1goLTMwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHNrZXdYKC0zMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHNrZXdYKC0zMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG4ubGlnaHRTcGVlZE91dCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjAwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjAwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjAwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTIwMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG59XHJcblxyXG4ucm90YXRlSW4ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlSW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3RhdGVJbkRvd25MZWZ0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duTGVmdFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93blJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3RhdGVJbkRvd25SaWdodCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25SaWdodDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25SaWdodFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcExlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlSW5VcExlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxufVxyXG5cclxuLnJvdGF0ZUluVXBMZWZ0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3RhdGVJblVwUmlnaHQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlSW5VcFJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjAwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVPdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjAwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjAwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuLnJvdGF0ZU91dCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG4ucm90YXRlT3V0RG93bkxlZnQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93bkxlZnQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93bkxlZnRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuLnJvdGF0ZU91dERvd25SaWdodCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duUmlnaHQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcExlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVPdXRVcExlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuLnJvdGF0ZU91dFVwTGVmdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBMZWZ0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3RhdGVPdXRVcFJpZ2h0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBSaWdodFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlSW5Eb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluTGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2xpZGVJbkxlZnQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbGlkZUluUmlnaHQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5SaWdodFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRMZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVPdXRMZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2xpZGVPdXRMZWZ0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0TGVmdDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlT3V0UmlnaHQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRSaWdodDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFVwIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVPdXRVcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweClcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlT3V0VXAge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRVcDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMDBweClcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlSW5VcCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluVXA7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJblVwXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dERvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVPdXREb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2xpZGVPdXREb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0RG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dERvd25cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGhpbmdlIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxyXG4gICAgfVxyXG4gICAgMjAlLFxyXG4gICAgNjAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4MGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXRcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MDBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhpbmdlIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgICAyMCUsXHJcbiAgICA2MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoODBkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXRcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufVxyXG5cclxuLmhpbmdlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhpbmdlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpbmdlXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb2xsSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMTIwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMTIwZGVnKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgwZGVnKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKC0xMjBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMTIwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMTIwZGVnKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgwZGVnKVxyXG4gICAgfVxyXG59XHJcblxyXG4ucm9sbEluIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsSW5cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvbGxPdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMGRlZylcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgxMjBkZWcpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm9sbE91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgwZGVnKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgxMjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMTIwZGVnKVxyXG4gICAgfVxyXG59XHJcblxyXG4ucm9sbE91dCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsT3V0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpXHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4zKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguMyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMylcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG59XHJcblxyXG4uem9vbUluIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKDYwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWSg2MHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVkoNjBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWSg2MHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVkoNjBweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxyXG4gICAgfVxyXG59XHJcblxyXG4uem9vbUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd25cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVYKDQ4cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCg0OHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbUluTGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoNDhweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCg0OHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoNDhweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxyXG4gICAgfVxyXG59XHJcblxyXG4uem9vbUluTGVmdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5MZWZ0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JblJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVgoMjAwMHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoLTQ4cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCgtNDhweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21JblJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXRcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCgtNDhweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCgtNDhweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVYKC00OHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0XHJcbiAgICB9XHJcbn1cclxuXHJcbi56b29tSW5SaWdodCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5SaWdodDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5SaWdodFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXRcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWSgtNjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVkoLTYwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXRcclxuICAgIH1cclxufVxyXG5cclxuLnpvb21JblVwIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JblVwO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21JblVwXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4zKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4zKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC4zKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4zKVxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfVxyXG59XHJcblxyXG4uem9vbU91dCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXREb3duIHtcclxuICAgIDQwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWSgtNjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXJcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbU91dERvd24ge1xyXG4gICAgNDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVkoLTYwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhclxyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbVxyXG4gICAgfVxyXG59XHJcblxyXG4uem9vbU91dERvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dERvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogem9vbU91dERvd25cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXRMZWZ0IHtcclxuICAgIDQwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCg0MnB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoNDJweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXJcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tT3V0TGVmdCB7XHJcbiAgICA0MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoNDJweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCg0MnB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoNDJweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi56b29tT3V0TGVmdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dFJpZ2h0IHtcclxuICAgIDQwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCgtNDJweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVYKC00MnB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXJcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlclxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XHJcbiAgICA0MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoLTQycHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVgoLTQycHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWCgtNDJweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWCgyMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi56b29tT3V0UmlnaHQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dFJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRSaWdodFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dFVwIHtcclxuICAgIDQwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWSg2MHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40NzUpIHRyYW5zbGF0ZVkoNjBweCk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlWSgtMjAwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcclxuICAgIDQwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWSg2MHB4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguNDc1KSB0cmFuc2xhdGVZKDYwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjQ3NSkgdHJhbnNsYXRlWSg2MHB4KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXJcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC4xKSB0cmFuc2xhdGVZKC0yMDAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZVkoLTIwMDBweCk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3BcclxuICAgIH1cclxufVxyXG5cclxuLnpvb21PdXRVcCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XHJcbiAgICBhbmltYXRpb24tbmFtZTogem9vbU91dFVwXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor(servProd) {
        this.servProd = servProd;
        this.ProductList = [];
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], HomeComponent.prototype, "itemProduct", void 0);
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cargar-scripts.service */ "./src/app/services/cargar-scripts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let LoginComponent = class LoginComponent {
    constructor(cargaScripts) {
        this.cargaScripts = cargaScripts;
        cargaScripts.Cargar(["googleauth"]);
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__["CargarScriptsService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default
    }),
    __metadata("design:paramtypes", [_services_cargar_scripts_service__WEBPACK_IMPORTED_MODULE_1__["CargarScriptsService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/products/cards/cards.component.css":
/*!****************************************************!*\
  !*** ./src/app/products/cards/cards.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.imagen {\r\n    height: 500px;\r\n    width: auto;\r\n}\r\n\r\n.toast {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    border: 1px solid #16a085;\r\n}\r\n\r\n.toast div:first-child {\r\n    background-color: #16a085;\r\n    color: #fff;\r\n}\r\n\r\n.add-to-cart {\r\n    border: 1px solid #e5e5e5;\r\n    display: inline-block;\r\n    padding: 10px 20px;\r\n    color: #888;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n    transition: all .3s;\r\n}\r\n\r\n.add-to-cart:hover {\r\n    border: 1px solid transparent;\r\n    background: #16a085;\r\n    color: #fff;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZW4ge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udG9hc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTZhMDg1O1xyXG59XHJcblxyXG4udG9hc3QgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFkZC10by1jYXJ0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcblxyXG4uYWRkLXRvLWNhcnQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTZhMDg1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/products/cards/cards.component.ts":
/*!***************************************************!*\
  !*** ./src/app/products/cards/cards.component.ts ***!
  \***************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cargar-mercadopago.service */ "./src/app/services/cargar-mercadopago.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let CardsComponent = class CardsComponent {
    constructor(route, productService, checkoutService, cargarService, cartService) {
        this.route = route;
        this.productService = productService;
        this.checkoutService = checkoutService;
        this.cargarService = cargarService;
        this.cartService = cartService;
        this.alert = false;
        this.searchKey = "";
        cargarService.Cargar(['mercadopagojsSingleproduct']);
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((param) => {
            // @ts-ignore
            return param.params.id;
        })).subscribe(prodId => {
            this.id = prodId;
            this.productService.getSingleProduct(this.id).subscribe(prod => {
                this.product = prod;
                this.preference = prod;
            });
        });
        this.buySingleProduct();
    }
    addToCart() {
        let product;
        this.productService.getSingleProduct(this.id)
            .subscribe(p => {
            product = p;
            product.quantity = 1;
            let cart = JSON.parse(localStorage.getItem('Cart'));
            if (cart == null) {
                cart = [];
                cart.push(product);
            }
            else {
                let currentProduct = cart.filter(a => a.product_id == product.product_id);
                if (currentProduct.length > 0) {
                    cart.filter(a => {
                        a.quantity = a.quantity;
                    });
                }
                else {
                    cart.push(product);
                }
            }
            this.cartService.updateCartItemCount(cart.length);
            this.cartService.updateShoppingCart(cart);
            localStorage.setItem('Cart', JSON.stringify(cart));
            this.alert = true;
        });
    }
    buySingleProduct() {
        let product;
        this.productService.getSingleProduct(this.id)
            .subscribe(p => {
            product = p;
            product.quantity = 1;
            let cart = JSON.parse(localStorage.getItem('Cart'));
            if (cart == null) {
                cart = [];
                cart.push(product);
            }
            else {
                let currentProduct = cart.filter(a => a.product_id == product.product_id);
                if (currentProduct.length > 0) {
                    cart.filter(a => {
                        a.quantity = a.quantity;
                    });
                }
                else {
                    cart.push(product);
                }
            }
            this.cartService.updateCartItemCount(cart.length);
            this.cartService.updateShoppingCart(cart);
            localStorage.setItem('Cart', JSON.stringify(cart));
            console.log(localStorage.getItem('Cart'));
        });
    }
};
CardsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__["checkoutService"] },
    { type: _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_5__["CargarMercadopagoService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
CardsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cards',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/cards/cards.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cards.component.css */ "./src/app/products/cards/cards.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
        _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__["checkoutService"],
        _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_5__["CargarMercadopagoService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])
], CardsComponent);



/***/ }),

/***/ "./src/app/products/cards/confirm/confirm.component.css":
/*!**************************************************************!*\
  !*** ./src/app/products/cards/confirm/confirm.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NhcmRzL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/products/cards/confirm/confirm.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/products/cards/confirm/confirm.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cargar-mercadopago.service */ "./src/app/services/cargar-mercadopago.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ConfirmComponent = class ConfirmComponent {
    constructor(cartService, cargarService) {
        this.cartService = cartService;
        this.cargarService = cargarService;
        this.cart = [];
        this.total = 0;
        cargarService.Cargar(['mercadopagojsSingleproduct']);
    }
    ngOnInit() {
        this.cartService.cart.subscribe(a => this.cart = a);
        this.getTotal();
        console.log(localStorage.getItem('Compra'));
    }
    getCartProductItems() {
        this.cart = JSON.parse(localStorage.getItem('Compra'));
        this.items = this.cart;
    }
    onRemoveProductsFromCart(productId) {
        this.cart = this.cart.filter(a => a.product_id != productId);
        localStorage.setItem('Compra', JSON.stringify(this.cart));
        this.cartService.updateCartItemCount(this.cart.length);
        this.cartService.updateShoppingCart(this.cart);
        this.total = 0;
        this.getTotal();
    }
    onUpdateQuantity(type, productId) {
        this.total = 0;
        if (type == 1) {
            this.cart.forEach((element, index) => {
                if (element.product_id == productId) {
                    this.cart[index].quantity = element.quantity + 1;
                }
            });
        }
        else {
            this.cart.forEach((element, index) => {
                if (element.product_id == productId) {
                    this.cart[index].quantity = element.quantity - 1;
                }
            });
        }
        this.getTotal();
    }
    getTotal() {
        this.cart.forEach((element) => {
            this.total += (element.price * element.quantity);
        });
    }
    deleteMethod(productId) {
        if (confirm("Esta seguro de sacar el producto? ")) {
            this.onRemoveProductsFromCart(productId);
        }
    }
};
ConfirmComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] },
    { type: _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__["CargarMercadopagoService"] }
];
ConfirmComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-confirm',
        template: __importDefault(__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/cards/confirm/confirm.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./confirm.component.css */ "./src/app/products/cards/confirm/confirm.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_2__["CargarMercadopagoService"]])
], ConfirmComponent);



/***/ }),

/***/ "./src/app/products/objToArray.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/products/objToArray.pipe.ts ***!
  \*********************************************/
/*! exports provided: ObjToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjToArrayPipe", function() { return ObjToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ObjToArrayPipe = class ObjToArrayPipe {
    transform(object = []) {
        return Object.values(object);
    }
};
ObjToArrayPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'ObjToArray'
    })
], ObjToArrayPipe);



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\r\n    max-width: 1038px;\r\n    margin: 8px auto 8px auto;\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIG1heC13aWR0aDogMTAzOHB4O1xyXG4gICAgbWFyZ2luOiA4cHggYXV0byA4cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cargar-mercadopago.service */ "./src/app/services/cargar-mercadopago.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let ProductsComponent = class ProductsComponent {
    constructor(servProd, cartService, checkoutService, router, cargarMP) {
        this.servProd = servProd;
        this.cartService = cartService;
        this.checkoutService = checkoutService;
        this.router = router;
        this.cargarMP = cargarMP;
        this.ProductList = [];
        this.alert = false;
        this.URL = "/productos";
        cargarMP.Cargar(["mercadopagojs"]);
    }
    ngOnInit() {
        if (this.router.url == this.URL + "/laptops") {
            this.getByCategory(2);
        }
        else if (this.router.url == this.URL + "/celulares") {
            this.getByCategory(3);
        }
        else if (this.router.url == this.URL + "/tvs") {
            this.getByCategory(1);
        }
        else {
            this.CargarListado();
        }
        Object(scriptjs__WEBPACK_IMPORTED_MODULE_4__["get"])("https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js", () => {
            //library has been loaded...
        });
    }
    CargarListado() {
        this.servProd.getAll()
            .subscribe(data => {
            this.ProductList = data;
        });
    }
    getByCategory(category) {
        if (category > 0) {
            this.servProd.getProductsFromCategory(category)
                .subscribe(data => {
                this.ProductList = data;
            });
        }
        else {
            this.servProd.getAll()
                .subscribe(data => {
                this.ProductList = data;
            });
        }
    }
    serchByName(campobuscado) {
        if (this.campobuscado != null && this.campobuscado != "") {
            this.servProd.serchByName(this.campobuscado).subscribe(data => {
                this.ProductList = data;
            }, err => console.log(err));
        }
        else {
            this.CargarListado();
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__["checkoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_6__["CargarMercadopagoService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ProductsComponent.prototype, "itemProduct", void 0);
ProductsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-products',
        template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__["checkoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_cargar_mercadopago_service__WEBPACK_IMPORTED_MODULE_6__["CargarMercadopagoService"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AuthService = class AuthService {
    constructor() { }
    loggedIn() {
        var rol = localStorage.getItem('token');
        if (rol == 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], AuthService);



/***/ }),

/***/ "./src/app/services/cargar-mercadopago.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/cargar-mercadopago.service.ts ***!
  \********************************************************/
/*! exports provided: CargarMercadopagoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarMercadopagoService", function() { return CargarMercadopagoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CargarMercadopagoService = class CargarMercadopagoService {
    constructor() { }
    Cargar(archivos) {
        for (let archivo in archivos) {
            let script = document.createElement("script");
            script.src = "../assets/js/mercadopagojs.js";
            let body = document.getElementsByTagName("body")[0];
            body.appendChild(script);
        }
    }
};
CargarMercadopagoService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CargarMercadopagoService);



/***/ }),

/***/ "./src/app/services/cargar-scripts.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/cargar-scripts.service.ts ***!
  \****************************************************/
/*! exports provided: CargarScriptsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarScriptsService", function() { return CargarScriptsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CargarScriptsService = class CargarScriptsService {
    constructor() { }
    Cargar(archivos) {
        for (let archivo in archivos) {
            let script = document.createElement("script");
            script.src = "../assets/js/googleauth.js";
            let body = document.getElementsByTagName("body")[0];
            body.appendChild(script);
        }
    }
};
CargarScriptsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CargarScriptsService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CartService = class CartService {
    constructor() {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
        this.currentMessage = this.message.asObservable();
        this.ItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.count = this.ItemCount.asObservable();
        this.shoppingCart = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.cart = this.shoppingCart.asObservable();
        let isEmptyCart = localStorage.getItem('Cart') == null;
        this.updateCartItemCount(isEmptyCart ? 0 : JSON.parse(localStorage.getItem('Cart')).length);
        this.updateShoppingCart(isEmptyCart ? [] : JSON.parse(localStorage.getItem('Cart')));
    }
    changeMessage(message) {
        this.message.next(message);
    }
    updateCartItemCount(count) {
        this.ItemCount.next(count);
    }
    updateShoppingCart(cartItems) {
        this.shoppingCart.next(cartItems);
    }
};
CartService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CartService);



/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: checkoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutService", function() { return checkoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let checkoutService = class checkoutService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'https://jcommerce.herokuapp.com/api/payment';
    }
    goCheckOut(data) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
        };
        const product = {
            prodSku: data.sku,
            prodName: data.name,
            unit_price: data.unit_price,
            quantity: 1
        };
        return this.http.post(this.apiURL, product, { headers });
    }
};
checkoutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
checkoutService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], checkoutService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'https://jcommerce.herokuapp.com/product/';
    }
    getAll() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
        };
        return this.http.get(this.apiURL, { headers });
    }
    getSingleProduct(id) {
        return this.http.get(this.apiURL + id);
    }
    getProductsFromCategory(catName) {
        return this.http.get(this.apiURL + 'category/' + catName);
    }
    createProduct(prod) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
        };
        return this.http.post(this.apiURL, prod, { headers });
    }
    update(prod) {
        return this.http.put(this.apiURL + prod.product_id, prod);
    }
    serchByName(name) {
        return this.http.get(this.apiURL + 'name/' + name);
    }
    delete(prodId) {
        console.log(prodId);
        return this.http.delete(this.apiURL + prodId);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProductsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    firebase: {
        databaseURL: 'https://proyecto-integrador-98add-default-rtdb.firebaseio.com',
        apiKey: "AIzaSyBGSbjyzLCAkdDWyDeGuqPRuz_EzWaa1jU",
        authDomain: "proyecto-integrador-98add.firebaseapp.com",
        projectId: "proyecto-integrador-98add",
        storageBucket: "proyecto-integrador-98add.appspot.com",
        messagingSenderId: "1011012838140",
        appId: "1:1011012838140:web:dbfe5d40931a0b372bed79",
        measurementId: "G-4FLTHL0N2T"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juan\Desktop\Front Proyecto final\ProyectoFinalFront\clientapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map