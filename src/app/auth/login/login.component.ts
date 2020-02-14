import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials = {
    email: 'cjinkinson1@state.gov',
    password: 'pNPB5YwdR'
  };

  public rememberMe = false;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  LogIn() {
    this.auth.LogIn(this.credentials).subscribe();
    this.router.navigate(['/dashboard']);
  }

}
