import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {

  constructor(public authentication: AuthService, public router: Router) { }

  canActivate() {
    if (!this.authentication.loggedIn()) {
      return true;
    }
    this.router.navigate(['/dashboard']);
    return false;
  }

}
