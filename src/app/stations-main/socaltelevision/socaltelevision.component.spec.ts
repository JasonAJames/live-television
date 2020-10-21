/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoCalTelevisionComponent } from './socaltelevision.component';

describe('SoCalTelevisionComponent', () => {
  let component: SoCalTelevisionComponent;
  let fixture: ComponentFixture<SoCalTelevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoCalTelevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoCalTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
