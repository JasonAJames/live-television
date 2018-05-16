import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsMlbLiveComponent } from './sports-mlb-live.component';

describe('SportsMlbLiveComponent', () => {
  let component: SportsMlbLiveComponent;
  let fixture: ComponentFixture<SportsMlbLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsMlbLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsMlbLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
