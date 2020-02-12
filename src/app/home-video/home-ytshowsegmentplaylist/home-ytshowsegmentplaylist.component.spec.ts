import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeYtshowsegmentplaylistComponent } from './home-ytshowsegmentplaylist.component';

describe('HomeYtshowsegmentplaylistComponent', () => {
  let component: HomeYtshowsegmentplaylistComponent;
  let fixture: ComponentFixture<HomeYtshowsegmentplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeYtshowsegmentplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeYtshowsegmentplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
