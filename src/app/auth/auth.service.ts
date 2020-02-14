import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  currentUser: BehaviorSubject<User> = new BehaviorSubject({
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    avatar: '',
    created_at: '',
    updated_at: ''
  });

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
    return !!this.token;
  }

}
