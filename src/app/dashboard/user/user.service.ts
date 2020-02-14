import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../interface/User';
import { HttpClient } from '@angular/common/http';

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


  getUser() {

  }

  getUserById(id: number): Observable<User> {
    return this.http.get(`/users/${id}`).pipe(
      tap((data: User) => console.log(data))
    );
  }
}
