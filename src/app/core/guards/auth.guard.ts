// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) { }

  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('token');

    console.log("dfdfd", this.router.url);

    if (token) {
      return true;
    } else {
      // Redirect to login if no token
      return this.router.parseUrl('/login');
    }
  }
}
