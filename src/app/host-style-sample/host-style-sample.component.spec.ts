import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostStyleSampleComponent } from './host-style-sample.component';

describe('HostStyleSampleComponent', () => {
  let component: HostStyleSampleComponent;
  let fixture: ComponentFixture<HostStyleSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostStyleSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostStyleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
