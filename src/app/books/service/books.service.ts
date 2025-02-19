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

  public getAllBooks(): Observable<BookResonse> {
    return this.http.get<BookResonse>(this.url);
  }

  public getBooksByNumberAndGenre(
    numberOfBooks: number,
    genre: string,
    books: Book[],
  ): Book[] {
    return books.filter((book) => book.genre === genre).slice(0, numberOfBooks);
  }
}
