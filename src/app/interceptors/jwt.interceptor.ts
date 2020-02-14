import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!this.auth.token) {
      console.log('Ingelogd: Nope');
      return next.handle(request);
    }
    console.log('Ingelogd: Yep');
    const req = request.clone({
      headers: request.headers.set('Authorization', `Basic ${this.auth.token}`)
    });

    return next.handle(req);
  }
}
