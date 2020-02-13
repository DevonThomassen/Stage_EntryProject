import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials = {
    email: 'admin',
    password: 'admin'
  };

  public rememberMe = false;
  public error: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  LogIn() {
    this.auth.LogIn(this.credentials);
  }
}
