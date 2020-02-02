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
  filename: string = '';
  fileToUpload: File = null;
  constructor(private authService: AuthService, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      firstName: [''],
      lastName: [''],
      password: [''],
      role: ['can'],
      file: [''],
      companyName: ['']
    });
    this.fileToUpload = null;
    this.filename = 'Choose A File';
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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);
      this.fileToUpload = event.target.files[0];
      this.registerForm.get('file').setValue(file);
      this.filename = event.target.files[0].name;
    }
  }

  onSubmit()
  {
    const role = this.registerForm.get('role').value;
    if(role=="rec")
    {
      const email = this.registerForm.get('email').value;
      const password = this.registerForm.get('password').value;
      const companyName = this.registerForm.get('companyName').value;
      this.authService.registerRecruiter(email,password,companyName).subscribe(
        user=>{
          this.errMsg = '';
          this.router.navigate(['/login']);
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
      const formData = new FormData();
      // formData.append('file', this.registerForm.get('file').value);
      formData.append('lastName', this.registerForm.get('lastName').value);
      formData.append('firstName', this.registerForm.get('firstName').value);
      formData.append('email', this.registerForm.get('email').value);
      formData.append('password', this.registerForm.get('password').value);
      if(this.fileToUpload)
      {
        formData.append('file', this.fileToUpload, this.fileToUpload.name);
        // console.log(formData);
        this.authService.registerUser(formData).subscribe(
          user=>{
            this.errMsg = '';
            this.fileToUpload = null;
            this.router.navigate(['/login']);
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
        console.log('No file Chosen');
      }
    }
  }
}
