import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class TwitterFeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "SoCal Television Twitter Feed"

  // Social Sharing binding data
 
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/extras/twitter-feed"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
