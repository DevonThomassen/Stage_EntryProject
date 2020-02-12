import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!localStorage.getItem('token')) {
      console.log('Nope');
      return next.handle(request);
    }
    console.log('Yep');
    const req = request.clone({
      headers: request.headers.set('Authorization', `Basic ${localStorage.getItem('token')}`)
    });

    return next.handle(req);
  }
}
