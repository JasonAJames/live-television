import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbc11news',
  templateUrl: './nbc11news.component.html',
  styleUrls: ['./nbc11news.component.css']
})
export class Nbc11newsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Colorado"
  stationName1 = "NBC 11 News - Colorado"
  stationLink1 = "nbc11news"

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
