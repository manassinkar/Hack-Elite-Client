import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  loginRecruiter(email, password)
  {
    return this.http.post(`${environment.server}/recruiter/login`,{ email, password }).pipe(map(user =>
      {
        console.log("Login Test");
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  loginUser(email, password)
  {
    return this.http.post(`${environment.server}/user/login`,{ email, password }).pipe(map(user =>
      {
        console.log("Login Test");
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  logout()
  {
    localStorage.removeItem('currentUser');
  }

}
