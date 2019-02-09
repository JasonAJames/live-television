import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionInnFestivalOfLights2018Component } from './mission-inn-festival-of-lights2018.component';

describe('MissionInnFestivalOfLights2018Component', () => {
  let component: MissionInnFestivalOfLights2018Component;
  let fixture: ComponentFixture<MissionInnFestivalOfLights2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionInnFestivalOfLights2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionInnFestivalOfLights2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
