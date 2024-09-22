import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { LoginService} from "./login/login.service";
import {LoginGuardService} from './login-gaurd.service';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  imports: [BrowserModule, HttpClientModule,AppRoutingModule,ReactiveFormsModule,FormsModule],
  declarations: [AppComponent, BookComponent, BookDetailsComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
