import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VansusopenofsurfingLiveComponent } from './vansusopenofsurfing-live.component';

describe('VansusopenofsurfingLiveComponent', () => {
  let component: VansusopenofsurfingLiveComponent;
  let fixture: ComponentFixture<VansusopenofsurfingLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VansusopenofsurfingLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VansusopenofsurfingLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
