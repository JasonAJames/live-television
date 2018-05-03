import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Colorado9newsComponent } from './colorado-9news.component';

describe('Colorado9newsComponent', () => {
  let component: Colorado9newsComponent;
  let fixture: ComponentFixture<Colorado9newsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Colorado9newsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Colorado9newsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
