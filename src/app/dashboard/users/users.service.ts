import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/interface/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/users?offset=0&limit=104').pipe(
      tap((data: { data: User[], total: number }) => {
        console.log(['data', data]);
      })
    );
  }

}
