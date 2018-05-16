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
  subdescription = "The AL West is on display as the Seattle Mariners host the Texas Rangers. To Watch Click 'Watch on Facebook' link above"
}
