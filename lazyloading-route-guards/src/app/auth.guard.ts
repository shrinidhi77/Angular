import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router) { }

  canActivate() {
    if (new Date().getHours() < 0) return true;
    else {
      this.router.navigate(['/home']);
      return false
    }
  }

  canLoad() {
    if (new Date().getHours() < 0) return true;
    else {
      this.router.navigate(['/home']);
      return false
    }
  }
}