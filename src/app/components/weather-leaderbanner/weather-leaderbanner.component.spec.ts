import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLeaderbannerComponent } from './weather-leaderbanner.component';

describe('WeatherLeaderbannerComponent', () => {
  let component: WeatherLeaderbannerComponent;
  let fixture: ComponentFixture<WeatherLeaderbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLeaderbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLeaderbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
