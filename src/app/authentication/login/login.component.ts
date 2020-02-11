import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials = {
    email: 'Placeholder1',
    password: 'Placeholder2'
  };

  public rememberMe = false;
  public error: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  LogIn() {
    this.loginService.LogIn(this.credentials)
    .subscribe( data => console.log(data));
  }
}
