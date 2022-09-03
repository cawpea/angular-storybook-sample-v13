import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenDecratorSampleChildComponent } from './view-children-decrator-sample-child.component';

describe('ViewChildrenDecratorSampleChildComponent', () => {
  let component: ViewChildrenDecratorSampleChildComponent;
  let fixture: ComponentFixture<ViewChildrenDecratorSampleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildrenDecratorSampleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrenDecratorSampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
