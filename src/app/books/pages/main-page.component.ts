import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Book, BookResonse } from '../interfaces/books.interface';

@Component({
  selector: 'books-main-page-component',
  templateUrl: 'main-page.component.html',
  standalone: false,
})
export class MainPageComponent implements OnInit {
  public allBooks: Book[] = [];
  public terrorBooks: Book[] = [];
  public fictionsBooks: Book[] = [];
  public romanceBooks: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getAllBooks().subscribe((res: BookResonse) => {
      this.allBooks = res.books;
      this.terrorBooks = this.booksService.getBooksByNumberAndGenre(
        4,
        'terror',
        this.allBooks,
      );
      this.fictionsBooks = this.booksService.getBooksByNumberAndGenre(
        4,
        'fiction',
        this.allBooks,
      );
      this.romanceBooks = this.booksService.getBooksByNumberAndGenre(
        4,
        'romance',
        this.allBooks,
      );
    });
  }

  public setNumberOfBooks(numberOfBooks: number, genre: string): void {
    if (genre === 'terror') {
      this.terrorBooks = this.booksService.getBooksByNumberAndGenre(
        numberOfBooks,
        genre,
        this.allBooks,
      );
    } else if (genre === 'fiction') {
      this.fictionsBooks = this.booksService.getBooksByNumberAndGenre(
        numberOfBooks,
        genre,
        this.allBooks,
      );
    } else if (genre === 'romance') {
      this.romanceBooks = this.booksService.getBooksByNumberAndGenre(
        numberOfBooks,
        genre,
        this.allBooks,
      );
    }
  }
}
