import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookslistComponent } from './bookslist/bookslist.component';


const routes: Routes = [
  {
    path : '',
    component: BooksComponent
  },

  {
  path: 'list',
  component: BookslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
