import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-mlb-live',
  templateUrl: './sports-mlb-live.component.html',
  styleUrls: ['./sports-mlb-live.component.css']
})
export class SportsMlbLiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "MLB LIVE"
  subdescription = "Major League Baseball Rangers vs. Mariners LIVE on SoCal Television"
}
