import { Component, OnInit, ViewChild} from '@angular/core';
import { Books } from '../services/books.model';
import { NgForm} from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { Router, RouterModule, Routes } from '@angular/router';
import { BooksService } from '../services/books.service';
import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
declare var M: any;

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css'],
  providers: [BooksService]

})
export class BookslistComponent implements OnInit {
displayedColumns = ['bookname', 'Description', 'Pagecount', 'Publishdate', 'Author'];
dataSource;
@ViewChild(MatSort) sort: MatSort;

 constructor(public booksService: BooksService, private router: Router) {}
 books: Books[] = [];
bookname: any;

ngOnInit(): void {
this.refreshBooksList();
}

  // tslint:disable-next-line: typedef
  btnClick(){

    this.router.navigate(['']);
}
// tslint:disable-next-line: typedef
click(book){
  this.booksService.setter(book);
  this.router.navigate(['']);

}
  refreshBooksList(): void {

    this. booksService.getbooksList().subscribe((res) => {
 this.booksService.Books = res as Books[];
 this.dataSource = new MatTableDataSource(this.booksService.Books);
 this.dataSource.sort = this.sort;

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

onEdit(book: Books): void {
  this.booksService.selectedBooks = book;


}
// tslint:disable-next-line: variable-name
onDelete(_id: string, form: NgForm): void {
  if (confirm('Are you sure to delete this record?') === true) {
    this.booksService.deleteBooks(_id).subscribe((res) => {
      this.refreshBooksList();
      this.resetForm(form);
      M.toast({ html: 'Deleted Sucessfully', classes: 'rounded' });
    });
  }
}

}
