import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-socaltelevision',
  templateUrl: './socaltelevision.component.html',
  styleUrls: ['./socaltelevision.component.css', '../../app.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class SoCalTelevisionComponent implements OnInit {

  constructor(private _route : ActivatedRoute) {}

  ngOnInit() {
  }

stationName = 'SoCal Television';
description = 'SoCal Television - Keeping You Connected';
subdescription = 'Join SoCalTelevision as we venture throughout Southern California to showcase attractions, businesses of interest, events, grand openings and some really cool travel locations that you just gotta experience! ENJOY!';

// Social Sharing binding data
title = "SoCal Television"
header_link = "Special Spots"
url = "https://www.socaltelevision.com"
summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
source_url = this.url
subject = "Check Out this SoCalTelevision.com website"
body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
