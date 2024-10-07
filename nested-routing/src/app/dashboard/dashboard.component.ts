import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <nav>
      <a routerLink="profile">Profile</a> <br>
      <a routerLink="settings">Settings</a>
    </nav>
    <router-outlet></router-outlet>  <!-- Nested routes are rendered here -->
  `,
  styles: []
})
export class DashboardComponent { }
