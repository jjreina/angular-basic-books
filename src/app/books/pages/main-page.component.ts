import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Book } from '../interfaces/books.interface';

@Component({
  selector: 'books-main-page-component',
  templateUrl: 'main-page.component.html',
  standalone: false,
})
export class MainPageComponent implements OnInit {
  public terrorBooks: Book[] = [];
  public fictionsBooks: Book[] = [];
  public romanceBooks: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getTerrorBooks(4).subscribe((res: Book[]) => {
      this.terrorBooks = res;
    });

    this.booksService.getFictionBooks(4).subscribe((res: Book[]) => {
      this.fictionsBooks = res;
    });

    this.booksService.getRomanceBooks(4).subscribe((res: Book[]) => {
      this.romanceBooks = res;
    });
  }

  public setNumberOfBooks(numberOfBooks: number, genre: string): void {
    if (genre === 'terror') {
      this.booksService
        .getTerrorBooks(numberOfBooks)
        .subscribe((res: Book[]) => {
          this.terrorBooks = res;
        });
    } else if (genre === 'fiction') {
      this.booksService
        .getFictionBooks(numberOfBooks)
        .subscribe((res: Book[]) => {
          this.fictionsBooks = res;
        });
    } else if (genre === 'romance') {
      this.booksService
        .getRomanceBooks(numberOfBooks)
        .subscribe((res: Book[]) => {
          this.romanceBooks = res;
        });
    }
  }
}
