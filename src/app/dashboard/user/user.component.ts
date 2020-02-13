import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { Observable, of } from 'rxjs';
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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
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
