import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { throwError } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user = new FormGroup({
    identity: new FormGroup({
      id: new FormControl(0),
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    }),
    personal: new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      avatar: new FormControl('', [
        Validators.required
      ])
    }),
    data: new FormGroup({
      created_at: new FormControl('', [
        Validators.required
      ]),
      updated_at: new FormControl('', [
        Validators.required
      ])
    })
  });

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
    this.userService.getUserById(id).subscribe(res => this.initializeUser(res));
  }

  enableEdit() {
    this.edit = !this.edit;
    // this.location.go(`dashboard/user/edit/${this.user.value.id}`);
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
    this.userService.getUserById(this.user.value.identity.id - 1).subscribe(res => this.initializeUser(res));
    this.router.navigate([`dashboard/user/detail/${this.user.value.identity.id - 1}`]);
  }

  forward() {
    // TODO: Fix more than total and non existing users
    this.userService.getUserById(this.user.value.identity.id + 1).subscribe(res => this.initializeUser(res));
    this.router.navigate([`dashboard/user/detail/${this.user.value.identity.id + 1}`]);
  }

  toggleEdit() {
    this.openDialogEdit = !this.openDialogEdit;
  }

  confirmedEdit() {
    this.toggleEdit();
    this.userService.EditUser(this.user.value).subscribe();
    this.router.navigate(['/dashboard']);
  }

  toggleDelete() {
    this.openDialogDelete = !this.openDialogDelete;
  }

  confirmedDelete() {
    this.toggleDelete();
    this.userService.DeleteUser(this.user.value.identity.id).subscribe(err => throwError(err));
    this.router.navigate(['/dashboard']);
  }

  initializeUser(res: User) {
    this.user = new FormGroup({
      identity: new FormGroup({
        id: new FormControl(res.id),
        email: new FormControl(res.email, [
          Validators.required
        ]),
        password: new FormControl(res.password, [
          Validators.required
        ])
      }),
      personal: new FormGroup({
        firstName: new FormControl(res.firstName, [
          Validators.required
        ]),
        lastName: new FormControl(res.lastName, [
          Validators.required
        ]),
        avatar: new FormControl(res.avatar, [
          Validators.required
        ])
      }),
      data: new FormGroup({
        created_at: new FormControl(res.created_at, [
          Validators.required
        ]),
        updated_at: new FormControl(res.updated_at, [
          Validators.required
        ])
      })
    });
  }

}
