import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class HomeComponent {
  healthInfo = [
    {
      title: 'Book Appointment',
      description: 'Easily schedule an appointment with our experienced healthcare professionals.',
      link: '/bookappointment',
      functionName: 'bookAppointment',
      buttonText: 'Book Now'
    },
    {
      title: 'Latest Health Info',
      description:
        'Stay updated with the latest developments in health, nutrition, and medical research.',
      buttonText: 'Read More',
      link: '#'
    },
    {
      title: 'Seasonal Flu',
      description:
        'Learn how to protect yourself and your family during flu season with tips and vaccinations.',
      buttonText: 'Learn More',
      link: '#'
    },
    {
      title: 'Mental Awareness',
      description:
        'Discover resources and support for mental well-being, stress management, and emotional health.',
      buttonText: 'Explore',
      link: '#'
    }
  ];
  patients: any[] = [];

  constructor(private registrationService: RegistrationService, commonService: CommonService) {}

  getPatients(event: Event) {
    event.preventDefault();
    this.registrationService.getPatients().subscribe({
      
      next: (res) => {
        console.log('Full response from API:', res);
        this.patients = res.patients;  // assuming response has patients array
        console.log('Patients:', this.patients);
      },
      error: (err) => {
        console.error('Error fetching patients', err);
      }
    });
  }

  // bookAppointment(){
  //   this.commonService.bookAppointment()
  // }
  
}
