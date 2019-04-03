import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntownDisneyBallastPointComponent } from './downtown-disney-ballast-point.component';

describe('DowntownDisneyBallastPointComponent', () => {
  let component: DowntownDisneyBallastPointComponent;
  let fixture: ComponentFixture<DowntownDisneyBallastPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowntownDisneyBallastPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowntownDisneyBallastPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
