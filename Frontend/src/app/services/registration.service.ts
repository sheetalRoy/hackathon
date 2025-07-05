import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegistrationData {
  fullName: string;
  email: string;
  password: string;
  age?: number;
  gender: string;
  contact?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000/api/register';
  private patientsUrl = 'http://localhost:3000/api/patients';

  constructor(private http: HttpClient) {}

  register(data: RegistrationData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getPatients(): Observable<any> {
    console.log('hhhh')
    return this.http.get<any>(this.patientsUrl);
  }
}
