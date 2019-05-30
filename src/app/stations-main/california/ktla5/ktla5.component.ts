import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ktla5',
  templateUrl: './ktla5.component.html',
  styleUrls: ['./ktla5.component.css']
})
export class Ktla5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = 'KTLA 5'

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = this.stationName
  url = "https://www.socaltelevision.com/#/ktla5"
  description = this.stationName
  subdescription = `
  KTLA was the first commercially licensed television station in the western United States,
  having begun operations in January 1947.[3] Although not as widespread in national carriage
  as its Chicago sister station WGN-TV, KTLA is available as a superstation throughout North America
  via DirecTV[4] and Dish Network (the latter service available only to grandfathered subscribers 
  that had purchased its a la carte superstation tier before Dish halted sales of the package to
  new subscribers in September 2013), as well as on cable providers in select cities within
  the southwestern United States and throughout Canada.
  `
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

  
}
