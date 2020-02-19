import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private authentication: AuthService, private router: Router) { }

  canActivate() {
    if (this.authentication.loggedIn() && !'') {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

}
