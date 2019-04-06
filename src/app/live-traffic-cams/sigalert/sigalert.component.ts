import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigalert',
  templateUrl: './sigalert.component.html',
  styleUrls: ['./sigalert.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class SigalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "SIG ALERT MAP"
    
  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Sig Alert Map"
  url = "https://www.socaltelevision.com/+#+/live-traffic/sigalert"
  description = 'Special Spots';
  subdescription = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'

}
