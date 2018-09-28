import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideo5Component } from './home-video-5.component';

describe('HomeVideo5Component', () => {
  let component: HomeVideo5Component;
  let fixture: ComponentFixture<HomeVideo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVideo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
