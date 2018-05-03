import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boston25NewsComponent } from './boston-25-news.component';

describe('Boston25NewsComponent', () => {
  let component: Boston25NewsComponent;
  let fixture: ComponentFixture<Boston25NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boston25NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boston25NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
