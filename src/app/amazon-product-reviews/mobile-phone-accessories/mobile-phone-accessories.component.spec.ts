import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneAccessoriesComponent } from './mobile-phone-accessories.component';

describe('MobilePhoneAccessoriesComponent', () => {
  let component: MobilePhoneAccessoriesComponent;
  let fixture: ComponentFixture<MobilePhoneAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePhoneAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhoneAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
