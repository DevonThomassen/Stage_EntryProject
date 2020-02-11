import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public getToken(): string {
    return '';
  }

  public isAuthenticated(): boolean {
    // Get the token
    const token = this.getToken();
    return;
  }

}
