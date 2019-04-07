import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-county-fair',
  templateUrl: './la-county-fair.component.html',
  styleUrls: ['./la-county-fair.component.css','../components/social-share-icons/social-share-icons.component.css']
})
export class LaCountyFairComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "SoCal Television";
  description = "LA County Fair";
  subdescription = `Get Your Kicks at the LA County Fair!

  Grab the kids, grab the sweetheart and prepare to meander down the Main Street of America – Route 66. It winds from Chicago to LA and right to the gates of Southern California’s historic 
  LA County Fair. Uniquely situated just off Route 66, the LA County Fair draws the majority of its guests from the iconic highway corridor, from San Bernardino to Santa Monica.
 
  The LA County Fair is open Aug. 31 - Sept. 23, 2018. Tickets on sale now at https://lacountyfair.com !`;

  // Social Sharing binding data
  title = "SoCal Television"
  header_link = "Special Spots"
  url = "https://www.socaltelevision.com/+#+/la-county-fair"
  summary = 'We venture throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com website"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more...'


}
