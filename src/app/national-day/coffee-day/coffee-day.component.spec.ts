import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDayComponent } from './coffee-day.component';

describe('CoffeeDayComponent', () => {
  let component: CoffeeDayComponent;
  let fixture: ComponentFixture<CoffeeDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
