/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fox5sandiegoComponent } from './fox5sandiego.component';

describe('Fox5sandiegoComponent', () => {
  let component: Fox5sandiegoComponent;
  let fixture: ComponentFixture<Fox5sandiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox5sandiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox5sandiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
