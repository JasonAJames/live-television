import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerCoasterComponent } from './roller-coaster.component';

describe('RollerCoasterComponent', () => {
  let component: RollerCoasterComponent;
  let fixture: ComponentFixture<RollerCoasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerCoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerCoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
