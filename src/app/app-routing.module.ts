import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeRecruiterComponent } from './home-recruiter/home-recruiter.component';
import { HomeJobApplicantComponent } from './home-job-applicant/home-job-applicant.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
   
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home-recruiter',
    component: HomeRecruiterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
