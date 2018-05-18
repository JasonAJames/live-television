import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News3AbcPalmspringsComponent } from './news-3-abc-palmsprings.component';

describe('News3AbcPalmspringsComponent', () => {
  let component: News3AbcPalmspringsComponent;
  let fixture: ComponentFixture<News3AbcPalmspringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News3AbcPalmspringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News3AbcPalmspringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
