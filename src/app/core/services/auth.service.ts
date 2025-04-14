import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor( private authService: SocialAuthService, private http: HttpService, private router: Router) {

  }
  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
    //   this.user = user;
    //   // Send token to backend11
    //   this.http.post<{access_token: string}>('auth/google', {
    //     idToken: user.idToken
    //   }).subscribe(response => {
    //     console.log('JWT from server:', response);
    //   });
    // });1

  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      console.log("dfsffsdfdfj@@#", user);
      this.user = user;
      this.http.post<{ access_token: string }>('auth/facebook-login', {
        authToken: user.authToken
      }).subscribe(response => {
        console.log('JWT from server:', response);
        console.log('JWT from server:', response);
        localStorage.setItem('token', response.data.access_token);
        this.router.navigate(['/dashboard']);
      });
    });
  }

  login(email: string, password: string) {
    return this.http.post<{ access_token: string }>('auth/login', {
      email,
      password
    })
  };

  registration(email: string, password: string, name: string) {
    return this.http.post<{ access_token: string }>('auth/registration', {
      email,
      password,
      name
    })
   }
}
