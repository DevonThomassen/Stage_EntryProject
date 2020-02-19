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

  credentials: Credential = {
    email: 'admin',
    password: 'admin'
  };

  rememberMe = false;
  error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(): void {
    this.auth.logIn(this.credentials).subscribe(
      () => this.router.navigate(['/dashboard'])
    );
  }

}
