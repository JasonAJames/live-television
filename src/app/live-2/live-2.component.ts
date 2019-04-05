import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-2',
  templateUrl: './live-2.component.html',
  styleUrls: ['./live-2.component.css']
})
export class Live2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "SoCal Television LIVE BREAKING NEWS"
  subdesc = `President Trump visits the US/Mexico Border #LIVE`


  stationName = 'SoCal Television LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
