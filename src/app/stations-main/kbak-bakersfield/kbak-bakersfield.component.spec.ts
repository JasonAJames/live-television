import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbakBakersfieldComponent } from './kbak-bakersfield.component';

describe('KbakBakersfieldComponent', () => {
  let component: KbakBakersfieldComponent;
  let fixture: ComponentFixture<KbakBakersfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbakBakersfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbakBakersfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
