import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isLoggedIn = false;

  // Navigate to dashboard (optional – routerLink is used in the template)
  navigateToDashboard(): void {
    console.log('Navigating to Dashboard');
    // You can use Router here if needed
  }

  // Logout action
  logout(): void {
    console.log('Logging out...');
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
