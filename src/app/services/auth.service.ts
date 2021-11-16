import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {User} from '../models/user.interface'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  
loggedIn(){
  var rol = localStorage.getItem('token')

  if(rol == 'admin'){
    return true
  }
  else{
    return false
  }
}
}