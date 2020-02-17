import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { throwError } from 'rxjs';

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

  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`DE ID is: ${id}`);
    this.userService.getUserById(id).subscribe(res => this.user = res);
  }

  enableEdit() {
    // TODO: Confirm dialog
    this.edit = !this.edit;
    this.location.go(`dashboard/user/edit/${this.user.id}`);
  }

  editUser() {
    this.userService.EditUser(this.user).subscribe();
  }

  deleteUser() {
    // TODO: Confirm dialog
    this.userService.DeleteUser(this.user.id).subscribe(err => { throwError(err)});
    this.router.navigate(['/dashboard']);
  }

}
