import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidCredentialMsg: string = '';
  loginForm!: FormGroup;
  constructor(private router: Router, private formbuilder: FormBuilder, public ls:LoginService) {
    this.loginForm = this.formbuilder.group({
      username: [],
      password: []
    });
  }

  onFormSubmit() {
    let uname = this.loginForm.get('username')!.value;
    let pwd = this.loginForm.get('password')!.value;
    this.ls.isUserAuthenticated(uname, pwd).subscribe(
      (            authenticated: any) => {
            if (authenticated) {
                this.router.navigate(['/bookList']);
            } else {
                this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
            }
        }
    );
  }
} 
