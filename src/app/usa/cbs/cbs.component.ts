import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbs',
  templateUrl: './cbs.component.html',
  styleUrls: ['./cbs.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class CbsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "CBS"
  description = "CBS (an initialism of the network's former name, the Columbia Broadcasting System) is an American commercial broadcast television network that is a flagship property of CBS Corporation. The company is headquartered at the CBS Building in New York City with major production facilities and operations in New York City (at the CBS Broadcast Center) and Los Angeles (at CBS Television City and the CBS Studio Center)."

// Social Sharing binding data
title = "SoCal Television"
header_link = "Special Spots"
url = "https://www.socaltelevision.com"
subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
source_url = this.url
subject = "Check Out this SoCalTelevision.com website"
body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
