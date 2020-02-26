import { Component, OnInit } from '@angular/core';
import { AddUser } from '../../../interface/AddUser';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  user: AddUser = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  error: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.userService.AddUser(this.user).subscribe(
      res => this.router.navigate(['./dashboard']),
      err => this.error = err);
  }

}
