import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtLiveComponent } from './yt-live.component';

describe('YtLiveComponent', () => {
  let component: YtLiveComponent;
  let fixture: ComponentFixture<YtLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
