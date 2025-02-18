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
    this.booksService.getTerrorBooks().subscribe((res: Book[]) => {
      this.terrorBooks = res;
    });

    this.booksService.getFictionBooks().subscribe((res: Book[]) => {
      this.fictionsBooks = res;
    });
    this.booksService.getRomanceBooks().subscribe((res: Book[]) => {
      this.romanceBooks = res;
    });
  }
}
