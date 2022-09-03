import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TestComponent } from './test/test.component';

import { EventComponent } from './test/components/event.component';
import { BookComponent } from './test/components/book.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-list/components/book-detail/book-detail.component';
import { EditBookComponent } from './book-list/components/edit-book/edit-book.component';

import { SubModuleSample } from './sub-module-sample/sub-module-sample.module';
import { ViewChildrenDecoratorSampleComponent } from './view-children-decorator-sample/view-children-decorator-sample.component';
import { ViewChildrenDecratorSampleChildComponent } from './view-children-decorator-sample/components/view-children-decrator-sample-child/view-children-decrator-sample-child.component';
import { NgContentSampleComponent } from './ng-content-sample/ng-content-sample.component';
import { ChildComponentComponent } from './ng-content-sample/components/child-component/child-component.component';
import { HostStyleSampleComponent } from './host-style-sample/host-style-sample.component';
import { HostStyleSampleChildComponent } from './host-style-sample/components/host-style-sample-child/host-style-sample-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TestComponent,
    EventComponent,
    BookComponent,
    FormComponent,
    ReactiveFormComponent,
    BookListComponent,
    BookDetailComponent,
    EditBookComponent,
    ViewChildrenDecoratorSampleComponent,
    ViewChildrenDecratorSampleChildComponent,
    NgContentSampleComponent,
    ChildComponentComponent,
    HostStyleSampleComponent,
    HostStyleSampleChildComponent,
  ],
  entryComponents: [EventComponent, BookComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SubModuleSample],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
