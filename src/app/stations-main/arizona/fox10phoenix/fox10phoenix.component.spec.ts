import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox10phoenixComponent } from './fox10phoenix.component';

describe('Fox10phoenixComponent', () => {
  let component: Fox10phoenixComponent;
  let fixture: ComponentFixture<Fox10phoenixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox10phoenixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox10phoenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
