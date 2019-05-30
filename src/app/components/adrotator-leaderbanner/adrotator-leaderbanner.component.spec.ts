import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrotatorLeaderbannerComponent } from './adrotator-leaderbanner.component';

describe('AdrotatorLeaderbannerComponent', () => {
  let component: AdrotatorLeaderbannerComponent;
  let fixture: ComponentFixture<AdrotatorLeaderbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrotatorLeaderbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrotatorLeaderbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
