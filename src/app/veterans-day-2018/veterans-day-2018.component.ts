import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterans-day-2018',
  templateUrl: './veterans-day-2018.component.html',
  styleUrls: ['./veterans-day-2018.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class VeteransDay2018Component implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }
  stationName = "SoCalTelevision"
  title = "Son's of Liberty Aleworks 243rd Marine Birthday Celebration"
  url = "https://www.socaltelevision.com/+#+/veterans-day-2018"
  description = "2018 VETERANS DAY FREE MEALS, DISCOUNTS & CELEBRATIONS"
  subdescription = "Son's of Liberty Aleworks is having a Birthday Celebration this Saturday, November 10th. This will be an all day outdoor parking lot event celebrating the 243rd Anniversary of the founding of the, then, Continental Marines in 1775, later to become the United States Marine Corps. Come Join Us in Celebration."

// Social Sharing binding data
header_link = "Special Spots"
summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
source_url = this.url
subject = "Check Out this SoCalTelevision.com website"
body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
