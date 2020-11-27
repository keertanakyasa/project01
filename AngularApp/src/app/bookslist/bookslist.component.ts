// import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Books } from '../services/books.model';
import { NgForm} from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { Router, RouterModule, Routes } from '@angular/router';
import { BooksService } from '../services/books.service';
import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {ViewContainerRef, ComponentFactoryResolver} from '@angular/core';


declare var M: any;

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css'],

})
export class BookslistComponent implements OnInit {
displayedColumns = ['bookID', 'bookname', 'Description', 'Pagecount', 'Publishdate', 'Author', 'actions'];
dataSource: any;
@ViewChild(MatSort, {static: false}) sort: MatSort;


 // tslint:disable-next-line: max-line-length
 constructor(public booksService: BooksService, private router: Router , private cvRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
   this.refreshBooksList();
 }

// tslint:disable-next-line: member-ordering
books: Books[] = [];
// tslint:disable-next-line: member-ordering
bookname: any;
// tslint:disable-next-line: typedef
applyFilter(filterValue: string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngOnInit(): void {
// this.booksService.selectedBooks = JSON.parse(localStorage.getItem('Array'));
}
  // tslint:disable-next-line: typedef
  btnClick(){

    localStorage.removeItem('Array');
    this.router.navigate(['books']);
}


 refreshBooksList(): void {

    this. booksService.getbooksList().subscribe((res) => {
 this.booksService.Books = res as Books[];
 this.dataSource = new MatTableDataSource(this.booksService.Books);
 this.dataSource.sort = this.sort;
 console.log(res);

});
 }
 Search(): void{
if (this.bookname === '') {
  this.ngOnInit();
 }else{
   this.booksService.Books = this.booksService.Books.filter(res => {
     return res.bookname.toLocaleLowerCase().match(this.bookname.toLocaleLowerCase());
   });
 }

}

//    resetForm(form?: NgForm): void {
//     if (form) {

//       form.reset();
//     }
//     this.booksService.selectedBooks = {
//       _id: '',
//       BookId: '' ,
//       bookname: '',
//       Description: '',
//       Pagecount: null,
//       Publishdate: null,
//       Author: ''
//     };
// }

onEdit(book: Books): void {
  this.booksService.selectedBooks = book;
  console.log(this.booksService.selectedBooks);
  localStorage.setItem('Array', JSON.stringify(book));
  this.router.navigate(['/books']);
}
// tslint:disable-next-line: variable-name
onDelete(_id: string, form: NgForm): void {
  if (confirm('Are you sure to delete this record?') === true) {
    this.booksService.deleteBooks(_id).subscribe((res) => {
      this.refreshBooksList();
     // this.resetForm(form);
      M.toast({ html: 'Deleted Sucessfully', classes: 'rounded' });
    });
  }
}

}
