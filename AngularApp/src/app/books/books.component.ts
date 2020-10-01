import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books } from '../shared/books.model';

import { BooksService } from '../shared/books.service'
declare var M: any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {

  constructor(public booksService: BooksService) { }

  ngOnInit(){
    this.resetForm();
    this.refreshBooksList();
  }
  resetForm(form?:NgForm) {
    if(form)
    form.reset();
    this.booksService.selectedBooks = {
      BookId:null ,
      Title:"",
      Description:"",
      Pagecount:null,
      Publishdate:null,
      Author:""
    }
  }
  onSubmit(form : NgForm){
    if(form.value.BookId == ""){
this.booksService.postBooks(form.value).subscribe((res) => {
  this.resetForm(form);
  this.refreshBooksList();
M.toast({ html:'Saved Successfully', classes:'rounded' });
});
  }
else {
this.booksService.postBooks(form.value).subscribe((res) => {
  this.resetForm(form);
  this.refreshBooksList();
  M.toast({ html: 'Updated sucessfully', classes:'rounded'});
});
  }
  }
refreshBooksList(){
  this.booksService.getbooksList().subscribe((res)=> {
    this.booksService.Books = res as Books[];
  })
}
onEdit(book: Books){
  this.booksService.selectedBooks = book;
}
onDelete(BookId:string, form:NgForm){
if(confirm('Are you sure to delete this record?') == true) {
  this.booksService.deleteBooks(BookId).subscribe((res)=>{
    this.refreshBooksList();
    this.resetForm(form);
    M.toast({ html:'Deleted Sucessfully', classes:'rounded'});
  });
}
}




    }






