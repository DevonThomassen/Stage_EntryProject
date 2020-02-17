import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddUser } from 'src/app/interface/AddUser';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http: HttpClient) { }

  AddUser(user: AddUser) {
    return this.http.post('/users', user).pipe();
  }

  EditUser(user: UpdateUser) {

  }
}
