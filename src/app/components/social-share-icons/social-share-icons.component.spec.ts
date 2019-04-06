import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareIconsComponent } from './social-share-icons.component';

describe('SocialShareIconsComponent', () => {
  let component: SocialShareIconsComponent;
  let fixture: ComponentFixture<SocialShareIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialShareIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialShareIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
