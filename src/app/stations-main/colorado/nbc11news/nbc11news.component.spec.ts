import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nbc11newsComponent } from './nbc11news.component';

describe('Nbc11newsComponent', () => {
  let component: Nbc11newsComponent;
  let fixture: ComponentFixture<Nbc11newsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nbc11newsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nbc11newsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
