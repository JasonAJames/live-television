import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations-main',
  templateUrl: '../stations-main/stations-main.component.html',
  styleUrls: ['../stations-main/stations-main.component.css']
})
export class StationsMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'SoCalTelevision'
  source = 'https://livestream.com/accounts/9262780/events/3189705/player?width=770&height=433&autoPlay=true&mute=false&customAdTagParameters=Site%3D41641936%26pid%3Don-airlive-streaming'
  
  stationName = 'KTLA 5'
  tv = 'TV Stations'
  tvhref = 'tv-stations'

  // Social Sharing binding data
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/stations-main"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
