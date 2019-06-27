import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikoYPopsTacosComponent } from './niko-y-pops-tacos.component';

describe('NikoYPopsTacosComponent', () => {
  let component: NikoYPopsTacosComponent;
  let fixture: ComponentFixture<NikoYPopsTacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikoYPopsTacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikoYPopsTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
