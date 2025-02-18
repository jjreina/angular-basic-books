export interface BookResonse {
  total_books: number;
  books: Book[];
}
export interface Book {
  book_id: number;
  name: string;
  author: string;
  votes: number;
  cover: string;
  url: string;
  genre: string;
}
