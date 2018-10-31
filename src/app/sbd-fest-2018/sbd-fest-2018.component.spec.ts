import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbdFest2018Component } from './sbd-fest-2018.component';

describe('SbdFest2018Component', () => {
  let component: SbdFest2018Component;
  let fixture: ComponentFixture<SbdFest2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbdFest2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbdFest2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
