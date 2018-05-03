import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakersfieldNews23abcComponent } from './bakersfield-news-23abc.component';

describe('BakersfieldNews23abcComponent', () => {
  let component: BakersfieldNews23abcComponent;
  let fixture: ComponentFixture<BakersfieldNews23abcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakersfieldNews23abcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakersfieldNews23abcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
