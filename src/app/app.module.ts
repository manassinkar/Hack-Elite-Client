import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeRecruiterComponent } from './home-recruiter/home-recruiter.component';
import { HomeJobApplicantComponent } from './home-job-applicant/home-job-applicant.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ShortlistedCandidatesComponent } from './shortlisted-candidates/shortlisted-candidates.component';
import { ExploreCandidatesComponent } from './explore-candidates/explore-candidates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeRecruiterComponent,
    HomeJobApplicantComponent,
    UserSignupComponent,
    ShortlistedCandidatesComponent,
    ExploreCandidatesComponent
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
