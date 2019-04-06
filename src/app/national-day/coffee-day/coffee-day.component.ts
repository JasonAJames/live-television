import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-day',
  templateUrl: './coffee-day.component.html',
  styleUrls: ['./coffee-day.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class CoffeeDayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nationalday = "Coffee"

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/national-day/coffee"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
