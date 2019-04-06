import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox-4-texas',
  templateUrl: './fox-4-texas.component.html',
  styleUrls: ['./fox-4-texas.component.css']
})
export class Fox4TexasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "FOX 4 Texas"

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
