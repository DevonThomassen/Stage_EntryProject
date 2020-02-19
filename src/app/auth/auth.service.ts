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
  }

  logIn(credentials: { email: string, password: string }): Observable<{ token: string }> {
    return this.http.post('/auth/login', credentials).pipe(
      tap((data: { token: string }) => {
        this.token = data.token;
        this.currentUser.next(this.helper.decodeToken(this.token));
        console.log([this.token, this.currentUser]);
      })
    );
  }

  loggedIn(): boolean {
  logOut() {
    this.token.next('');
    this.currentUser.next();
    localStorage.removeItem('Token');
    this.router.navigate(['./auth']);
  }

}
