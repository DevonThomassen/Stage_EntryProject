import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  user = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ])
  });
  error: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (!this.user.valid) { return; }

    this.userService.AddUser(this.user.value).subscribe(
      res => this.router.navigate(['./dashboard']),
      err => this.error = err);
  }

}
