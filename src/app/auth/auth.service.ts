import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: BehaviorSubject<string> = new BehaviorSubject('');
  private currentUser: ReplaySubject<User> = new ReplaySubject(1);

  constructor(
    private http: HttpClient, private helper: JwtHelperService, private router: Router) {
    const existingToken = localStorage.getItem('Token');
    if (!existingToken) { return; }
    this.token.next(existingToken);
    this.currentUser.next(this.helper.decodeToken(this.token.value));
  }

  getToken(): string {
    return this.token.value;
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !this.helper.isTokenExpired(this.getToken());
  }

  logIn(credentials: { email: string, password: string }): Observable<{ token: string }> {
    return this.http.post('/auth/login', credentials).pipe(
      tap((data: { token: string }) => {
        this.token.next(data.token);
        localStorage.setItem('Token', this.token.value);
        this.currentUser.next(this.helper.decodeToken(this.token.value));
        console.log([this.token, this.currentUser]);
      })
    );
  }

  loggedIn(): boolean {
    return !!this.token.value;
  }

  logOut() {
    this.token.next('');
    this.currentUser.next({
      id: 0,
      email: '',
      password: '',
      firstName: 'Bleep',
      lastName: 'Bloop',
      avatar: 'https://robohash.org/consecteturmagniid.jpg?size=100x100&set=set1',
      created_at: '',
      updated_at: ''
    });
    localStorage.removeItem('Token');
    this.router.navigate(['./auth']);
  }

}
