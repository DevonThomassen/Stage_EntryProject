import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(public authentication: AuthenticationService, public router: Router) { }

  canActivate() {
    if (this.authentication.LoggedIn()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

}
