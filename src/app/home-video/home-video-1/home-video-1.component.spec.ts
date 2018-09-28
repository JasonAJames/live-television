import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideo1Component } from './home-video-1.component';

describe('HomeVideo1Component', () => {
  let component: HomeVideo1Component;
  let fixture: ComponentFixture<HomeVideo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVideo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
