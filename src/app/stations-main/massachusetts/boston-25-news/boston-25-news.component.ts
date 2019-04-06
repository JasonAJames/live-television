import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boston-25-news',
  templateUrl: './boston-25-news.component.html',
  styleUrls: ['./boston-25-news.component.css', '../../../app.component.css']
})
export class Boston25NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "Boston 25 News"

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
