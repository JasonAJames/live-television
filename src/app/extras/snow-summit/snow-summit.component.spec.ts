import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowSummitComponent } from './snow-summit.component';

describe('SnowSummitComponent', () => {
  let component: SnowSummitComponent;
  let fixture: ComponentFixture<SnowSummitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowSummitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowSummitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
