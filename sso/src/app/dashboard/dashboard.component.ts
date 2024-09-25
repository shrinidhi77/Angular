// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apiUrl = 'http://localhost:3000'; // Your API URL
  user: any;

  constructor(private authService: AuthService,private http: HttpClient) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (data) => {
        console.log("User data -->", data)
        this.user = data;
      },
      (err) => {
        console.error('Error fetching user:', err);
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }

  refreshtoken(): void {
    this.http.get(`${this.apiUrl}/api/refresh-token`, { withCredentials: true }).subscribe(
      (res: any) => {
        console.log('Token refreshed', res.accessToken);
        localStorage.setItem('accessToken', res.accessToken);
      },
      (err) => {
        console.error('Failed to refresh token', err);
      }
    );    
  }
}
