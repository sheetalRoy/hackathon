import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  bookAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book/bookAppointment`, appointmentData);
  }

  getSpecialists(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/book/specialists`);
  }
  
  getDoctors():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/book/doctors`);
  }

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/appointments');
  }
}
