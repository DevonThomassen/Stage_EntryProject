import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authentication: AuthService, public router: Router) { }

  canActivate() {
    if (this.authentication.LoggedIn()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

}
