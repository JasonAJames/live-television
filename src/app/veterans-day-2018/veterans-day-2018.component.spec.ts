import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteransDay2018Component } from './veterans-day-2018.component';

describe('VeteransDay2018Component', () => {
  let component: VeteransDay2018Component;
  let fixture: ComponentFixture<VeteransDay2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteransDay2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteransDay2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
