/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaymentProcessor1Component } from './payment-processor1.component';

describe('PaymentProcessor1Component', () => {
  let component: PaymentProcessor1Component;
  let fixture: ComponentFixture<PaymentProcessor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentProcessor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProcessor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
