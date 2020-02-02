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
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  loginUser(email, password)
  {
    return this.http.post(`${environment.server}/user/login`,{ email, password }).pipe(map(user =>
      {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  registerRecruiter(email, password,companyName)
  {
    return this.http.post(`${environment.server}/recruiter/register`,{ email, password, companyName }).pipe(map(user =>
      {
        return user;
      }));
  }

  registerUser(data:FormData)
  {
    return this.http.post(`${environment.server}/user/register`,data).pipe(map(user =>
      {
        return user;
      }));
  }

  getCategories()
  {
    return this.http.get(`${environment.server}/user/getCategories`).pipe(map(category =>
      {
        return category;
      }));
  }

  getCandidatesByCategory(category)
  {
    return this.http.get(`${environment.server}/user/usersByCategory?category=`+category).pipe(map(candidates =>
      {
        return candidates;
      }));
  }

  logout()
  {
    localStorage.removeItem('currentUser');
  }

}
