import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCountyFairComponent } from './la-county-fair.component';

describe('LaCountyFairComponent', () => {
  let component: LaCountyFairComponent;
  let fixture: ComponentFixture<LaCountyFairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCountyFairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCountyFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
