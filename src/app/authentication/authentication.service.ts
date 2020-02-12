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
  currentUser: BehaviorSubject<User>;

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
        this.currentUser = this.helper.decodeToken(this.token);
      }
    );

    return token;
  }

}
