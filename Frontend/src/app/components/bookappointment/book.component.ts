import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookAppointmentComponent implements OnInit {
  
  appointmentForm!: FormGroup;
  specialists: string[] = [];
  doctors: any = [];
  filteredDoctors: any[] = []; 

  selectedSpecialist: string = '';
  selectedDoctor: string = '';
  timeSlots: string[] = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM'
  ];
  errorMsg:string = '';
  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit(): void {
    this.getSpecialists();
    this.getDoctors();
    this.appointmentForm = this.fb.group({
      specialist: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      timeSlot: ['', Validators.required],
      reasonForVisit: ['', Validators.required],
      additionalNotes: ['']
    });
  }

  getSpecialists(): void {
    this.commonService.getSpecialists().subscribe({
      next: (res) => {
        this.specialists = res.specialists || [];
        console.log('Specialists fetched:', this.specialists);
      },
      error: (err) => {
        console.error('Error fetching specialists', err);
      }
    });
  }

  getDoctors(): void {
    this.commonService.getDoctors().subscribe({
      next: (res) => {
        this.doctors = res.doctors || [];
        console.log('Doctor fetched:', this.doctors);
      },
      error: (err) => {
        console.error('Error fetching specialists', err);
      }
    });
  }

  onSpecialistChange(event: Event): void {
    const selectedSpecialist = (event.target as HTMLSelectElement).value;
    this.filteredDoctors = this.doctors.filter(
      (doc:any) => doc.specialty === selectedSpecialist
    );
  }

  book() {
    if (this.appointmentForm.invalid) {
      alert('Please fill all required fields');
      return;
    }

    console.log('Booking Data:', this.appointmentForm.value);
  
    // Call your service to send appointment data to backend API
    this.commonService.bookAppointment(this.appointmentForm.value).subscribe({
      next: (res) => {
        alert('Appointment booked successfully!');
        console.log('Booking response:', res);
        // Reset form or redirect as needed
      },
      error: (err) => {
        console.error('Booking failed:', err);
        this.errorMsg = err.message;
        alert('Failed to book appointment. Please try again.');
      }
    });
}
}
