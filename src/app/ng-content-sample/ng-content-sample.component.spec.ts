import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentSampleComponent } from './ng-content-sample.component';

describe('NgContentSampleComponent', () => {
  let component: NgContentSampleComponent;
  let fixture: ComponentFixture<NgContentSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
