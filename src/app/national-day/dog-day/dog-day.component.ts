import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-day',
  templateUrl: './dog-day.component.html',
  styleUrls: ['./dog-day.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class DogDayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nationalday = "Dog";

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/national-day/dog"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
