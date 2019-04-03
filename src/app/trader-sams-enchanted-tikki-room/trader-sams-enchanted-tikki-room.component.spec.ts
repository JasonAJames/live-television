import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderSamsEnchantedTikkiRoomComponent } from './trader-sams-enchanted-tikki-room.component';

describe('TraderSamsEnchantedTikkiRoomComponent', () => {
  let component: TraderSamsEnchantedTikkiRoomComponent;
  let fixture: ComponentFixture<TraderSamsEnchantedTikkiRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderSamsEnchantedTikkiRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderSamsEnchantedTikkiRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
