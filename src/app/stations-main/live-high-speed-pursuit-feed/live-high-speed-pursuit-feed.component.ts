import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-high-speed-pursuit-feed',
  templateUrl: './live-high-speed-pursuit-feed.component.html',
  styleUrls: ['./live-high-speed-pursuit-feed.component.css', '../../app.component.css']
})
export class LiveHighSpeedPursuitFeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stationName = "High Speed Pursuit LIVE"
  description = "Pursuit underway of an armed parolee in an RV in the Hollywood area. Unconfirmed reports that the suspect is also wanted for kidnapping."
}
