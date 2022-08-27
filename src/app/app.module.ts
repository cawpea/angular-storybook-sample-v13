import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TestComponent } from './test/test.component';

import { EventComponent } from './test/components/event.component';
import { BookComponent } from './test/components/book.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TestComponent,
    EventComponent,
    BookComponent,
  ],
  entryComponents: [EventComponent, BookComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
