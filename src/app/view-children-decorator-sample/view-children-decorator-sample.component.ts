import {
  AfterViewChecked,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ViewChildrenDecratorSampleChildComponent } from './components/view-children-decrator-sample-child/view-children-decrator-sample-child.component';

@Component({
  selector: 'app-view-children-decorator-sample',
  templateUrl: './view-children-decorator-sample.component.html',
  styleUrls: ['./view-children-decorator-sample.component.scss'],
})
export class ViewChildrenDecoratorSampleComponent
  implements OnInit, AfterViewChecked
{
  @ViewChildren(ViewChildrenDecratorSampleChildComponent)
  children: QueryList<ViewChildrenDecratorSampleChildComponent>;
  poems = new Array(3).map(() => '');

  constructor() {}

  ngOnInit(): void {}

  getPoemsText() {
    return this.poems.join(':');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    this.children.forEach((item, index) => {
      if (this.poems[index] !== item.poem) {
        setTimeout(() => {
          this.poems[index] = item.poem;
        }, 0);
      }
    });
  }
}
