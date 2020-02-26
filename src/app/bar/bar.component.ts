import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

import { User } from '../interface/User';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  user: User = {
    id: 0,
    email: '',
    password: '',
    firstName: 'Bleep',
    lastName: 'Bloop',
    avatar: 'https://robohash.org/consecteturmagniid.jpg?size=100x100&set=set1',
    created_at: '',
    updated_at: ''
  };

  msg = 'Are you sure, you want to log out?';
  openDialog = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(user => { this.user = user; });
    console.log(['user: ', this.user]);
  }

  logOut() {
    this.toggle();
  }

  toggle() {
    this.openDialog = !this.openDialog;
  }

  confirmed() {
    this.toggle();
    this.auth.logOut();
  }

}
