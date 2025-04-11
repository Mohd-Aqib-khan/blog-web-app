import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

declare const google: any;

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() switchToSignup = new EventEmitter<void>();
  email = '';
  password = '';
  hidePassword = true;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: response => {
          const token = response?.data?.access_token;
          if (token) {
            localStorage.setItem('token', token);
            this.router.navigate(['/dashboard']);
          }
        },
        error: err => {
          console.error('Login failed:', err);
        },
      });
      console.log('Login Form:', this.loginForm.value);
    }
  }

  callGoogleSign() {
    this.authService.signInWithGoogle();
  }

  clickFace() {
    this.authService.signInWithFacebook();
  }
  ngAfterViewInit(): void {
    this.renderGoogleButton();
  }

  renderGoogleButton(): void {
    // Ensure google object is available
    if (window.google && google.accounts && google.accounts.id) {
      google.accounts.id.renderButton(document.querySelector('.g_id_signin'), {
        theme: 'outline',
        size: 'large',
        shape: 'circle',
        type: 'icon',
        text: 'signin_with',
      });
    }
  }
}
