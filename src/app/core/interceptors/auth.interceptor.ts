import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    const headers: { [key: string]: string } = {
      'ngrok-skip-browser-warning': 'true', // ✅ Always added
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const cloned = req.clone({
      setHeaders: headers
    });

    return next.handle(cloned);
  }
}
