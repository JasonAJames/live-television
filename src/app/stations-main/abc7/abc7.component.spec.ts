/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Abc7Component } from './abc7.component';

describe('Abc7Component', () => {
  let component: Abc7Component;
  let fixture: ComponentFixture<Abc7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abc7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abc7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
