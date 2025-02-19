import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BookComponent } from './components/book/book.component';
import { MainPageComponent } from './pages/main-page.component';
import { provideHttpClient } from '@angular/common/http';
import { InputBooksNumberComponent } from './components/input-books-number/input-books-number.component';

@NgModule({
  declarations: [ListBooksComponent, BookComponent, MainPageComponent, InputBooksNumberComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
  providers: [provideHttpClient()],
})
export class BooksModule {}
