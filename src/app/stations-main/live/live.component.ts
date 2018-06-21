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
  subdesc = "BREAKING: Police pursuit on westbound 580 in Alameda County."


  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
