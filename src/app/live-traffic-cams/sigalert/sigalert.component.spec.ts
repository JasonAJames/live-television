import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigalertComponent } from './sigalert.component';

describe('SigalertComponent', () => {
  let component: SigalertComponent;
  let fixture: ComponentFixture<SigalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
