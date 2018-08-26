import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDayComponent } from './dog-day.component';

describe('DogDayComponent', () => {
  let component: DogDayComponent;
  let fixture: ComponentFixture<DogDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
