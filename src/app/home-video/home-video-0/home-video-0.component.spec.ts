import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideo0Component } from './home-video-0.component';

describe('HomeVideo0Component', () => {
  let component: HomeVideo0Component;
  let fixture: ComponentFixture<HomeVideo0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVideo0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
