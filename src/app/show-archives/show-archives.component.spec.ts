import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowArchivesComponent } from './show-archives.component';

describe('ShowArchivesComponent', () => {
  let component: ShowArchivesComponent;
  let fixture: ComponentFixture<ShowArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
