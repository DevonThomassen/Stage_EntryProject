import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/User';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  totalUsers: number;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const totalUsers = this.http.get('/users?offset=0&limit=104');
    totalUsers.subscribe((data: { data: User[], total: number }) => {
      this.totalUsers = data.total;
      this.users = of(data.data);
      console.log(data.data);
    });
  }

  onSelect(user: User) {
    this.router.navigate([`dashboard/user/detail/${user.id}`]);
    console.log(user.id);
  }

}
