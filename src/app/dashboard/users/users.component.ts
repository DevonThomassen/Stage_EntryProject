import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  totalUsers: number;

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res => {
      this.users = of(res.data);
      this.totalUsers = res.total;
      console.log(res.data);
    });
  }

  onSelect(user: User) {
    this.router.navigate([`dashboard/user/detail/${user.id}`]);
    console.log(user.id);
  }

}
