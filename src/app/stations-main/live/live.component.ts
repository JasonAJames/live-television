import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css', '../../components/social-share-icons/social-share-icons.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television #LIVE"
  subdesc = "President Donald Trump is visiting the border right now to tour a recently built portion of fence."


  stationName = 'SoCal Television Breaking News LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/live"
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
