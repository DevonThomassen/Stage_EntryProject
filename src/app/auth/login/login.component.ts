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

  form = new FormGroup({
    credentials: new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    }),
    additions: new FormGroup({
      rememberMe: new FormControl(false)
    })
  });

  rememberMe = false;
  error: HttpErrorResponse;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(): void {
    if (!this.form.valid) { return; }

    this.auth.logIn(this.form.value.credentials, this.form.value.additions.rememberMe).subscribe(
      () => this.router.navigate(['/dashboard']),
      (err: HttpErrorResponse) => this.error = err
    );
    console.warn(this.form.value.credentials);
  }

}
