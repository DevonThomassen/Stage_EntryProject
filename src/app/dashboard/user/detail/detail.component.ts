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

  msgEdit: string;
  msgDelete: string;
  openDialogEdit = false;
  openDialogDelete = false;

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
    this.edit = !this.edit;
    this.location.go(`dashboard/user/edit/${this.user.id}`);
  }

  editUser() {
    this.msgEdit = 'Are you sure, you want to save the new data?';
    this.openDialogEdit = !this.openDialogEdit;
  }

  deleteUser() {
    this.msgDelete = 'Are you sure, you want to delete the user?';
    this.openDialogDelete = !this.openDialogDelete;

  }

  backward() {
    // TODO: Fix negatives and non existing users
    this.userService.getUserById(this.user.id - 1).subscribe(res => this.user = res);
    this.router.navigate([`dashboard/user/detail/${this.user.id - 1}`]);
  }

  forward() {
    // TODO: Fix more than total and non existing users
    this.userService.getUserById(this.user.id + 1).subscribe(res => this.user = res);
    this.router.navigate([`dashboard/user/detail/${this.user.id + 1}`]);
  }

  toggleEdit() {
    this.openDialogEdit = !this.openDialogEdit;
  }

  confirmedEdit() {
    this.toggleEdit();
    this.userService.EditUser(this.user).subscribe();
    this.router.navigate(['/dashboard']);
  }

  toggleDelete() {
    this.openDialogDelete = !this.openDialogDelete;
  }

  confirmedDelete() {
    this.toggleDelete();
    this.userService.DeleteUser(this.user.id).subscribe(err => throwError(err));
    this.router.navigate(['/dashboard']);
  }

}
