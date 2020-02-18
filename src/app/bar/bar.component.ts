import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { User } from '../interface/User';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public user: User;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(user => { this.user = user; });
    console.log(['user: ', this.user]);
  }

}
