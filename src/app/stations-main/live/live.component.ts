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

  offlineMessage1 = "SoCal Television LIVE BREAKING NEWS"
  subdesc = "A large brush fire has broken out near Winchester in Riverside county. Current estimate for the blaze is 300 acres."


  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
