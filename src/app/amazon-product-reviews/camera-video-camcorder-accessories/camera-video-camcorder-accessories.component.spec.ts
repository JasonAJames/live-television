import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraVideoCamcorderAccessoriesComponent } from './camera-video-camcorder-accessories.component';

describe('CameraVideoCamcorderAccessoriesComponent', () => {
  let component: CameraVideoCamcorderAccessoriesComponent;
  let fixture: ComponentFixture<CameraVideoCamcorderAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraVideoCamcorderAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraVideoCamcorderAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
