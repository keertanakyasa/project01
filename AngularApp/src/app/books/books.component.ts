import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books } from '../services/books.model';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Authors } from '../services/authors.model';
import { AuthorsService } from '../services/authors.service';
import { FormControl } from '@angular/forms';



declare var M: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  // tslint:disable-next-line: no-shadowed-variable
  BookID = new FormControl('');
  BookName = new FormControl('');
  authors: Authors[];
  books: Books[];
  searchValue: string;
  minDate = new Date();
  maxDate = new Date(2100, 12, 31);
  selectedBook: Books;
  buttonText = 'Add';



  // tslint:disable-next-line: no-shadowed-variable
  constructor(public booksService: BooksService, private router: Router, public AuthorsService: AuthorsService) {
   console.log(this.booksService.selectedBooks);
   if ( this.booksService.selectedBooks){
    this.selectedBook = this.booksService.selectedBooks;
   }
  else if (!this.booksService.selectedBooks && localStorage.getItem('Array')){
    this.selectedBook = JSON.parse( localStorage.getItem('Array'));
    console.log('selected book is::::' + this.selectedBook);
   }
   else if (!this.booksService.selectedBooks && !localStorage.getItem('Array')){
    this.selectedBook = {
      _id: '',
      BookId: '' ,
      bookname: '',
      Description: '',
      Pagecount: null,
      Publishdate: null,
      Author: ''
     };
   }
  //  else{
  //    this.selectedBook = {
  //     _id: '',
  //     BookId: '' ,
  //     bookname: '',
  //     Description: '',
  //     Pagecount: null,
  //     Publishdate: null,
  //     Author: ''
  //    };
  //  }

   }

public listItems: any[] = [];
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

  buttonChange(): void {
    this.buttonText = 'Edit';
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
this.AuthorsService.getAuthorslist().subscribe(data => {
  console.log(data);
  const array = Object.entries(data);
  console.log(array);
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < array.length; i++) {

console.log(array[i][1].Firstname);
this.listItems.push(array[i][1].Firstname);
console.log(this.listItems);
 }

  });



}
}








