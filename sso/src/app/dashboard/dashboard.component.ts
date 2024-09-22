// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (data) => {
        console.log("User data -->",data)
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
}
