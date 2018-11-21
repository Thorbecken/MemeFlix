import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean {
    const userRole = 'Admin'; // instert JWT token decryper here!
    return true;
  }
}
