import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-Search-filter';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BooksService } from './services/books.service';
import { from } from 'rxjs';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


import { MaterialModule } from './material.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { AuthGuard } from './auth.guard';
import {TestingInterceptor} from './testing.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookslistComponent,
    NewComponentComponent,
    LoginComponent,


],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
    MaterialModule,



  ],
  providers: [BooksService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TestingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
