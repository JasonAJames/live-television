import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vansusopenofsurfing-live',
  templateUrl: './vansusopenofsurfing-live.component.html',
  styleUrls: ['./vansusopenofsurfing-live.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class VansusopenofsurfingLiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  description = 'Vans US Open of Surfing';
  subdescription = 'LIVE from Huntington Beach, CA - Now thru Aug. 5, 2018'

// Social Sharing binding data
title = "SoCal Television"
header_link = "Special Spots"
url = "https://www.socaltelevision.com"
summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
source_url = this.url
subject = "Check Out this SoCalTelevision.com website"
body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
