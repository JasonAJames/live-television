import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideo4Component } from './home-video-4.component';

describe('HomeVideo4Component', () => {
  let component: HomeVideo4Component;
  let fixture: ComponentFixture<HomeVideo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVideo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
