import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [AppComponent, ListBooksComponent],
  imports: [BrowserModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
