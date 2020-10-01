import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Books } from './books.model';

@Injectable()
export class BooksService {
  selectedBooks: Books;
  Books:Books[];
  readonly baseURL= 'http://localhost:3000/books/';

  constructor(private http: HttpClient) { }

  postBooks(book: Books){
return this.http.post(this.baseURL, book);
  }
  getbooksList(){
    return this.http.get(this.baseURL);

  }
  putBooks(book:Books){
    return this.http.put(this.baseURL + '/${book.BookId}', book);
  }
  deleteBooks(BookId:string){
return this.http.delete(this.baseURL + '/${BookId}');
  }


}
