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

  offlineMessage1 = "SoCal Television 9/11 Memorial"
  subdesc = "LIVE: President Donald Trump and first lady Melania Trump are due to participate in a Sept. 11 service at the Shanksville memorial for victims of Flight 93"


  stationName = 'SoCal Television Breaking News LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
