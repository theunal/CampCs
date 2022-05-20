import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = localStorage.getItem('token');
    let newRequest : HttpRequest<any>; // requestin (add,delete,update) içine token eklemek için yeni bir request oluşturuyoruz.

    newRequest = request.clone({
      headers: token? request.headers.set('Authorization', 'Bearer ' + token) : request.headers
    })

    return next.handle(newRequest);
  }
}
