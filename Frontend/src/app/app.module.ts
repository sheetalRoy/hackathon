import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './components/app-login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/app-home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BookAppointmentComponent } from './components/bookappointment/book.component';
import { AppointmentListComponent } from './components/bookappointment/appointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
    RegistrationComponent,
    BookAppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
