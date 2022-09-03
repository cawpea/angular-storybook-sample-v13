import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './types';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  @Input() book: Book;
  @Output() edited = new EventEmitter<Book>();

  editedBook: Book;

  constructor() {}

  ngOnInit(): void {
    this.editedBook = { ...this.book };
  }

  submit() {
    this.edited.emit({ ...this.editedBook });
  }
}
