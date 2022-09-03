import { Component, OnInit } from '@angular/core';
import { Book } from './types';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    { id: 1, title: 'HTML', price: 2000 },
    { id: 2, title: 'CSS', price: 2500 },
    { id: 3, title: 'JavaScript', price: 3000 },
  ];
  selectedBook: Book | null = null;
  editedBook: Book | null = null;

  constructor() {}

  ngOnInit(): void {}

  showBook(book: Book) {
    this.selectedBook = book;
  }

  editBook(book: Book) {
    // TODO: selectedBookも変更されてしまうため、変更されないようにする
    this.editedBook = book;
  }
}
