/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fox11laComponent } from './fox11la.component';

describe('Fox11laComponent', () => {
  let component: Fox11laComponent;
  let fixture: ComponentFixture<Fox11laComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox11laComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox11laComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
