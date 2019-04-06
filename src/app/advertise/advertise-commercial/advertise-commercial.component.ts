import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

declare let paypal: any;

@Component({
  selector: 'app-advertise-commercial',
  templateUrl: './advertise-commercial.component.html',
  styleUrls: ['./advertise-commercial.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class AdvertiseCommercialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// Social Sharing binding data
title = "SoCal Television"
header_link = "Special Spots"
url = "https://www.socaltelevision.com/+#+/advertise-commercial"
description = 'Special Spots';
subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
source_url = this.url
subject = "Check Out this SoCalTelevision.com website"
body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
