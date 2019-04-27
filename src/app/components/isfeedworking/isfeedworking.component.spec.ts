import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfeedworkingComponent } from './isfeedworking.component';

describe('IsfeedworkingComponent', () => {
  let component: IsfeedworkingComponent;
  let fixture: ComponentFixture<IsfeedworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsfeedworkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfeedworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
