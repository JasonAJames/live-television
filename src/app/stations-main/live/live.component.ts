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
  subdesc = "BREAKING: The Holy Fire is threatening homes in the McVicker Canyon Park neighborhood of Lake Elsinore and move evacuations have been ordered."


  stationName = 'SoCal Television #HolyFire LIVE'
  description = this.offlineMessage1
  subdescription = this.subdesc
}
