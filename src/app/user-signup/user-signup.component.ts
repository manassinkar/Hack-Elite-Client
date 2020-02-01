import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  public registerForm: FormGroup;
  public errMsg: String = "";
  constructor(private authService: AuthService, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      firstName: [''],
      lastName: [''],
      password: [''],
      role: ['can'],
      resume: [''],
      companyName: ['']
    });
  }

  public get email()  {
    return this.registerForm.controls.email;
  }
  public get firstName()  {
    return this.registerForm.controls.firstName;
  }
  public get lastName()  {
    return this.registerForm.controls.lastName;
  }
  public get companyName()  {
    return this.registerForm.controls.companyName;
  }

  public get password()  {
    return this.registerForm.controls.password;
  }

  public get role()  {
    return this.registerForm.controls.role;
  }

  public get resume()  {
    return this.registerForm.controls.resume;
  }


  onSubmit()
  {
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    const role = this.registerForm.get('role').value;
    if(role=="rec")
    {
      const companyName = this.registerForm.get('companyName').value;
      this.authService.registerRecruiter(email,password,companyName).subscribe(
        user=>{
          this.errMsg = '';
          this.router.navigate(['/home-recruiter']);
        },
        error=>
        {
          console.log(error);
          this.errMsg = error.error.message;
        }
      )
    }
    else
    {
      const firstName = this.registerForm.get('firstName').value;
      const lastName = this.registerForm.get('lastName').value;
      const resume = this.registerForm.get('resume').value;
      this.authService.registerUser(email,password,firstName,lastName,resume).subscribe(
        user=>{
          this.errMsg = '';
          this.router.navigate(['/home-job-applicant']);
        },
        error=>
        {
          this.errMsg = error.error.message;
        }
      )
    }
  }
}
