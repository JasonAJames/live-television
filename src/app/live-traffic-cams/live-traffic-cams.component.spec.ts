import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrafficCamsComponent } from './live-traffic-cams.component';

describe('LiveTrafficCamsComponent', () => {
  let component: LiveTrafficCamsComponent;
  let fixture: ComponentFixture<LiveTrafficCamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTrafficCamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTrafficCamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
