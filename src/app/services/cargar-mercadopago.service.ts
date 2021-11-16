import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarMercadopagoService {

  constructor() { }

  Cargar( archivos: string[]){

    for( let archivo in archivos){
      let script = document.createElement("script");
      script.src = "../assets/js/mercadopagojs.js"

      let body = document.getElementsByTagName("body")[0]
      body.appendChild(script);
    }
}
}