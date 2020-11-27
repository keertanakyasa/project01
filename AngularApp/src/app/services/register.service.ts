import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  submitRegister(body: any){
    return this.http.post('http://localhost:3000/registers', body, {
      observe: 'body'
    });
  }

  // tslint:disable-next-line: typedef
  login(body: any){
    return this.http.post('http://localhost:3000/login', body, {
      observe: 'body'
    });
  }

  // tslint:disable-next-line: typedef
  getUserName() {
    return this.http.get('http://localhost:3000/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

}


