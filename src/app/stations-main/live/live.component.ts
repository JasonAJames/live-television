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
  subdesc = "LIVE BREAKING NEWS: Authorities are chasing a possibly stolen vehicle on the freeway near Corona."


  stationName = 'SoCal Television Breaking News LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
