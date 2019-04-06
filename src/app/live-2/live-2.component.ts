import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-2',
  templateUrl: './live-2.component.html',
  styleUrls: ['./live-2.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class Live2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television LIVE BREAKING NEWS"
  subdesc = `President Trump visits the US/Mexico Border #LIVE We're in Calexico, California as President Donald J. Trump visits a portion of replaced wall along the U.S.-Mexico border.`


  stationName = 'SoCal Television'
    
  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/live-2"
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

  description = this.offlineMessage1
  subdescription = this.subdesc
}
