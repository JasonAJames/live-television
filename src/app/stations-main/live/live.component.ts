import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css', '../../app.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television #LIVE"
  subdesc = "LIVE: Breaking news on the caravan situation. San Ysidro port of entry closed. CHP blocked off 805 and 5 freeways."


  stationName = 'SoCal Television Breaking News LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
