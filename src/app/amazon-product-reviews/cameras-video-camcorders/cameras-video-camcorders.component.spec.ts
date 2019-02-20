import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasVideoCamcordersComponent } from './cameras-video-camcorders.component';

describe('CamerasVideoCamcordersComponent', () => {
  let component: CamerasVideoCamcordersComponent;
  let fixture: ComponentFixture<CamerasVideoCamcordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasVideoCamcordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasVideoCamcordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
