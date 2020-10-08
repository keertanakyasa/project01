import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookslistComponent } from './bookslist.component';



@NgModule({
  declarations: [BookslistComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BookslistComponent
  ]
})
export class BookslistModule { }
