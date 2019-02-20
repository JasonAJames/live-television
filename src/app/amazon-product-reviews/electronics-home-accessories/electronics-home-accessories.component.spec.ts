import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsHomeAccessoriesComponent } from './electronics-home-accessories.component';

describe('ElectronicsHomeAccessoriesComponent', () => {
  let component: ElectronicsHomeAccessoriesComponent;
  let fixture: ComponentFixture<ElectronicsHomeAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsHomeAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsHomeAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
