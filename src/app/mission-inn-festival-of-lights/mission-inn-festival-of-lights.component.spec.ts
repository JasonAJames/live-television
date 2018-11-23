import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionInnFestivalOfLightsComponent } from './mission-inn-festival-of-lights.component';

describe('MissionInnFestivalOfLightsComponent', () => {
  let component: MissionInnFestivalOfLightsComponent;
  let fixture: ComponentFixture<MissionInnFestivalOfLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionInnFestivalOfLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionInnFestivalOfLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
