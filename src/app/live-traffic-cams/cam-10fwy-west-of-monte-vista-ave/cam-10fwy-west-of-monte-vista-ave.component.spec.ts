import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cam10fwyWestOfMonteVistaAveComponent } from './cam-10fwy-west-of-monte-vista-ave.component';

describe('Cam10fwyWestOfMonteVistaAveComponent', () => {
  let component: Cam10fwyWestOfMonteVistaAveComponent;
  let fixture: ComponentFixture<Cam10fwyWestOfMonteVistaAveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cam10fwyWestOfMonteVistaAveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cam10fwyWestOfMonteVistaAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
