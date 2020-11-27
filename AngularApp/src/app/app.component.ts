import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {ViewContainerRef,  ComponentFactoryResolver} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';

constructor(private cvRef: ViewContainerRef, private resolver: ComponentFactoryResolver){}
 // tslint:disable-next-line: typedef
 async loadlazy() {
this.cvRef.clear();
const{BooksComponent} = await import('./books/books.component');
this.cvRef.createComponent(this.resolver.resolveComponentFactory(BooksComponent));
}


}


