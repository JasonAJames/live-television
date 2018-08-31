import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-county-fair',
  templateUrl: './la-county-fair.component.html',
  styleUrls: ['./la-county-fair.component.css']
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
}
