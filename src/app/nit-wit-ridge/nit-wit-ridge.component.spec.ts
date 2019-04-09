import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NitWitRidgeComponent } from './nit-wit-ridge.component';

describe('NitWitRidgeComponent', () => {
  let component: NitWitRidgeComponent;
  let fixture: ComponentFixture<NitWitRidgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NitWitRidgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NitWitRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
