/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Khon2hawaiiComponent } from './khon2hawaii.component';

describe('Khon2hawaiiComponent', () => {
  let component: Khon2hawaiiComponent;
  let fixture: ComponentFixture<Khon2hawaiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khon2hawaiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khon2hawaiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
