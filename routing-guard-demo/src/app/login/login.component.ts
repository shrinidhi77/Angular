import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
    this.router.navigate(['/home']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
