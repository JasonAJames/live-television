import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KobeBryantMemorialComponent } from './kobe-bryant-memorial.component';

describe('KobeBryantMemorialComponent', () => {
  let component: KobeBryantMemorialComponent;
  let fixture: ComponentFixture<KobeBryantMemorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KobeBryantMemorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KobeBryantMemorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
