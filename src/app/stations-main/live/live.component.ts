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

  offlineMessage1 = "SoCal Television Breaking News"
  subdesc = "RAW BREAKING NEWS: Standoff in Southwest Bakersfield. Three suspects have exited the building so far, we will update with more information."


  stationName = 'SoCal Television Breaking News LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
