import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
<<<<<<< HEAD

=======
>>>>>>> 16495a82a84d463dad860fadc78609c9b7eec8e8
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeRecruiterComponent } from './home-recruiter/home-recruiter.component';
import { HomeJobApplicantComponent } from './home-job-applicant/home-job-applicant.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeRecruiterComponent,
    HomeJobApplicantComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
