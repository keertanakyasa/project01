import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books } from '../services/books.model';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Authors } from '../services/authors.model';
import { AuthorsService } from '../services/authors.service';

declare var M: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {
  // tslint:disable-next-line: no-shadowed-variable
  constructor(public booksService: BooksService, private router: Router, public AuthorsService: AuthorsService) { }
  books: Books[];

  searchValue: string;
  minDate = new Date();
  maxDate = new Date(2100, 12, 31);


options: string[] = ['J.K Rowling', 'C.S Lewis', 'Chetan Baghat', 'John Green', 'Jeff Kinney', 'Enid Blynton', ];
objectOptions = [
  { name : 'J.K Rowling'},
  { name: 'C.S Lewis'},
{name: 'Chetan Baghat' },
{name: 'John Green'},
{name: 'Jeff Kinney'},
{name: 'Enid Blynton'}
];
  public listItems: Array<string> = [];
displayFn(subject): void{
  return subject ? subject.name : undefined;
}

  ngOnInit(): void {
    this.resetForm();
    this.refreshBooksList();
    this.dropdownRefresh();
  }
  resetForm(form?: NgForm): void {
    if (form) {

      form.reset();
    }
    this.booksService.selectedBooks = {
      _id: '',
      BookId: '' ,
      bookname: '',
      Description: '',
      Pagecount: null,
      Publishdate: null,
      Author: ''
    };
  }
  onSubmit(form: NgForm): void {
    if (form.value._id === ''){
this.booksService.postBooks(form.value).subscribe((res) => {
  this.resetForm(form);
  this.refreshBooksList();
  M.toast({ html: 'Saved Successfully', classes: 'rounded' });
});
  }
  else {
    this.booksService.putBooks(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshBooksList();
      M.toast({ html: 'Updated sucessfully', classes: 'rounded' });
    });
  }
  }

refreshBooksList(): void {
  this.booksService.getbooksList().subscribe((res) => {
    this.booksService.Books = res as Books[];
  });
}
onEdit(book: Books): void {

  this.booksService.selectedBooks = book;
}
// tslint:disable-next-line: variable-name
onDelete(_id: string, form: NgForm): void {
if (confirm('Are you sure to delete this record?') === true) {
  this.booksService.deleteBooks(_id).subscribe((res) => {
    this.refreshBooksList();
    this.resetForm(form);
    M.toast({ html: 'Deleted Sucessfully', classes: 'rounded'});
  });
}
}

dropdownRefresh(): void{
this.AuthorsService.getAuthorslist().subscribe((res) => {
  this.AuthorsService.authors = res as Authors[];

});
}


}








