import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EventComponent } from './components/event.component';
import { BookComponent } from './components/book.component';

export type Book = {
  id: number;
  name: string;
  price: number;
};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  member = {
    name: 'Masaki Osumi',
    age: 30,
  };
  imageUrl = 'https://placehold.jp/150x150.png';
  htmlText = `<p>This is first line.<br/>This is second line.</p>`;
  safeHtmlText: SafeHtml;
  isTextRed = false;
  myName = '';
  title = 'Hello World';
  arr = ['A', 'B', 'C', 'D', 'E'];
  num = 3500.1234;
  now = new Date();
  isShow = false;
  season = '';
  books: Book[] = [
    {
      id: 100,
      name: 'はじめてのJavaScript',
      price: 3000,
    },
    {
      id: 110,
      name: 'はじめてのC#',
      price: 3200,
    },
    {
      id: 120,
      name: '本気で始めるJavaScript',
      price: 3500,
    },
    {
      id: 130,
      name: '実践 Node.js',
      price: 3300,
    },
    {
      id: 140,
      name: 'Design Systems',
      price: 2800,
    },
    {
      id: 150,
      name: '誰でもわかるHTML',
      price: 3200,
    },
    {
      id: 160,
      name: 'サルでもわかるCSS',
      price: 2600,
    },
    {
      id: 170,
      name: '詳解C',
      price: 4000,
    },
  ];
  pageStart = 0;
  pageLength = 3;
  pageNumbers = Array(Math.ceil(this.books.length / this.pageLength));
  isStyleOn = false;
  selectedBookIndex = 0;
  components = [EventComponent, BookComponent];
  selectedComponentIndex = 0;

  constructor(private sanitizer: DomSanitizer) {
    // NOTE: 信頼済みのテキストとしてサニタイズしない
    this.safeHtmlText = sanitizer.bypassSecurityTrustHtml(this.htmlText);
  }

  onClick(event: Event) {
    this.isTextRed = !this.isTextRed;
    console.log('onClick', event);
  }

  onInput(value: string) {
    console.log('onInput', value);
  }

  onEnter(value: string) {
    console.log('onEnter', value);
  }

  ngOnInit(): void {}

  trackFn(index: number, book: Book) {
    return book.id;
  }

  pager(page: number) {
    this.pageStart = this.pageLength * page;
  }

  getStyle() {
    return this.isStyleOn
      ? {
          color: '#ff0000',
        }
      : {};
  }
}
