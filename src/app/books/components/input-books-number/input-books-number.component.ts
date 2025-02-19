import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'books-components-input-books-number',
  standalone: false,
  templateUrl: './input-books-number.component.html',
  styleUrl: './input-books-number.component.css',
})
export class InputBooksNumberComponent implements OnInit {
  ngOnInit(): void {}
  @Output()
  public booksNumberEventEmit: EventEmitter<number> =
    new EventEmitter<number>();

  public emitBooksNumber(numberOfBooks: Event): void {
    const inputElement = numberOfBooks.target as HTMLInputElement;
    this.booksNumberEventEmit.emit(Number(inputElement.value));
  }
}
