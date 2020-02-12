import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  LogIn(credentials: { email: string, password: string }) {
    return this.http.post('/auth/login', credentials);
  }

}
