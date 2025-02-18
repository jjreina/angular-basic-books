import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/books.interface';

@Component({
  selector: 'books-components-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input()
  public book!: Book;
}
