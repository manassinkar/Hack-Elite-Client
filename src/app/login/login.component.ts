import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errMsg: String = "";
  constructor(private authService: AuthService, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
      role: ['can']
    });
  }

  public get email()  {
    return this.loginForm.controls.email;
  }

  public get password()  {
    return this.loginForm.controls.password;
  }

  public get role()  {
    return this.loginForm.controls.role;
  }


  onSubmit()
  {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const role = this.loginForm.get('role').value;
    if(role=="rec")
    {
      this.authService.loginRecruiter(email,password).subscribe(
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
      this.authService.loginUser(email,password).subscribe(
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
