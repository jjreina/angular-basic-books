import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BookComponent } from './components/book/book.component';
import { MainPageComponent } from './pages/main-page.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ListBooksComponent, BookComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
  providers: [provideHttpClient()],
})
export class BooksModule {}
