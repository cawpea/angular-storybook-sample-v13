import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../types';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  // @Input() book: Book | null = null;
  private _book: Book;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set book(_book: Book) {
    this._book = _book;
  }

  get book() {
    return this._book;
  }
}
