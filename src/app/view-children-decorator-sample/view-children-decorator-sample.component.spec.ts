import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenDecoratorSampleComponent } from './view-children-decorator-sample.component';

describe('ViewChildrenDecoratorSampleComponent', () => {
  let component: ViewChildrenDecoratorSampleComponent;
  let fixture: ComponentFixture<ViewChildrenDecoratorSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildrenDecoratorSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrenDecoratorSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
