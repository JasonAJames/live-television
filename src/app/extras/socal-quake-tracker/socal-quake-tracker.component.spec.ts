import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocalQuakeTrackerComponent } from './socal-quake-tracker.component';

describe('SocalQuakeTrackerComponent', () => {
  let component: SocalQuakeTrackerComponent;
  let fixture: ComponentFixture<SocalQuakeTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocalQuakeTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocalQuakeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
