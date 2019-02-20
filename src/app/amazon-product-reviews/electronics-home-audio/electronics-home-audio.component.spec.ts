import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsHomeAudioComponent } from './electronics-home-audio.component';

describe('ElectronicsHomeAudioComponent', () => {
  let component: ElectronicsHomeAudioComponent;
  let fixture: ComponentFixture<ElectronicsHomeAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsHomeAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsHomeAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
