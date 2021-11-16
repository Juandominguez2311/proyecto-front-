
import { Component, OnInit } from '@angular/core';

import {CargarScriptsService} from '../services/cargar-scripts.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

 
  constructor( private cargaScripts: CargarScriptsService) {
    cargaScripts.Cargar(["googleauth"]);
   }

  ngOnInit() {
  }
 
}
