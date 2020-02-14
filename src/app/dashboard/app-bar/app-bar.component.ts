import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from 'src/app/interface/User';


@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  user: User;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(user => { this.user = user; });
    console.log(['user: ', this.user]);
  }

}
