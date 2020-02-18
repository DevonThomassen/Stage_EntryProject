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

  private token: string;
  private currentUser: BehaviorSubject<User> = new BehaviorSubject({
    id: 0,
    email: '',
    password: '',
    firstName: 'Start',
    lastName: 'Name',
    avatar: 'https://robohash.org/consecteturmagniid.jpg?size=100x100&set=set1',
    created_at: '',
    updated_at: ''
  });

  constructor(private http: HttpClient, private helper: JwtHelperService) { }

  public getToken() {
    return this.token;
  }

  public getCurrentUser() {
    return this.currentUser;
  }

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

  public loggedIn() {
    return !!this.token;
  }

}
