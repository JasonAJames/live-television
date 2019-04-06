import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-3-abc-palmsprings',
  templateUrl: './news-3-abc-palmsprings.component.html',
  styleUrls: ['./news-3-abc-palmsprings.component.css']
})
export class News3AbcPalmspringsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "News 3 ABC Palm Springs"

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
