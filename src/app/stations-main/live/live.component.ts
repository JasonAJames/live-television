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
  subdesc = "Watch live: The Holy Fire rages for a third day in O.C.’s Trabuco Canyon area. The Manager of Glen Eden Sun Club's providing an update on the Holy Fire burning in the Trabuco Canyon area after making an arrest. "


  stationName = 'SoCal Television #HolyFire LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
