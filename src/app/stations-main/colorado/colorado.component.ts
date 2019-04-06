import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorado',
  templateUrl: './colorado.component.html',
  styleUrls: ['./colorado.component.css']
})
export class ColoradoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Colorado"
  stationName1 = "9 News"
  stationLink1 = "colorado-9news"
  stationName2 = "NBC 11 News"
  stationLink2 = "nbc11news"

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
