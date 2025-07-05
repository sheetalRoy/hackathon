import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./book.component.css']
})

export class AppointmentListComponent implements OnInit {
  
  appointments: any[] = [];
  

  constructor( private commonService: CommonService) {}

  ngOnInit(): void {
    this.getAppointmentDetails();
  }

  getAppointmentDetails(): void {
    this.commonService.getAppointments().subscribe({
      
      next: (res) => {
        console.log(res)
        this.appointments = res;
      //   console.log('Appointments:', this.appointments);
      },
      error: (err) => {
        console.error('Error fetching appointments', err);
      }
    });
  }
  
}
