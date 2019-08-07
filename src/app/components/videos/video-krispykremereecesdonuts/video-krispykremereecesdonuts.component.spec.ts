import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoKrispykremereecesdonutsComponent } from './video-krispykremereecesdonuts.component';

describe('VideoKrispykremereecesdonutsComponent', () => {
  let component: VideoKrispykremereecesdonutsComponent;
  let fixture: ComponentFixture<VideoKrispykremereecesdonutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoKrispykremereecesdonutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoKrispykremereecesdonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
