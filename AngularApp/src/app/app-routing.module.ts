import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { LoginComponent } from './login/login.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path : 'books',
    component: BooksComponent,
    canActivate: [AuthGuard]
},


  {
  path: 'list',
  component: BookslistComponent,
canActivate: [AuthGuard]

  },
{
  path: '',
component: LoginComponent,


},
{
  path: 'register',
  component: NewComponentComponent
},
{ path: 'login',
 component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
