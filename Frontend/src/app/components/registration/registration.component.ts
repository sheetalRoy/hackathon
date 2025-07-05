import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  serverMessage = '';

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: [null, [Validators.min(0)]],
      gender: ['', Validators.required],
      contact: ['']
    });
  }

  // Getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  register() {
    this.submitted = true;

    this.serverMessage = '';

    if (this.registrationForm.invalid) {
      return;
    }

    const data = this.registrationForm.value;

    this.registrationService.register(data).subscribe({
      next: (res) => {
        this.serverMessage = res.message;
        console.log('Registration successful', res);
        this.registrationForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        this.serverMessage = err.error.message || 'Registration failed';
        console.error('Registration error', err);
      }
    });
  }
}