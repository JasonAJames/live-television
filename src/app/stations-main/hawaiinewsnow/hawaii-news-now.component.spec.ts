/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HawaiiNewsNowComponent } from './hawaii-news-now.component';

describe('HawaiiNewsNowComponent', () => {
  let component: HawaiiNewsNowComponent;
  let fixture: ComponentFixture<HawaiiNewsNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawaiiNewsNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawaiiNewsNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
