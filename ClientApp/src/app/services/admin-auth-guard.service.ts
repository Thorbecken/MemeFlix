import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = 'Admin'; //instert JWT token decryper here!
    if (route.data.excpectedRole == userRole) {
      return true
    }
    else {
      return false;
    }
  }
}
