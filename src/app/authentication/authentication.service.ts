import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../interface/User';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string;
  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private helper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    return !this.helper.isTokenExpired(this.token);
  }

  public LogIn(credentials: { email: string, password: string }) {
    return this.http.post('/auth/login', credentials).pipe(
      tap((data: { token: string }) => {
        this.token = data.token;
        this.currentUser.next(this.helper.decodeToken(this.token));
        console.log([this.token, this.currentUser]);
      })
    );
  }

  public LoggedIn() {
    console.log(!!this.token);
    return !!this.token;
  }

}
