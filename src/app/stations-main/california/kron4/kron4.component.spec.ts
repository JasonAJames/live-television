import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kron4Component } from './kron4.component';

describe('Kron4Component', () => {
  let component: Kron4Component;
  let fixture: ComponentFixture<Kron4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kron4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kron4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
