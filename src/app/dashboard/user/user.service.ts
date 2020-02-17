import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../interface/User';
import { AddUser } from 'src/app/interface/AddUser';
import { UpdateUser } from 'src/app/interface/UpdateUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(offset: number, limit: number): Observable<{ data: User[], total: number }> {
    return this.http.get(`/users?offset=${offset}&limit=${limit}`).pipe(
      tap((data: { data: User[], total: number }) => {
        console.log(['data', data]);
      })
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(`/users/${id}`).pipe(
      tap((data: User) => console.log(data))
    );
  }

  AddUser(user: AddUser) {
    return this.http.post('/users', user).pipe();
  }

  EditUser(user: UpdateUser) {
    return this.http.put(`/users/${user.id}`, user);
  }

  DeleteUser(id: number) {
    return this.http.delete(`/users/${id}`);
  }
}
