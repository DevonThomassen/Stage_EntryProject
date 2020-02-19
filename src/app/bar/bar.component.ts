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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(user => { this.user = user;  });
    console.log(['user: ', this.user]);
  }

  logOut() {
    localStorage.removeItem('Token');
    this.auth.logOut();
  }

}
