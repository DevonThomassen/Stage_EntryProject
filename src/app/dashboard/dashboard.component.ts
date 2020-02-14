import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../interface/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe((user: User) => { this.user = user; });
    console.log(['user: ', this.user]);
  }

  Get() {
    // const x = this.http.get('/users?offset=1&limit=1');
    // x.subscribe(data => console.log(data));
  }

}
