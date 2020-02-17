import { Component, OnInit } from '@angular/core';
import { AddUser } from '../../../interface/AddUser';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public user: AddUser = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  public error: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  Submit() {
    this.userService.AddUser(this.user).subscribe(res => console.log(res), err => this.error = err);
  }

}
