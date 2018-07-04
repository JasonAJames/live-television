import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependancedayComponent } from './independanceday.component';

describe('IndependancedayComponent', () => {
  let component: IndependancedayComponent;
  let fixture: ComponentFixture<IndependancedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependancedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependancedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
