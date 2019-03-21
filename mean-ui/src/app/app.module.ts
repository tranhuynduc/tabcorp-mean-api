import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksFormComponent } from './components/books/books-form/books-form.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { BooksDetailComponent } from './components/books/books-detail/books-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksFormComponent,
    BooksListComponent,
    BooksDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
