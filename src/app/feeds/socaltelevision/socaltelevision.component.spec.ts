import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocaltelevisionComponent } from './socaltelevision.component';

describe('SocaltelevisionComponent', () => {
  let component: SocaltelevisionComponent;
  let fixture: ComponentFixture<SocaltelevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocaltelevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocaltelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
