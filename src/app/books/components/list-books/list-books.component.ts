import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/books.interface';

@Component({
  selector: 'books-components-list-books',
  standalone: false,
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css',
})
export class ListBooksComponent {
  @Input()
  public books: Book[] = [];
}
