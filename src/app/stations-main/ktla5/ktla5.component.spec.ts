/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ktla5Component } from './ktla5.component';

describe('Ktla5Component', () => {
  let component: Ktla5Component;
  let fixture: ComponentFixture<Ktla5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ktla5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ktla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
