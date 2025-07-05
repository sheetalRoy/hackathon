import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:3000/api/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        console.log('✅ Login Success:', response);
        localStorage.setItem('token', response.token); // Store token
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('❌ Login Failed:', err);
        this.errorMessage = 'Invalid email or password';
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

