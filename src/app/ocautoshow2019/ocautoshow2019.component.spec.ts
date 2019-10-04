import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocautoshow2019Component } from './ocautoshow2019.component';

describe('Ocautoshow2019Component', () => {
  let component: Ocautoshow2019Component;
  let fixture: ComponentFixture<Ocautoshow2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocautoshow2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocautoshow2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
