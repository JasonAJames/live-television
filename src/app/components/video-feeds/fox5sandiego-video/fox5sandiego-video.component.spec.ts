import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox5sandiegoVideoComponent } from './fox5sandiego-video.component';

describe('Fox5sandiegoVideoComponent', () => {
  let component: Fox5sandiegoVideoComponent;
  let fixture: ComponentFixture<Fox5sandiegoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox5sandiegoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox5sandiegoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
