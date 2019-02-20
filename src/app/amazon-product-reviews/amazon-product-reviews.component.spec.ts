import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonProductReviewsComponent } from './amazon-product-reviews.component';

describe('AmazonProductReviewsComponent', () => {
  let component: AmazonProductReviewsComponent;
  let fixture: ComponentFixture<AmazonProductReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonProductReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonProductReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
