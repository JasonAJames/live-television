import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sbd-fest-2018',
  templateUrl: './sbd-fest-2018.component.html',
  styleUrls: ['./sbd-fest-2018.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class SbdFest2018Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "SBD Fest 2018"
  description = "SoCalTelevision visits SBD Fest 2018 behind the scenes..."
  subdescription = "SBD Fest is November 3rd & 4th 2018 - Info & Tickets Available at www.SBDfest.com"

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/sbd-fest"
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
