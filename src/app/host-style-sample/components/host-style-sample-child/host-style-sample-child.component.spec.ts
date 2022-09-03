import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostStyleSampleChildComponent } from './host-style-sample-child.component';

describe('HostStyleSampleChildComponent', () => {
  let component: HostStyleSampleChildComponent;
  let fixture: ComponentFixture<HostStyleSampleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostStyleSampleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostStyleSampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
