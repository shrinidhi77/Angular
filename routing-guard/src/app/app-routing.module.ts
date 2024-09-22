import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuardService } from './access.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';

import { LoginGuardService } from './login-gaurd.service';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'login', component: LoginComponent},
    { path: 'bookList', component: BookComponent },
    { path: 'book/:id', component: BookDetailsComponent,canActivate:[LoginGuardService]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
