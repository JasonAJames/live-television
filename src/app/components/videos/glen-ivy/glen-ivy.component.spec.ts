import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlenIvyComponent } from './glen-ivy.component';

describe('GlenIvyComponent', () => {
  let component: GlenIvyComponent;
  let fixture: ComponentFixture<GlenIvyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlenIvyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlenIvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
