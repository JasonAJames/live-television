import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorado-9news',
  templateUrl: './colorado-9news.component.html',
  styleUrls: ['./colorado-9news.component.css']
})
export class Colorado9newsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Colorado"
  stationName1 = "9 News"
  stationLink1 = "colorado-9news"

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
