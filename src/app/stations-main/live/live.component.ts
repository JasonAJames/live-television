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
  subdesc = "Joel Sabas, our SoCal Television Foodie Specialist Reporter visits Rodeo Public Market in Stanton, CA. Fore More on this Story and other stories in your area, Please #LIKE #FOLLOW #SHARE #SUBSCRIBE to SoCalTelevision on Facebook, Instagram, Twitter, Tumblr & YouTube and Watch www.SoCalTelevision.com"


  stationName = 'SoCal Television Breaking News LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Breaking News #LIVE"
  url = "https://www.socaltelevision.com/+#+/live"
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
