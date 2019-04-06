import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox10phoenix',
  templateUrl: './fox10phoenix.component.html',
  styleUrls: ['./fox10phoenix.component.css']
})
export class Fox10phoenixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
stationName = "FOX10 Phoenix"

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
