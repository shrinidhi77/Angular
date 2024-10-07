import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'; 
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [
    RegisterComponent,
    SuccessDialogComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatDialogModule, 
    MatButtonModule,
    HttpClientModule
  ],
  providers: [RegistrationService],
})
export class RegisterModule { }
