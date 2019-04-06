import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reviews',
  templateUrl: './local-reviews.component.html',
  styleUrls: ['./local-reviews.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class LocalReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "SoCal Reviews"
    
  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/local-reviews"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
