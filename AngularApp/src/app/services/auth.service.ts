import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
// tslint:disable-next-line: typedef
isUserLoggedIn(){

 return !! localStorage.getItem('token');

  }
}
