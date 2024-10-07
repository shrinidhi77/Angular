import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Page</h1>
    <a routerLink="/dashboard">Go to Dashboard</a>
  `,
  styles: []
})
export class HomeComponent { }
