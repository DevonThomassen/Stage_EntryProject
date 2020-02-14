import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/User';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = {
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    avatar: '',
    created_at: '',
    updated_at: ''
  };

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`DE ID is: ${id}`);
    this.userService.getUserById(id).subscribe(res => this.user = res);
  }

  editUser() {

  }

  deleteUser() {

  }

}
