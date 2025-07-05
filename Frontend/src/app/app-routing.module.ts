import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './components/app-login.component';
import { HomeComponent } from './components/home/app-home.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { BookAppointmentComponent } from './components/bookappointment/book.component';
import { AppointmentListComponent } from './components/bookappointment/appointment-list.component';
//import { AppLoginComponent } from './components/app-login.module';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AppLoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'bookappointment', component: BookAppointmentComponent, canActivate: [AuthGuard] },
  { path: 'appointmentList', component: AppointmentListComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
