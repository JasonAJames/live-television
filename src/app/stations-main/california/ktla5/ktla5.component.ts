import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ktla5',
  templateUrl: './ktla5.component.html',
  styleUrls: ['./ktla5.component.css','../../../components/social-share-icons/social-share-icons.component.css']
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
  having begun operations in January 1947. Although not as widespread in national carriage
  as its Chicago sister station WGN-TV, KTLA is available as a superstation throughout North America
  via DirecTV and Dish Network and WorldTelevisionTV.`
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

  
}
