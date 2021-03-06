import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Books } from './books.model';
import { Authors } from './authors.model';

@Injectable()
export class BooksService {
  selectedBooks: Books;

  Books: Books[];
  Authors: Authors[];
  readonly baseURL = 'http://localhost:3000/books';
  readonly baseURI = 'http://localhost:3000/authors';
  sort: any;
 // BooksService: any;
  // AuthorsService: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  postBooks(book: Books) {
return this.http.post(this.baseURL, book);
  }

  getSelectedBook(book): void{
this.selectedBooks = book;
this.sendToBooksComponent();
  }
  // tslint:disable-next-line: typedef
  sendToBooksComponent(){
    // debugger;
    return this.selectedBooks;
  }
  // tslint:disable-next-line: typedef
  getbooksList()  {
    return this.http.get(this.baseURL);

  }

  // tslint:disable-next-line: typedef
  putBooks(book: Books) {
    console.log('book>>', book);
    return this.http.put(this.baseURL + `/${book._id}`, book);
  }
 // tslint:disable-next-line: typedef
 // tslint:disable-next-line: variable-name
 // tslint:disable-next-line: typedef
 // tslint:disable-next-line: variable-name
 // tslint:disable-next-line: typedef
 deleteBooks(_id: string) {
return this.http.delete(this.baseURL +  `/${_id}`);
  }

// tslint:disable-next-line: typedef
// tslint:disable-next-line: variable-name
// tslint:disable-next-line: typedef
getAuthorslist(): Observable<any>{
  return this.http.get<Authors[]>(this.baseURI + '/authors');
}

}
