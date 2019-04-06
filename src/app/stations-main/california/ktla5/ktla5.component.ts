import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ktla5',
  templateUrl: './ktla5.component.html',
  styleUrls: ['./ktla5.component.css', '../../../app.component.css']
})
export class Ktla5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = 'KTLA 5'

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
