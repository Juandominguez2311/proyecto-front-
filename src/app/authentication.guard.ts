import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../app/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor( private authServ : AuthService, private router :Router){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authServ.loggedIn()){
        return true
      }else{
        this.router.navigate(['/login'])
        alert("No tienes permisos para acceder a esta seccion")
        return false
  }
}
}
