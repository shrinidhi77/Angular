import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  // Function to get form controls for easier access in the template
  get formControls() {
    return this.myForm.controls;
  }


  onSubmit() {
    const registrationData = this.myForm.value;
    this.registrationService.register(registrationData).subscribe(
      (response) => {
        // Handle form submission logic here
        console.log('Form submitted:', this.myForm.value);
        console.log('Registration successful', response);
        // Open the success dialog
        this.dialog.open(SuccessDialogComponent);
      },
      (error) => {
        console.error('Registration failed', error);
        
        // Handle error (e.g., show error message to the user)
      }
    );
    // Reset the form to clear inputs
    this.myForm.reset();
  }
}
