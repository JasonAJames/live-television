import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Live2Component } from './live-2.component';

describe('Live2Component', () => {
  let component: Live2Component;
  let fixture: ComponentFixture<Live2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Live2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Live2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
