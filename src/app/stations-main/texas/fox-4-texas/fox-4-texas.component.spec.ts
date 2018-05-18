import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox4TexasComponent } from './fox-4-texas.component';

describe('Fox4TexasComponent', () => {
  let component: Fox4TexasComponent;
  let fixture: ComponentFixture<Fox4TexasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox4TexasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox4TexasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
