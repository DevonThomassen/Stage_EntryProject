import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/interface/User';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: Observable<User[]>;

  private totalUsers: number;
  private offset = 0;
  limit = 20;
  page = 1;
  totalPages: number;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    if ((this.offset / this.limit + 1) % 1) {
      this.offset = Math.floor(this.offset / this.limit + 1) * this.limit - this.limit;
    }

    this.userService.getUsers(this.offset, this.limit).pipe(first()).subscribe(
      res => {
        this.users = of(res.data);
        this.totalUsers = res.total;
        this.page = this.offset / this.limit + 1;
        this.totalPages = Math.ceil(this.totalUsers / this.limit);
        console.log(['res data', res.data]);
      },
      err => {
        throwError(err);
      });
  }

  onSelect(user: User) {
    this.router.navigate([`dashboard/user/detail/${user.id}`]);
  }

  addUser() {
    this.router.navigate(['dashboard/user/add']);
  }

  //#region pagination
  firstPage() {
    this.offset = 0;
    this.getUsers();
  }

  previousPage() {
    if ((this.offset - this.limit) < 0 || (isNaN(this.offset) || isNaN(this.limit))) { return; }
    this.offset = this.offset - this.limit;
    this.getUsers();
  }

  nextPage() {
    if ((this.offset + +this.limit) > this.totalUsers - 1) { return; }
    this.offset = this.offset + +this.limit;
    this.getUsers();
  }

  lastPage() {
    this.offset = Math.ceil(this.totalUsers / this.limit) * this.limit - this.limit;
    this.getUsers();
  }
  //#endregion

}
