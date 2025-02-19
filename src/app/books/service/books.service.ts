import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book, BookResonse } from '../interfaces/books.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url = 'http://localhost:3001/books';
  constructor(private http: HttpClient) {}

  public getTerrorBooks(numberOfBooks: number): Observable<Book[]> {
    return this.http.get<BookResonse>(this.url).pipe(
      map((bookResonse: BookResonse) => {
        return bookResonse.books
          .filter((book) => book.genre === 'terror')
          .slice(0, numberOfBooks);
      }),
    );
  }

  public getFictionBooks(numberOfBooks: number): Observable<Book[]> {
    return this.http.get<BookResonse>(this.url).pipe(
      map((bookResonse: BookResonse) => {
        return bookResonse.books
          .filter((book) => book.genre === 'fiction')
          .slice(0, numberOfBooks);
      }),
    );
  }
  public getRomanceBooks(numberOfBooks: number): Observable<Book[]> {
    return this.http.get<BookResonse>(this.url).pipe(
      map((bookResonse: BookResonse) => {
        return bookResonse.books
          .filter((book) => book.genre === 'romance')
          .slice(0, numberOfBooks);
      }),
    );
  }

  public getBooks(numberOfBooks: number, books: Book[]): Book[] {
    return books.slice(0, numberOfBooks);
  }
}
