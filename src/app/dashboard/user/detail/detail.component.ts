import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

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
