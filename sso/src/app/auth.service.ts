// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Backend Node.js URL

  constructor(private http: HttpClient) {}

  // Get authenticated user
  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/user`, { withCredentials: true });
  }

  // Trigger OAuth login by redirecting to Node.js backend
  login(): void {
    window.location.href = `${this.apiUrl}/auth/google`;
  }

  // Logout the user
  logout(): void {
    window.location.href = `${this.apiUrl}/auth/logout`;
  }

 
}
