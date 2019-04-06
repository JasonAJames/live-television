import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bakersfield-news-23abc',
  templateUrl: './bakersfield-news-23abc.component.html',
  styleUrls: ['./bakersfield-news-23abc.component.css', '../../../app.component.css']
})
export class BakersfieldNews23abcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "23 ABC Bakersfield News"

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
