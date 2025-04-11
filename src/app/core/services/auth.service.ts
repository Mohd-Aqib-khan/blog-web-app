import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor( private authService: SocialAuthService, private http: HttpService) {

  }
  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
    //   this.user = user;
    //   // Send token to backend
    //   this.http.post<{access_token: string}>('auth/google', {
    //     idToken: user.idToken
    //   }).subscribe(response => {
    //     console.log('JWT from server:', response);
    //   });
    // });
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      console.log("dfsffsdfdfj@@#", user);
      this.user = user;
      this.http.post<{ access_token: string }>('auth/facebook', {
        authToken: user.authToken
      }).subscribe(response => {
        console.log('JWT from server:', response);
      });
    });
  }
}
