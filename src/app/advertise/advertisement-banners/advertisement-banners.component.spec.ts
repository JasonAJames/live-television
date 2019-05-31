import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementBannersComponent } from './advertisement-banners.component';

describe('AdvertisementBannersComponent', () => {
  let component: AdvertisementBannersComponent;
  let fixture: ComponentFixture<AdvertisementBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
