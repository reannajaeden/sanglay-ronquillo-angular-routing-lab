import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service'; // Assuming you have an AuthService
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {} 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true; // Default behavior allows route access
  
if (this.authService.isAdmin()) { 
  return true; // User is an admin, allow access 
  } else { 
  // User is not an admin, redirect to login or unauthorized page  // You could redirect to a login page, or an 'unauthorized' page  // For this example, let's redirect to the home page ('/') 
  this.router.navigate(['/']); 
  return false; // Prevent access to the route 
  }  
  }  
 }  
 