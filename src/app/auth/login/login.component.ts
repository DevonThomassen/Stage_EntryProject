import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Credential } from './../../interface/Credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials: Credential = {
    email: 'admin',
    password: 'admin'
  };

  public rememberMe = false;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  LogIn() {
    this.auth.LogIn(this.credentials).subscribe(
      () => this.router.navigate(['/dashboard'])
    );
  }

}
