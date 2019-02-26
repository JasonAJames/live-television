import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon-product-reviews',
  templateUrl: './amazon-product-reviews.component.html',
  styleUrls: ['./amazon-product-reviews.component.css']
})
export class AmazonProductReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pagetitle = "Amazon Products"
  subtitle0 = "Electronics & Home Accessories"
  subtitle1 = "Computers, Tablets & Peripherals"
  subtitle2 = "Cameras & Photography Equipment"

}
