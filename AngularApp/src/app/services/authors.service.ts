import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Authors} from './authors.model';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors: Authors[];
  readonly baseURI = 'http://localhost:3000/authors';
  constructor(private http: HttpClient ) { }


// tslint:disable-next-line: no-unused-expression
// tslint:disable-next-line: typedef
getAuthorslist(){
  return this.http.get(this.baseURI);
}
}
