import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassachusettsComponent } from './massachusetts.component';

describe('MassachusettsComponent', () => {
  let component: MassachusettsComponent;
  let fixture: ComponentFixture<MassachusettsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassachusettsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassachusettsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
