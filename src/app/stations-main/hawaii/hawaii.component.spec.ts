/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HawaiiComponent } from './hawaii.component';

describe('HawaiiComponent', () => {
  let component: HawaiiComponent;
  let fixture: ComponentFixture<HawaiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawaiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawaiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
