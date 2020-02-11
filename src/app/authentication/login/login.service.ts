import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  LogIn(credentials: { email: string, password: string }) {
    return this.http.post('/auth/login', credentials);
  }
}
