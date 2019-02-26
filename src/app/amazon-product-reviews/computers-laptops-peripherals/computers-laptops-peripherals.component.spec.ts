import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersLaptopsPeripheralsComponent } from './computers-laptops-peripherals.component';

describe('ComputersLaptopsPeripheralsComponent', () => {
  let component: ComputersLaptopsPeripheralsComponent;
  let fixture: ComponentFixture<ComputersLaptopsPeripheralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputersLaptopsPeripheralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersLaptopsPeripheralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
