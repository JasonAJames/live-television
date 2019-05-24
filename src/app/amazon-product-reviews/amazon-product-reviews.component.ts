import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon-product-reviews',
  templateUrl: './amazon-product-reviews.component.html',
  styleUrls: ['./amazon-product-reviews.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class AmazonProductReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  holiday = "Featured"

  pagetitle = "Featured Amazon Products"
  subtitle0 = "Electronics & Home Accessories"
  subtitle1 = "Computers, Tablets & Peripherals"
  subtitle2 = "Cameras & Photography Equipment"


  // Social Sharing binding data
  title = "Search Amazon Products"
  header_link = "Featured Amazon Products"
  url = "https://www.socaltelevision.com/#/amazon-product-reviews"
  description = 'Featured Amazon Products';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase awesome Amazon products...'
  summary = 'We venture throughtout Southern California and beyond, to showcase Amazon products, attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out these SoCalTelevision.com featured Amazon products"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase Amazon products, attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
