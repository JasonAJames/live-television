import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: '../about/about.component.html',
  styleUrls: ['../about/about.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/about"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
