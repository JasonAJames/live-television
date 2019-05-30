import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ktla5VideoComponent } from './ktla5-video.component';

describe('Ktla5VideoComponent', () => {
  let component: Ktla5VideoComponent;
  let fixture: ComponentFixture<Ktla5VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ktla5VideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ktla5VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
