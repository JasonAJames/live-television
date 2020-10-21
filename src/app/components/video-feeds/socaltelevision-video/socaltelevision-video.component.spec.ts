import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocaltelevisionVideoComponent } from './socaltelevision-video.component';

describe('SocaltelevisionVideoComponent', () => {
  let component: SocaltelevisionVideoComponent;
  let fixture: ComponentFixture<SocaltelevisionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocaltelevisionVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocaltelevisionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
