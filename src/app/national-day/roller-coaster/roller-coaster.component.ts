import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roller-coaster',
  templateUrl: './roller-coaster.component.html',
  styleUrls: ['./roller-coaster.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class RollerCoasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nationalday = "Roller Coaster";

// Social Sharing binding data
title = "SoCal Television"
header_link = "Special Spots"
url = "https://www.socaltelevision.com/+#+/national-day/roller/coaster"
description = 'Special Spots';
subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
source_url = this.url
subject = "Check Out this SoCalTelevision.com website"
body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
