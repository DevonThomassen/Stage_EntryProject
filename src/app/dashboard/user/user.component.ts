import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: Observable<User[]>;
  totalUsers: number;

  offset = 0;
  limit = 200;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers(this.offset, this.limit);
  }

  onSelect(user: User) {
    this.router.navigate([`dashboard/user/detail/${user.id}`]);
    console.log(['user id', user.id]);
  }

  getParams() {
    this.getUsers(this.offset, this.limit);
  }

  getUsers(offset: number, limit: number) {
    this.userService.getUsers(this.offset, this.limit).subscribe(res => {
      this.users = of(res.data);
      this.totalUsers = res.total;
      console.log(['res data', res.data]);
    },
    err => {
      throwError(err);
    });
  }

  addUser() {

  }

}
