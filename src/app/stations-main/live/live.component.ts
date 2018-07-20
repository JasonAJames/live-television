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
  subdesc = "BREAKING: SkyLine brush fire just west of Corona, on the edge of the Cleveland National Forest. The #SkylineFire has burned at nearly 100 acres and the Orchard Glen residential area of Corona is under mandatory evacuation."


  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
