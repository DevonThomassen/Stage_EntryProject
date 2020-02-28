import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  rememberMe = false;
  error: HttpErrorResponse;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(): void {
    if (!this.credentials.valid) { return; }

    this.auth.logIn(this.credentials.value).subscribe(
      () => this.router.navigate(['/dashboard']),
      (err: HttpErrorResponse) => this.error = err
    );
    console.warn(this.credentials.value);
  }

}
