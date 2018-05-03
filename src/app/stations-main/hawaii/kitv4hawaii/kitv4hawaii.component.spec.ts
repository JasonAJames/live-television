/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Kitv4hawaiiComponent } from './kitv4hawaii.component';

describe('Kitv4hawaiiComponent', () => {
  let component: Kitv4hawaiiComponent;
  let fixture: ComponentFixture<Kitv4hawaiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitv4hawaiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitv4hawaiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
