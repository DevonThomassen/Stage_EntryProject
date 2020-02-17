import { Component, OnInit } from '@angular/core';
import { AddUser } from '../../../interface/AddUser';
import { HttpClient } from '@angular/common/http';
import { ManagementService } from './management.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  public user: AddUser = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  public error: string;

  constructor(private managementService: ManagementService) { }

  ngOnInit(): void {
  }

  Submit() {
    this.managementService.AddUser(this.user).subscribe(res => console.log(res), err => this.error = err);
  }

}
