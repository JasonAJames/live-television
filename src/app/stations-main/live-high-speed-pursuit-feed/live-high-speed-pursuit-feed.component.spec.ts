import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveHighSpeedPursuitFeedComponent } from './live-high-speed-pursuit-feed.component';

describe('LiveHighSpeedPursuitFeedComponent', () => {
  let component: LiveHighSpeedPursuitFeedComponent;
  let fixture: ComponentFixture<LiveHighSpeedPursuitFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveHighSpeedPursuitFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveHighSpeedPursuitFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
