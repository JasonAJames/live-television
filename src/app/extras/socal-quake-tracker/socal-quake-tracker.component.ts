import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socal-quake-tracker',
  templateUrl: './socal-quake-tracker.component.html',
  styleUrls: ['./socal-quake-tracker.component.css','../../components/social-share-icons/social-share-icons.component.css']
})
export class SocalQuakeTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


stationName = 'SoCal Television Earthquake Tracker Map'
    
  // Social Sharing binding data
  title = "LIVE USGS Earthquake Tracker"
  header_link = "Earthquake Tracker"
  url = "https://www.socaltelevision.com/+#+/extras/quake-tracker"
  description = 'SoCalTelevision USGS Earthquake Tracking Realtime Map';
  subdescription = 'Feel a SHAKING??... Now You can Check it #LIVE on the SoCalTelevision.com Earthquake Tracker Map!'
  summary = this.description;
  source_url = this.url
  subject = "Check Out this SoCalTelevision.com Earthquake Tracker!"
  body = 'SoCalTelevision.com Special Spots ventures throughtout Southern California and beyond, to showcase attractions, events, entertainment, places of interest, restaurant reviews, and more... Check Out their New Earthquake Tracking Map! https://www.socaltelevision.com/#/extras/quake-tracker'

}
