import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoOcautoshow2019Component } from './video-ocautoshow2019.component';

describe('VideoOcautoshow2019Component', () => {
  let component: VideoOcautoshow2019Component;
  let fixture: ComponentFixture<VideoOcautoshow2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoOcautoshow2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoOcautoshow2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
