import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwSandiegoComponent } from './cw-sandiego.component';

describe('CwSandiegoComponent', () => {
  let component: CwSandiegoComponent;
  let fixture: ComponentFixture<CwSandiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwSandiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwSandiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
