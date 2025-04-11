import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  // Navigate to dashboard (optional – routerLink is used in the template)
  navigateToDashboard(): void {
    console.log('Navigating to Dashboard');
    // You can use Router here if needed
  }

  // Logout action
  logout(): void {
    console.log('Logging out...');
    localStorage.removeItem('token');
    this.router.navigate(['our-blog']);
    this.isLoggedIn = false; // Replace with actual logout logic
  }

  // Google Signup
  signupWithGoogle(): void {
    console.log('Signing up with Google...');
    // Add OAuth logic here
  }

  // Facebook Signup
  signupWithFacebook(): void {
    console.log('Signing up with Facebook...');
    // Add OAuth logic here
  }
}
