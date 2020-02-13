import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../interface/User';
import { BehaviorSubject } from 'rxjs';

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

    const token = this.http.post('/auth/login', credentials).subscribe(
      (data: { token: string }) => { this.token = data.token; console.log(this.token); },
      (err) => console.error(err),
      () => {
        console.log('Done');
        this.currentUser.next(this.helper.decodeToken(this.token));
        console.log(this.currentUser);
      }
    );

    return token;
  }

  public LoggedIn() {
    console.log(!!this.token);
    return !!this.token;
  }

}
