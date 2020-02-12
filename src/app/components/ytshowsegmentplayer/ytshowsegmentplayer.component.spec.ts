import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtshowsegmentplayerComponent } from './ytshowsegmentplayer.component';

describe('YtshowsegmentplayerComponent', () => {
  let component: YtshowsegmentplayerComponent;
  let fixture: ComponentFixture<YtshowsegmentplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtshowsegmentplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtshowsegmentplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
